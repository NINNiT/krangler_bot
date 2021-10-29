export const ofs = [
  'of fierceness',
  'of corruption',
  'of krangling',
  'of supression',
  'of supression',
  'of juicing',
  'of divination',
  'of hatred',
  'of anger',
  'of wrath',
  'of scourge',
  'of the tempest',
  'of the fish wife',
  'of demons',
];

export const getRandOf = (): string => {
  return ofs[Math.floor(Math.random() * ofs.length)];
};
