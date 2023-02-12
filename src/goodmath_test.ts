import 'jasmine';
import { GoodMath } from './goodmath';

describe('goodmath', () => {
    it('adds', () => {
        const gm = new GoodMath(1, 3);
        expect(gm.add()).toBe(4);
    });

    it('subtracts', () => {
        const gm = new GoodMath(6, 2);
        expect(gm.subtract()).toBe(4);
    });
});
