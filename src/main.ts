import dotenv from 'dotenv';
dotenv.config();
import { CommentStream } from 'snoostorm';
import client from './redditApi';
import { generate } from './generator';
import { Comment } from 'snoowrap';

let connectedAt = Date.now() / 1000;

const logging = (comment: Comment, reply: string) => {
  console.log(`Posted reply to ${comment.id}`);
  console.log(reply);
  console.log('----------------------------------');
};

const krangleSearch = (text: string): boolean => {
  let regex = /krangl/i;
  if (regex.test(text)) return true;
  return false;
};

// process comments and reply
const handleProcessing = (comment: Comment): void => {
  if (krangleSearch(comment.body) && comment.author.name != 'krangler_bot' && connectedAt < comment.created_utc) {
    const reply = generate(comment);
    try {
      comment.reply(reply);
    } catch (e) {
      console.log(e);
    }

    logging(comment, reply);
  }
};

const comments = new CommentStream(client, {
  subreddit: process.env.SUBREDDIT,
  limit: 10,
  pollTime: 2000,
});

comments.on('item', (comment) => {
  handleProcessing(comment);
});
