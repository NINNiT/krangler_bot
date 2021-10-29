import { Comment } from 'snoowrap';
import { getRandAdjective } from './data/adjectives';
import { getRandAdverb } from './data/adverbs';
import { getRandNoun } from './data/nouns';
import { getRandOf } from './data/ofs';
import { getRandClosing, getRandLinkingWord, getRandMidSentence, getRandOpener } from './data/sentences';
import { getRandVerb } from './data/verbs';

const substitutePlaceholders = (reply: string): string => {
  return reply
    .replace(/{{ noun }}/g, getRandNoun())
    .replace(/{{ verb }}/g, getRandVerb())
    .replace(/{{ adverb }}/g, getRandAdverb())
    .replace(/{{ adjective }}/g, getRandAdjective())
    .replace(/{{ of }}/g, getRandOf());
};

// export const generate = (comment: Comment): string => {
export const generate = (): string => {
  let reply = '';

  //get a random opener
  reply += getRandOpener();

  //add first paragraph
  reply += '\n\n First you';

  //get random sentences
  reply += getRandMidSentence() + ' ';
  reply += getRandLinkingWord();
  reply += getRandMidSentence();

  //add second paragraph
  reply += '\n\n';
  reply += getRandClosing();

  reply = substitutePlaceholders(reply);

  return reply;
};
