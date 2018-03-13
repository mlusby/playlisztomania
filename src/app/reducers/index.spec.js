import { something } from './index';

describe('Test initial', () => {
    it('Should be retuns it is par', () => {
        expect('It is par').toEqual(something(2));
    });
    it('Should be retuns it is not par', () => {
        expect('It is not par').toEqual(something(3));
    });
});
