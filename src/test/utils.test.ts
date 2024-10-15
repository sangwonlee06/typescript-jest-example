import {toUpperCase} from "../app/utils";


describe('Utils test suite', () => {

    test('should return uppercase of valid string', () => {
        // arrange:
        const sut = toUpperCase;
        const expected = 'ABC'

        // act:
        const actual = toUpperCase('abc')

        // assert:
        const result = toUpperCase('abc');
        expect(result).toBe(expected);
    })
})