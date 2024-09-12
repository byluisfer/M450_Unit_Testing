const { getLastElement, isPalindrome, capitalizeWords, lengthOfLongestWord } = require('./formatting');

test('returns the last element of the array', () => {
    expect(getLastElement(myarray = ["Cristiano", "Ronaldo"])).toBe("Ronaldo");
});

test('the word "eye" is a Palindrome', () => {
    expect(isPalindrome('eye')).toBe(true);
});

test('the first letter will be UpperCase', () => {
    expect(capitalizeWords('hallo')).toBe('Hallo');
});

test('take the longest word of the sentence', () => {
    expect(lengthOfLongestWord('Cristiano Ronaldo is just better than Pessi')).toBe('Cristiano');
});