const { alphabetize, getHashMap, getAnagramsOf } = require('./index');

describe('anagrams', () => {
    const dictionary = ['listen', 'silent', 'enlist', 'google'];

    test('alphabetizes a word case-insensitively', () => {
        expect(alphabetize('Silent')).toBe('eilnst');
    });

    test('groups dictionary words by sorted letters', () => {
        expect(getHashMap(dictionary)).toEqual({
            eilnst: ['listen', 'silent', 'enlist'],
            eggloo: ['google']
        });
    });

    test('finds all anagrams for a word', () => {
        expect(getAnagramsOf('listen', dictionary)).toEqual(['listen', 'silent', 'enlist']);
    });

    test('returns undefined when there are no anagrams', () => {
        expect(getAnagramsOf('missing', dictionary)).toBeUndefined();
    });
});
