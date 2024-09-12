const { uniqueValues, letterFrequency, sortByKey, deepClone, intersection, divide } = require('./extended_formatting')

test('return unique values from an array', () => {
    expect(uniqueValues([1, 2, 2, 3, 4, 4, 5])).toEqual([1, 2, 3, 4, 5]);
});

test('create a deep clone of an object', () => {
    const obj = { a: 1, b: { c: 2 } };
    const clonedObj = deepClone(obj);
    expect(clonedObj).toEqual(obj);
    expect(clonedObj).not.toBe(obj);
});

test('return intersection of two arrays', () => {
    expect(intersection([1, 2, 3], [2, 3, 4])).toEqual([2, 3]);
});

// Positiv
test('correctly divide two numbers', () => {
    expect(divide(10, 2)).toBe(5);
});

// Negativ
test('should throw an error when dividing by 0', () => {
    expect(() => divide(10, 0)).toThrow("Divide by 0 is not allowed");
});