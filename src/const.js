const CHEAP = 'cheap';
const GOOD = 'good';
const FAST = 'fast';
const CHEAPGOOD = [CHEAP, GOOD].sort().join();
const CHEAPFAST = [CHEAP, FAST].sort().join();
const GOODFAST = [GOOD, FAST].sort().join();
// todo: generate keys dynamically
const VALUES = [CHEAP, GOOD, FAST];

const MAPPING = {
  nostate: 'There will be no software at all',
  [CHEAPGOOD]: 'This could take forever',
  [CHEAPFAST]: 'You should not blame developer for quality',
  [GOODFAST]: 'Make sure you have a lot of money',
  [CHEAP]: 'It will be cheap but...',
  [GOOD]: 'It will be good but...',
  [FAST]: 'It will be fast but...',
};

export {
  MAPPING,
  VALUES,
};
