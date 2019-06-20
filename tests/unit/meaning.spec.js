import * as consts from '@/const';
import getMeaning from '@/meaning';

const nostate = 'foo';
const mapping = { nostate };
consts.MAPPING = mapping;

describe('Meaning get', () => {
  it('when called without state then return nostate', () => {
    const meaning = getMeaning();

    expect(meaning).toBe(nostate);
  });

  it('when called without state then return nostate when mapping passed as parameter', () => {
    const meaning = getMeaning(undefined, mapping);

    expect(meaning).toBe(nostate);
  });

  it('when state is empty then return nostate', () => {
    const state = {};

    const meaning = getMeaning(state);

    expect(meaning).toBe(nostate);
  });

  it('when state has one key then return this key', () => {
    const foo = 'foo';
    const state = { [foo]: true };
    const localMapping = { foo };

    const meaning = getMeaning(state, localMapping);

    expect(meaning).toBe(foo);
  });

  it('when state has multiple keys then return sorted joined keys', () => {
    const foo = 'foo';
    const bar = 'bar';
    const barfoo = `${bar},${foo}`;
    const state = { [foo]: true, [bar]: true };
    const localMapping = { [barfoo]: barfoo };

    const meaning = getMeaning(state, localMapping);

    expect(meaning).toBe(barfoo);
  });

  it('when state has multiple keys then return joined keys when they are true', () => {
    const foo = 'foo';
    const bar = 'bar';
    const baz = 'baz';
    const barfoo = `${bar},${foo}`;
    const state = { [foo]: true, [bar]: true, [baz]: false };
    const localMapping = { [barfoo]: barfoo };

    const meaning = getMeaning(state, localMapping);

    expect(meaning).toBe(barfoo);
  });
});
