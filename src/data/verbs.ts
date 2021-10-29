export const verbs = [
  'krangle',
  'corrupt',
  'craft',
  'shift',
  'anoint',
  'spam',
  'target',
  'discombobulate',
  'link',
  'socket',
  'divine',
  'alt spam',
  'gamble',
  'sacrifice',
  'farm',
  'have',
  'resist',
  'double krangle',
  'triple krangle',
  'quadruple krangle',
  'double corrupt',
  'triple corrupt',
  'quadruple corrupt',
];

export const getRandVerb = (): string => {
  return verbs[Math.floor(Math.random() * verbs.length)];
};
