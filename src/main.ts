import { CommentStream } from 'snoostorm';
import client from './redditApi';
import { generate } from './generator';
import { Comment } from 'snoowrap';

// ACTIONS ////////////////////////////////////////////////////////////////////
const krangleSearch = (text: string): boolean => {
  let regex = /krangl/i;
  if (regex.test(text)) return true;
  return false;
};

// Handle incoming comments
const handleProcessing = (comment: Comment): void => {
  // Filter out non-krangled stuff
  if (krangleSearch(comment.body)) generate(comment);
};

// EVENTS //////////////////////////////////////////////////////////////////////
const comments = new CommentStream(client, {
  subreddit: 'PathOfExile',
  limit: 10,
  pollTime: 2000,
});

comments.on('item', (comment) => {
  handleProcessing(comment);
});
