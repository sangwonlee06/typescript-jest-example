import {getStringInfo, toUpperCase} from "../app/utils";


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

    describe.only('ToUpperCase examples', () => {
        it.each([
            {input: 'abc', expected: 'ABC'},
            {input: 'My-String', expected: 'MY-STRING'},
            {input: 'def', expected: 'DEF'},
        ])(`$input toUppercase should be $expected`, ({input, expected}) => {
            const actual = toUpperCase(input);
            expect(actual).toBe(expected);
        })
    })

    describe('getStringInfo for arg My-String should', () => {
        test('return right length', () => {
            const actual =getStringInfo('My-String');
            expect(actual.characters).toHaveLength(9);
        });
        test('return right lower case', () => {
            const actual =getStringInfo('My-String');
            expect(actual.lowerCase).toBe('my-string')
        });
        test('return right upper case', () => {
            const actual =getStringInfo('My-String');
            expect(actual.upperCase).toBe('MY-STRING')
        })
        test('return right characters', () => {
            const actual =getStringInfo('My-String');
            expect(actual.characters).toEqual(['M', 'y', '-', 'S', 't', 'r', 'i', 'n', 'g']);
            expect(actual.characters).toContain<String>('M');
            expect(actual.characters).toEqual(
                expect.arrayContaining(['S', 't', 'r', 'i', 'n', 'g', 'M', 'y','-'])
            );
        });
        test('return defined extra info', () => {
            const actual = getStringInfo('My-String');
            expect(actual.extraInfo).toBeDefined();
        });
        test('return right extra info', () => {
            const actual = getStringInfo('My-String');
            expect(actual.extraInfo).toEqual({})
        });
    })
})