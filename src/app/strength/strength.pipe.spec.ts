import { StrengthPipe } from "./strength.pipe";

describe('StrengthPipe', () => {

    it('should return weak if power is 5', () => {
        // arrange
        const pipe = new StrengthPipe();
        // act / assert
        expect(pipe.transform(5)).toEqual('5 (weak)');
    })

    it('should display strong if between 10 and 20', () => {
        const pipe = new StrengthPipe();

        expect(pipe.transform(11)).toEqual('11 (strong)')
    })

})