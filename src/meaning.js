import { MAPPING } from '@/const';

function getMeaning(state, mapping = MAPPING) {
  if (state === undefined) return mapping.nostate;

  const keys = Object.entries(state)
    .filter(([, value]) => value === true)
    .map(([key]) => key)
    .sort();

  const key = keys.join();
  return mapping[key] || mapping.nostate;
}

export default getMeaning;
