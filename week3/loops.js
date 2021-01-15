
// problem 1 //
var  peopleWhoWantToSeeMadMaxFuryRoad = [
    {
        name: "Mike",
        age: 12,
        gender: "male",
    },{
        name: "Madeline",
        age: 80,
        gender: "female",
    },{

        name: "Cheryl",
        age: 22,
        gender: "female",
    },{
    
        name: "Sam",
        age: 30,
        gender: "male",
    },{
        name: "Suzy",
        age: 4,
        gender: "female",
}
];


//1

    for ( let i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++ ) {
        if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18)  {
            console.log("is old enough");
        } else {
            console.log("not old enough");
        }   
        
    }


// 2
    for ( var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++ ) {
        if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18)  {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough");
        } else {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough");
    }   
    
}
// 3
for ( var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++ ) {
        if(peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18) {
            
            if(peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male") {
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough to see Mad Max Fury Road, let HIM in.");
        } else {
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough. SHE'S good to see Mad Max Fury .");
        }
       
    }  else {
            if(peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male") {
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is  not old enough to see Mad Max Fury Road, do not let HIM in.");

        } else {
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough to see Mad Max Fury Road, don't let Her in");
        } 
    }
}  

//4

for ( var i = 0; i <= 100; i++) {
    i % 2 === 0 ? console.log(i + " is even") : console.log(i + " is odd");

}

// extra credit
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
 
