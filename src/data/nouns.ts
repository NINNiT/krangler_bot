export const nouns = [
  'fierceness',
  'environmental property',
  'destroyed area',
  'envirosuit',
  'thundercube',
  'conqueror',
  'demonic spirit',
  'claw',
  'spirit card',
  'sulphite',
  'resonator',
  'metanode',
  'item',
  'sacramental oil',
  'mutated horror',
  'quadratic shrine',
  'head of dagk',
  'reputation',
  'map event',
  'resistance',
  'dimensional strangle',
  'miasma',
  'ring',
  'krangleverse',
  'krangle rod',
  'weakness cap',
  'swine shrine',
  'splicer',
  'emblem',
  'mantle',
  'pelt',
  'shroud',
  'skin',
  'demonic maul',
  'fishwife',
  'ailment',
  'fishing rod',
  'explody chest',
  'triple corrupted slayer charge',
];

export const getRandNoun = (): string => {
  return nouns[Math.floor(Math.random() * nouns.length)];
};
