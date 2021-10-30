import { Comment } from 'snoowrap';
import { getRandAdjective } from './data/adjectives';
import { getRandAdverb } from './data/adverbs';
import { getRandNoun } from './data/nouns';
import { getRandOf } from './data/ofs';
import { getRandClosing, getRandLinkingWord, getRandMidSentence, getRandOpener } from './data/sentences';
import { getRandVerb } from './data/verbs';

const substitutePlaceholders = (s: string, usr: string): string => {
  return s
    .split(' ')
    .map((item) => {
      switch (item) {
        case '{{user}}':
          return 'u/' + usr;
          break;
        case '{{noun}}':
          return getRandNoun();
          break;
        case '{{verb}}':
          return getRandVerb();
          break;
        case '{{adverb}}':
          return getRandAdverb();
          break;
        case '{{adjective}}':
          return getRandAdjective();
          break;
        case '{{of}}':
          return getRandOf();
          break;
        default:
          return item;
          break;
      }
    })
    .join(' ');
};

export const generate = (comment: Comment): string => {
  let reply = '';

  //get a random opener
  reply += substitutePlaceholders(getRandOpener(), comment.author.name) + ':';

  //add first paragraph
  reply += '\n\n';

  //add first word
  reply += 'first you ';

  //get random sentences
  reply += substitutePlaceholders(getRandMidSentence(), comment.author.name) + ', ';
  reply += getRandLinkingWord() + ' ';
  reply += substitutePlaceholders(getRandMidSentence(), comment.author.name) + '.';

  //add second paragraph
  reply += '\n\n';
  reply += substitutePlaceholders(getRandClosing(), comment.author.name) + '!';

  //add footer
  reply += '\n\n --- \n\n';
  reply +=
    '^(masterninni brought me into this scourged land. i like krangling stuff automatically, so please DM him if there are any problems. beep.)';
  return reply;
};
