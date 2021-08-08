/*-------------------------------------
    variable declaration ==== 1
--------------------------------------*/
var myName ="Md Saifur Rahman"  // string variable
console.log(myName);
console.log(typeof(myName));   // string

var isTrue = true;   //bool variable
console.log(isTrue);
console.log(typeof(isTrue));// boolean

var number = 87.9;   //number variable
console.log(number);
console.log(typeof(number));// number

/*-------------------------------------
       let and const ==== 2
--------------------------------------*/

const isChangeable = "Hi saifur try to change this but you cannot change ha ha ha ! ";
console.log(isChangeable);
console.log(typeof(isChangeable));// string

/*
isChangeable ="Why why why i cannot change it !! i must change huh!!";
console.log(isChangeable);  //ops! i failed,sorrow. 
*/

// let leta let let

let x = "Hi Saifur!"; //Variables defined with let cannot be redeclared
console.log(x);
//let x = 100; // SyntaxError: 'x' has already been declared



/*-------------------------------------
      playing some math ==== 3
--------------------------------------*/
var number1=100 , number2=25; //two number variable declaration
console.log(number1,number2);

var addition = number1 + number2;
var substruction = number1 - number2;
var multiplecation = number1 * number2;
var diivision = number1 / number2;
var modulas = number1 % number2;
console.log(addition); // 125
console.log(substruction);// 75
console.log(multiplecation);//2500
console.log(diivision);//4

if(modulas == 0){
    console.log('Remainder for if  = ',modulas);
    modulas=30%17;// change modulas value
}
else 
 console.log('Remainder for else = ',modulas);


 var removeMyheadoverload = (modulas == 0) ? "Oh! Don't Go else Part ! " : "Hurray ! yes yes yes go else part I am success!!";
 console.log(removeMyheadoverload,modulas); //Hurray ! yes yes yes go else part I am success!! 13

/*-------------------------------------
      Comparison Operators  ==== 4
--------------------------------------*/
var age =20;
let voteable = (age < 18) ? "Not Allowed !":"Allowed"; // <
console.log('Your are ',voteable ,'to vote.');

