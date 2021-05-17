//A
const superheroes = [
    {name: "Batman", alter_ego: "Bruce Wayne"}, 
    {name: "Superman", alter_ego: "Clark Kent"}, 
    {name: "Spiderman", alter_ego: "Peter Parker"}]
    
const findSpiderMan = superheroes.find((item) => {
    return item.name === "Spiderman"
})
    
console.log(findSpiderMan) 
    // Find Spiderman
    // result should be: {name: "Spiderman", alter_ego: "Peter Parker"}

//B
const doubleArrayValues = function(array) {
    array.forEach((item) => {
        const doubledArray = item * 2;
        console.log(doubledArray);
    })
};

doubleArrayValues([1, 2, 3]) 
  // result should be [2, 4, 6]

//C 
//! not working a supposed to?
const containsNumberBiggerThan10 = function(array) {
    array.some((item) => {
        console.log(item >= 10)
    })
};
containsNumberBiggerThan10([1, 4, 3, 6, 9, 7, 11]) 
  // result should be true
containsNumberBiggerThan10([1,2,1,2,1,2])
  // result should be false

//D
//! not working
const isItalyInTheGreat7 = function(array) {
    array.some((item) => {
       item === 'Canada'
    })
};
isItalyInTheGreat7(['Canada', 'France','Germany','Italy','Japan','United Kingdom','United States']) 
// result should be true
 
//E
const tenfold = function(array) {
    array.forEach((item) => {
        console.log(item * 10);
    })
};
console.log(tenfold([1, 4, 3, 6, 9, 7, 11]))
// result should be [10, 40, 30, 60, 90, 70, 110]

//F 
//! doesnt work
const isBelow100 = function(array) {
    array.every((item) => {
        item <= 100
    })
};
console.log(isBelow100([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98 ]))
// result should be: false

//G Bonus
//! doesnt work
const bigSum = function(array) {
    array.reduce((currentTotal, item) => {
        return item + currentTotal;
    }, 0)
};
console.log(bigSum([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234]))
// result should be 1118