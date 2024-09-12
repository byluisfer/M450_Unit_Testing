function getLastElement(array) {
    return array[array.length - 1];
}

function isPalindrome (str) {
    return str == str.split('').reverse().join('');
}

function capitalizeWords(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
}

function lengthOfLongestWord(str) {
    str = str.split(" ") 
    return str.sort((a, b) => b.length - a.length)[0] 
}

module.exports = { getLastElement, isPalindrome, capitalizeWords, lengthOfLongestWord }