// problems 1-3
var peopleWhoWantToSeeMadMaxFuryRoad = [
{
    name: "Mike",
    age: 12,
    gender: "male",
},
{
    
        name: "Madeline",
        age: 80,
        gender: "female",
},
{
    name: "Cheryl",
    age: 22,
    gender: "female",
},
{
    name: "Sam",
    age: 30,
    gender: "male",
},
{
    name: "Suzy",
    age: 4,
    gender: "female",
},
];

for ( let i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++ ) {
    if(peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18) { let userGender = peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male" ? "He's" : "She's"
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough. " + userGender + " good to see Mad Max Fury Road.")
    }
    else {
        let userGender = peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male" ? "him" : "her"
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough to see Mad Max Fury Road, don't let " + userGender + " in.");
    }
}
// 4
for ( var i = 0; i <= 100; i++) {
    i % 2 === 0 ? console.log(i + " is even ")  : console.log(i + " is odd ");
}


// Extra Credit

var lights = false;

var toggle = [ 2,3,2 ];

for (var i = 0; i < toggle.length; i++ ) {
    for( var x = 0; x < toggle[i]; x++ ) {
        lights = !lights;
    }
}
 if( lights ) {
     console.log("The lights are on");
 } else { 
     console.log("The lights are off");
 }
 
















