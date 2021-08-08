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

var isTrue = 2 > "saifur";//false
console.log(isTrue);

var isFalse = 2 == 2;//true
console.log(isFalse);
//Greater than or equal (>=)
console.log('ab' >= 'aa');// expected output: true
//Less than or equal (<=)
console.log(3333 <= 3333);// expected output: true
//Not equal (!=)
console.log(3333 != 3333);// expected output: false

const a = 20;
const b = -20;
//Logical AND (&&)
console.log(a > 0 && b > 0);// expected output: false
//Logical OR (||)
console.log(a > 0 || b > 0);// expected output: true
//Logical NOT (!)
console.log(!(a > 0 || b > 0));// expected output: false
/*-------------------------------------
      Comparison Operators  ==== 5
--------------------------------------*/
function testNumber(a) {
  let result;
  if (a > 0 && a<=1000) {
    result = 'positive and lessthen equal 1000.';
  }
  else if(a>1000){
    result = 'larger then  1000.';
  } 
  else {
    result = 'NOT positive';
  }
  return result;
}

console.log(testNumber(-5));// expected output: "NOT positive"
/*-------------------------------------
      if-else  ==== 4
--------------------------------------*/
var num1= Math.round(Math.random()*10);
var num2= Math.round(Math.random()*10);
function twoConditions(n1, n2) {
    if (n1 > 0 && n2 < 5) {
      console.log("Fulfill both conditions",n1,n2);
    } else {
      console.log("doesn't fulfill both conditions",n1,n2);
    }
  }
  console.log(twoConditions(num1, num2));
/*-------------------------------------
      while loop
        1. to display 7 to 19 all numbers, 
        2. and only display odd numbers
        ==== 7.
--------------------------------------*/
   
  var i = 7;
  var arr1=[];
  var arr2=[];
  while (i <= 19) {
    arr1.push(i);
    if(i%2!=0)arr2.push(i);
    i++;
  }
 
  for (const items of arr1) {
      console.log(items);  //expected output: [7,8,9,10,11,12,13,14,15,16,17,18,19]
  }
  for (const items of arr2) {
    console.log(items); //expected output: [7,9,11,13,15,17,19]
}
  
/*-------------------------------------
    (i) Declare an array,
    (ii) show the number of elements,
    (iii) update or change the 4th position of the elements,
    (iv) add & remove an element,
    (v) check whether a specific value is exists in the array
        ==== 8.
--------------------------------------*/
  var array = [];//Declare an array,
  var i=0;
  while (i <= 19) {
    array.push(Math.round(Math.random()*100));
    i++;
  }
  console.log("Number of elements : ", array.length);//show the number of elements,
  console.log("Array : ",array);
  
  array[3] = "4th element";
  
  console.log("after uptated 4th position its changed to: ", array[3]);
  /* different methods you can use to remove elements from JavaScript arrays:
  pop - Removes from the End of an Array
  shift - Removes from the beginning of an Array
  splice - removes from a specific Array index
  filter - allows you to programatically remove elements from an Array */
  array.pop();
  
  let foundNumber = false;
  var index = -1;
  for (let i = 0; i < array.length; i++) {
    if (array[i] == Math.round(Math.random()*100)) {
        foundNumber = true;
        index = i;
    }
  }
  if (foundNumber) {
    console.log("Found the Number.Index : ",i);
  } else {
    console.log("Sorry ! Does not found the Number");
  }
   array.splice(3);//delete 17 elemnts in array after 4th element.
/*-------------------------------------
    display all elements of the array using for loop    ==== 9.
--------------------------------------*/
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
/*-------------------------------------
    Display only the numbers bigger than 50     ==== 11.
--------------------------------------*/
  var arrayOfNumbers = [];
  var s = 0;
  while (s <= 19) {
    arrayOfNumbers.push(Math.round(Math.random()*100));
    s++;
  }
  for (let i = 0; i < arrayOfNumbers.length; i++) {
    if (arrayOfNumbers[i] > 50) {
      console.log("The number bigger than 50 is :", arrayOfNumbers[i]);
    }
  }
/*-------------------------------------
Three numbers as parameters and returns the multiplication of that parameters.    ==== 11.
--------------------------------------*/
  function multiplication(n1, n2, n3) {
    return n1 * n2 * n3;
  }
  console.log("Multiplication of three parameters are :",multiplication(2, 3, 7));
/*-------------------------------------
    Declare an object and change any property of that object     ==== 12.
--------------------------------------*/

  var person = {
    name: "Md Saifur Rahman",
    age: 23,
    id: "C183027",
    height: "5ft-10inch",
    education: "Bsc in CSE",
    university: "iiuc",
  };
  person.education = "Bachelor of Science in Computer Science & Software Engineering"; //change education property
  person.university = "International Islamic University Chittagong"; //change education property
  console.log(person);
  for (const datakey of Object.keys(person)) {
      console.log(datakey);
  }
  for (const value of Object.values(person)) {
      console.log(value);
  }