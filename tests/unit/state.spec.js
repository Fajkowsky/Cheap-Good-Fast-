import { VALUES } from '@/const';
import * as utils from '@/utils';
import {
  canSwitch, computeState, createState, getSwitchKey,
} from '@/state';

utils.default = jest.fn(v => v);

describe('State creating', () => {
  it('when no list is given then stateect state is created from const', () => {
    expect(VALUES.sort()).toEqual(Object.keys(createState()).sort());
  });

  it('when stateect state is created then initial values are false', () => {
    expect(Object.values(createState()).every(v => v === false)).toBeTruthy();
  });

  it('when list is given then stateect state is created from it', () => {
    const values = ['foo', 'bar'];
    const state = {
      [values[0]]: false,
      [values[1]]: false,
    };

    expect(state).toEqual(createState(values));
  });

  it('when list is empty then stateect state is empty', () => {
    const values = [];

    expect({}).toEqual(createState(values));
  });
});

describe('State canSwitch', () => {
  it('when only zeros then switch freely', () => {
    const state = {
      foo: false,
      bar: false,
    };

    expect(canSwitch(state)).toBeTruthy();
  });

  it('when only ones then can\'t switch', () => {
    const state = {
      foo: true,
      bar: true,
    };

    expect(canSwitch(state)).toBeFalsy();
  });

  it('when empty state then can\'t switch', () => {
    expect(canSwitch({})).toBeFalsy();
  });
});

describe('State getSwitchKey', () => {
  it('when function is called then keys are shuffled', () => {
    getSwitchKey('', {});

    expect(utils.default).toHaveBeenCalledTimes(1);
  });

  it('when only ones then get another key to switch', () => {
    const foo = 'foo';
    const bar = 'bar';
    const state = {
      [foo]: true,
      [bar]: false,
    };

    expect(getSwitchKey(bar, state)).toEqual(foo);
  });

  it('when index is zero then get last key', () => {
    const state = {
      foo: true,
      bar: true,
      baz: true,
    };
    const keys = Object.keys(state);
    const first = keys[0];
    const last = keys[keys.length - 1];

    expect(getSwitchKey(first, state)).toBe(last);
  });

  it('when index is not zero then get previous key', () => {
    const state = {
      foo: true,
      bar: true,
      baz: true,
    };
    const keys = Object.keys(state);
    const first = keys[0];
    const second = keys[1];

    expect(getSwitchKey(second, state)).toBe(first);
  });
});


describe('State computeState', () => {
  it('when zeros then switch passed value', () => {
    const foo = 'foo';
    const bar = 'bar';
    const state = {
      [foo]: false,
      [bar]: false,
    };

    const newState = computeState(foo, state);

    expect(newState[foo]).toBe(!state[foo]);
  });

  it('when ones then at least one zero', () => {
    const foo = 'foo';
    const bar = 'bar';
    const baz = 'baz';
    const state = {
      [foo]: true,
      [bar]: true,
      [baz]: true,
    };

    const newState = computeState(foo, state);

    expect(Object.values(newState).some(v => v === false)).toBeTruthy();
  });

  it('when deselecting one then only one became zero', () => {
    const foo = 'foo';
    const bar = 'bar';
    const baz = 'baz';

    const state = {
      [foo]: true,
      [bar]: true,
      [baz]: true,
    };

    const newState = computeState(bar, state);

    expect(Object.values(newState).filter(v => v === false).length).toEqual(1);
  });

  it('when deselecting one then another should switch', () => {
    const foo = 'foo';
    const bar = 'bar';
    const baz = 'baz';

    const state = {
      [foo]: true,
      [bar]: true,
      [baz]: false,
    };

    const newState = computeState(baz, state);

    expect(Object.values(newState).filter(v => v === false).length).toEqual(1);
  });
});
