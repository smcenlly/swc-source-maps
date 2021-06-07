import * as crypto from 'crypto';

describe('my test', () => {
  it('should work', () => {
    expect(true).toBe(true);
    console.log(new Error().stack);
    throw new Error('Boom');
  });
});