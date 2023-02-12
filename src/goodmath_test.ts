import 'jasmine';
import { GoodMath } from './goodmath';

describe('goodmath', () => {
    it('adds', () => {
        const gm = new GoodMath(1, 3);
        expect(gm.add()).toBe(4);
    });
});