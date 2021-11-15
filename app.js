hoisting();
hoistnum();

const constVariable= 15;
var varVariable= 10;
let letVariable=12;

function loopOne(){
    for(var i= 0; i< 7; i++){ //Notice the declaration in var
        console.log(i);
    }
    console.log(" ");
    console.log(i);
    console.log(" ");               //Notice how the variable outside the for loop can be accesful
}


function loopTwo(){
    for(let i= 0; i<7; i++){ //Notice the declaration in let
        console.log(i);
    }
    console.log(" ");
    console.log(i);                 //Notice how the variable outside the for loop cannot be accesful
    console.log(" "); 
}

function constChange(){     //Trying to change the value of a const Variable
    constVariable=20;
    console.log(constVariable);
}

function varChange(){       //Trying to change the value of a variable
    varVariable=20;
    console.log(varVariable);
}

function letChange(){       //Trying to change the value of a variable
    letVariable=20;
    console.log(letVariable);
}

function hoisting(){
    console.log("Notice how this function is called before it's even made")
}

function hoistnum(){
    console.log(varVariable);
    console.log("The function is called before the variable is declared")
}