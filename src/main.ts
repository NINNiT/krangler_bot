import { InboxStream, CommentStream, SubmissionStream } from 'snoostorm';
import client from './redditApi';
import { generate } from './generator';
import { Comment, Submission } from 'snoowrap';

// ACTIONS ////////////////////////////////////////////////////////////////////
const krangleSearch = (body: string): boolean => {
  let regex = /krangl/i;
  if (regex.test(body)) return true;
  return false;
};

const handleProcessing = (input: Comment) => {
  if (krangleSearch(input.body)) console.log(input.body);
};

// EVENTS //////////////////////////////////////////////////////////////////////
const comments = new CommentStream(client, {
  subreddit: 'PathOfExile',
  limit: 10,
  pollTime: 2000,
});

comments.on('item', (input) => {
  handleProcessing(input);
});

// const submissions = new SubmissionStream(client, {
//   subreddit: 'PathOfExile',
//   limit: 10,
//   pollTime: 2000,
// });

// submissions.on('item', (input) => {
//   handleIncoming(input.title, 'post');
// });
