//OPERADOR && (AND)

//function mayorYMenorYPar(num){
    //if(num > 5 && num < 10 && num % 2===0 )console.log(true);
    //else console.log(false);
//};

//mayorYMenorYPar(7);
//mayorYMenorYPar(8);

//OPERADOR || OR

//function operadorOr(str){
    //if(str === "Henry" || str.length<2 ) console.log(true);
    //else console.log(false);
//};

////operadorOr("Henry");
////operadorOr("JavaScript");
////operadorOr("H");

//OPERADOR NOT (negacion)

////function negacion(permiso){
    //if(permiso) console.log("Tiene Permiso");
    //if(!permiso) console.log("Tiene Permiso");
    //if(permiso === true) console.log("Tiene Permiso");
   //// if(permiso !== true) console.log("Tiene Permiso");

////};

////negacion(true);
////negacion(false);

//EJEMPLO

function condicionCompleja(num) {
    if(num > 9 && num % 2 === 0 || num === 3 ) console.log(true);
    else console.log(false);
};

condicionCompleja(10);
condicionCompleja(6);
condicionCompleja(3);
condicionCompleja(5);
