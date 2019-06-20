import shuffle from '@/utils';

describe('Shuffle utils', () => {
  it('when an array is shuffled then is not the same object', () => {
    const arr = [1, 2, 3, 4];
    const shuffledArr = shuffle(arr);

    expect(arr).not.toBe(shuffledArr);
  });
});
