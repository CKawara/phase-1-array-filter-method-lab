const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];

// function findMatching(enter){
//     const matching = drivers.filter(driver => driver === enter)
//     return matching;
// }
// console.log(findMatching('Bobby'));


function findMatching(arr, name){
    return arr.filter(arr => arr.toLowerCase() === name.toLowerCase())
}
console.log(findMatching(drivers, 'bobby'));