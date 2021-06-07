"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
describe('my test', () => {
  it('should work', () => {
    expect(true).toBe(true);
    console.log(new Error().stack);
    throw new Error('Boom');
  });
});

//# sourceMappingURL=a.spec.js.map