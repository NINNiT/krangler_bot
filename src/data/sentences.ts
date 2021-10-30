export const openers = [
  'hi {{user}} i see you like krangling. let me give you a tip',
  'krangling is fun, i know! here is what i normally do',
  'hey {{user}} if you want to make currency fast while krangling, i suggest you to do this',
  'hey there, weary exile who goes by the name of {{user}} - i normally do not give this kind of tips, but here we go',
  'i consider myself an expert krangler, trust me with this',
  'did {{user}} just mention krangling? do this',
  'why am i here? whatever, here goes',
  'i see you like krangling, {{user}} ... i like it too! the best way to krangle is',
];

export const midSentences = [
  '{{verb}} the {{noun}} with your {{noun}}',
  '{{adverb}} {{verb}} the {{noun}} and {{verb}} the {{noun}}',
  '{{adverb}} {{verb}} it and beware of the dangers that the {{noun}} can bring',
  '{{verb}} it, you should receive an {{adjective}} {{noun}} {{of}}',
  'pray to kitava using your {{adjective}} {{noun}}',
  '{{verb}} it your {{adjective}} {{noun}} should give you {{noun}}',
];

export const closings = [
  'if done correctly, you should now have an {{adjective}} {{noun}} {{of}} which - to be honest - is pretty neat',
  'congrats, you are know the proud owner of the following item: {{adjective}} {{noun}} {{of}}',
  'i hope you learned something today',
  'otherwise, you could always pray to solaris',
  'otherwise, you could always pray to lunaris',
  'well, i will resume different krangles now. see you.',
  'see you on the shores of weaeclast',
];

export const linkingWords = ['then', 'while you', 'once you', 'if you correctly', 'afterwards,'];

export const getRandOpener = (): string => {
  return openers[Math.floor(Math.random() * openers.length)];
};

export const getRandMidSentence = (): string => {
  return midSentences[Math.floor(Math.random() * midSentences.length)];
};

export const getRandClosing = (): string => {
  return closings[Math.floor(Math.random() * closings.length)];
};

export const getRandLinkingWord = (): string => {
  return linkingWords[Math.floor(Math.random() * linkingWords.length)];
};
