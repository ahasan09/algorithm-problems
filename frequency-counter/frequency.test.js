const { normalizeText, countCharacters, countWords } = require('./frequency');

describe('frequency counter', () => {
    test('normalizes text before counting', () => {
        expect(normalizeText('Hello, World! 123')).toBe('hello world ');
    });

    test('counts characters in normalized text', () => {
        expect(countCharacters('Aa b!')).toEqual({
            a: 2,
            ' ': 1,
            b: 1
        });
    });

    test('counts repeated words', () => {
        expect(countWords('Safia world usa. Safia from bangladesh.')).toMatchObject({
            safia: 2,
            world: 1,
            usa: 1,
            from: 1,
            bangladesh: 1
        });
    });
});
