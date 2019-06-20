function canSwitch(state) {
  const keysLength = Object.keys(state).length;
  const onesLength = Object
    .values(state)
    .filter(s => s === true)
    .length;
  return keysLength - onesLength;
}

function getSwitchKey(value, state) {
  const keys = Object.keys(state);
  const valueIndex = keys.indexOf(value);
  let key;

  if (valueIndex === 0) {
    key = keys[keys.length - 1];
  } else {
    key = keys[valueIndex - 1];
  }

  return key;
}

function computeState(value, state) {
  const localState = state;

  localState[value] = !localState[value];

  if (!canSwitch(state)) {
    const key = getSwitchKey();
    localState[key] = !localState[key];
  }

  return localState;
}

export default computeState;
