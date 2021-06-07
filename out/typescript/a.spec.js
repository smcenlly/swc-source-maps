"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
describe('my test', function () {
    it('should work', function () {
        expect(true).toBe(true);
        console.log(new Error().stack);
        throw new Error('Boom');
    });
});
//# sourceMappingURL=a.spec.js.map