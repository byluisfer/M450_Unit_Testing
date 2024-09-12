function uniqueValues(array) {
    return [...new Set(array)]
}

function letterFrequency(word) {
}

function sortByKey(params) {

}

function deepClone(object) {
    return JSON.parse(JSON.stringify(object))
}

function intersection(array1, array2) {
    return array1.filter(value => array2.includes(value));
}

function divide(a, b) {
    return a / b
}

module.exports = { uniqueValues, letterFrequency, sortByKey, deepClone, intersection, divide }