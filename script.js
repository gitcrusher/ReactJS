// how to use spread operator to copy the array -->
var state =[1,2,3,4];
var copy = [...state];
copy.pop();

//for objects -->

var obj = {name:"harsh",age: 24};
var c = {...obj};
c.name = "Harshita";
c.age = 25;
//to update the value of obj we have to assign obj with c.
obj=c;


//Destructuring ............
var o = {name: "harsh", social:{
    facebook: {
        first: "hi",
        sec : "hola"
    },
},
};

const{sec} = o.social.facebook; // here as var o is an object we have used curly bars if it would be an array we would be using the [] brackets.