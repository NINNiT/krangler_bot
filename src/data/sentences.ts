export const openers = [
  'hi {{ user }}, i see you like krangling. let me give you a tip:',
  'krangling is fun, i know! here is what i normally do:',
  'hey {{ user }} if you want to make currency fast while krangling, i suggest you to do this:',
  'hey there, weary exile who goes by the name of {{ user }}. i normally do not give this kind of tips, but here we go:',
  'i consider myself an expert krangler, trust me with this:',
  'did {{ user }} just mention krangling?',
  'why am i here? whatever, here goes:',
  'i see you like krangling, {{ user }}...i like it too! the best way to krangle is:',
];

export const midSentences = [
  '{{ verb }} the {{ noun }} you need to {{ verb }} a {{ adjective }} {{ noun }} with your {{ noun }}.',
  '{{ adverb }} {{ verb }} the {{ noun }} and {{ verb }} the {{ noun }}, with some luck you will get a {{ noun }}.',
  '{{ adverb }} {{ verb }} it, beware of the dangers that the {{ noun }} can bring.',
  '{{ verb }} it, you should recieve an {{ adjective }} {{ noun }} {{ of }}. You could go even further.',
];

export const closings = [
  'if done correctly, you should know have an {{ adjective }} {{ noun }} {{ of }}, which - to be honest - is pretty neat.',
  'congrats, you are know the proud owner of the following item: {{ adjective }} {{ noun }} {{ of }}',
  'i hope you learned something today!',
  'see you on the shores of weaeclast!',
];

export const linkingWords = ['then,', 'while you', 'once you', 'if you correctly', 'afterwards,'];

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
  return linknigWords[Math.floor(Math.random() * linkingWords.length)];
};
