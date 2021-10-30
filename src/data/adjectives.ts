export const adjectives = [
  'fierce',
  'corrupted',
  'krangled',
  'socketed',
  'linked',
  'suppressed',
  'overflowing',
  'juiced',
  'divined',
  'spammed',
  'anointed',
  'frozen',
  'ignited',
  'shocked',
  'brittled',
  'scourged',
  'well oiled',
  'ascended',
  'rich',
  'rare',
  'magic',
  'unique',
  'dyadic',
  'mesmerizing',
  'demonic',
];

export const getRandAdjective = (): string => {
  return adjectives[Math.floor(Math.random() * adjectives.length)];
};
