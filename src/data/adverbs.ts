export const adverbs = ['fiercly', 'smoothly', 'viciously', 'optimistically', 'playfully'];

export const getRandAdverb = (): string => {
  return adverbs[Math.floor(Math.random() * adverbs.length)];
};
