//1. Uppercase + Lowercase
function capitilizeAndLowercase(str) {
    var upperAndLowerCase = str.toUpperCase() + str.toLowerCase();
    return upperAndLowerCase;
}
console.log(capitilizeAndLowercase("Hello"));


//2. Using Math.floor
function findMiddleIndex(str) {
    return Math.floor(str.length / 2);
}

console.log(findMiddleIndex("Hello"));
console.log(findMiddleIndex("Hello World"));

//3. Slice
function returnFirstHalf(str) {
    return str.slice(0, findMiddleIndex(str));
}
 console.log(returnFirstHalf("Hello"));
 console.log(returnFirstHalf("Hello World"));

 //4. Half Capitilized and Half Lower Case
 function capitilizeAndLowercase(str) {
     var stringLength = str.length;
     var halfWord = Math.floor(stringLength) / 2;
     var firstHalfCaps = str.slice(0, halfWord);
     var secondHalfLower = str.slice(halfWord, stringLength);
     return firstHalfCaps.toUpperCase() + secondHalfLower.toLowerCase();
 }
 console.log(capitilizeAndLowercase("Hello"));
 console.log(capitilizeAndLowercase("Hello World"));

 //Optional Code Challenge
 function capitilize(str) {
     let friends = str.split("");
     for(var i = 0; i < friends.length; i++) {
         friends[i] = friends[i].charAt(0).toUpperCase() + friends[i].slice(1);
     }
     let string = friends.join("");
     return string;
 }

 console.log(capitilize("hey friends! practice practice practice!"));

