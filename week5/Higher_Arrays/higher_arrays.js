// AUse the built-in array method .filter() to solve all of these problems:
//1. Given an array of numbers, return a new array that has only the numbers that are 5 or greater.

function fiveAndGreaterOnly(arr) {
    const result = arr.filter(function(num){
        if (num >= 5)
            return num;
    });
    return result;
}


//console.log(fiveAndGreaterOnly([3, 6, 8, 2]));

// 2) Given an array of numbers, return a new array   that only includes the even numbers.
//method .filter()


function evensOnly(arr)
{
    const result = arr.filter(function(num){
        if (num % 2 == 0)
            return num;
    }
    )
    return result;
}
//console.log(evensOnly([3, 6, 8, 2]));





// B. Use the built-in .map() method on arrays to solve all of these problems:
// 1. Make an array of numbers that are doubles of the first array

function doubleNumbers(arr) {

    const result = arr.map(function(num) {
        return num + num;
    }
    )
    return result;
}
//console.log(doubleNumbers([2, 5, 100]));


 //2. Take an array of numbers and make them strings

function stringItUp(arr) {
    const result = arr.map(function(num){
        return num.toString();
    });
    return result;
}

//console.log(stringItUp([2, 5, 100]));

// 3. Capitalize each of an array of names

function capitalizeNames(arr) {
    const result = arr.map(function(cap){
        return cap.charAt(0).toUpperCase() + cap.substr(1).toLowerCase();
    });
    return result;  
}


//console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]));


// C.Use the built-in .reduce() method on arrays to solve all of these problems:

// 1. Turn an array of numbers into a total of all the numbers

function total(arr) {
    const result = arr.reduce(function(num, finalSum){
        return finalSum = finalSum + num;
    });
    return result;
    
}


//console.log(total([1, 2, 3]));

// 2. Turn an array of numbers into a long string of all those numbers.

function stringConcat(arr) {
    const result = arr.reduce(function(total, num){
        return total + num.toString();
    });
    
    return result;
}

//console.log(stringConcat([1, 2, 3]));

// 3. Turn an array of voter objects into a count of how many people voted

function totalVotes(arr) {
    const result = arr.reduce(function(total, voters) {

        if (voters.voted == true) {
            total++
        }        
        return total;
    
    }, 0)

}    
function totalVotes(arr) 
{
    const result = arr.reduce(function(total, votes) {
        if (votes.voted == true) {
            total++
        }
        return total;
    
    }, 0
    )
    return result;
}

var voters = [
    {name: "Bob" , age: 30, voted: true},
    {name: "Jake" , age: 32, voted: true},
    {name: "Kate" , age: 25, voted: false},
    {name: "Sam" , age: 20, voted: false},
    {name: "Phil" , age: 21, voted: true},
    {name: "Ed" , age: 55, voted: true},
    {name: "Tami" , age: 54, voted: true},
    {name: "Mary" , age: 31, voted: false},
    {name: "Becky" , age: 43, voted: false},
    {name: "Joey" , age: 41, voted: true},
    {name: "Jeff" , age: 30, voted: true},
    {name: "Zack" , age: 19, voted: false}

];

//console.log(totalVotes(voters));





//Section D. Use the built-in .sort() method on arrays to solve all of these problems:
//1) Sort an array from smallest number to largest

function leastToGreatest(arr) {
    const result = arr.sort(function(num1, num2){
        return num1 - num2;
    });
    return result;
}

console.log(leastToGreatest([1, 3, 5, 2, 90, 20]));

//.sort() method
// sort an array from largest to smallest
function greatestToLeast(arr) {
    const result = arr.sort(function(num1, num2){
        return num2 - num1;
    })
    return result;
}


console.log(greatestToLeast([1, 3, 5, 2, 90, 20]));

//3) Sort an array from shortest string to longest

function lengthSort(arr) {
    const result = arr.sort(function(num1, num2){
        return num1.length - num2.length;

    })
    return result;
}

console.log(lengthSort(["dog", "wolf", "by", "family","eaten"]));
