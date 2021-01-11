//problem 1

function sum(a, b){
    console.log(a + b);

};
sum(1,2);

//problem 2

function rating(a, b, c) {
    console.log(Math.max(a, b, c));
};
rating( 2, 5, 10);

//problem 3

function evenOdd(a) {
    if (a % 2 === 0){
        console.log("even");
    } else {
        console.log("odd");
    }
}
evenOdd(1);
evenOdd(8);

//problem4

var full = "carboxymethylcellulose";


function find(x) {
    if (x.length <=20) {
        console.log(x.concat(x + x));

    } else {
        console.log(x.slice(0, x.length / 2));
    }
};

find(full);