const { convertToWord } = require('./index');

describe('convertToWord', () => {
    test.each([
        [0, 'zero'],
        [7, 'Seven'],
        [19, 'Nineteen'],
        [42, 'Forty Two'],
        [100, 'One hundred'],
        [305, 'Three hundred Five'],
        [9999, 'Nine thousand Nine hundred Ninety Nine']
    ])('converts %i to %s', (input, expected) => {
        expect(convertToWord(input)).toBe(expected);
    });

    test('throws for negative numbers', () => {
        expect(() => convertToWord(-1)).toThrow('Negative numbers are not supported.');
    });

    test('returns undefined for unsupported numbers larger than 9999', () => {
        expect(convertToWord(10000)).toBeUndefined();
    });
});
