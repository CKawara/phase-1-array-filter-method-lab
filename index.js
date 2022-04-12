const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];

function findMatching(arr, name){
    return arr.filter(arr => arr.toLowerCase() === name.toLowerCase())
}
function fuzzyMatch(arr, name){
    return arr.filter(arr => arr.slice(0,2) === name.slice(0,2))
}
function matchName(arr, name){
    return arr.filter(arr => arr.name === name )
}