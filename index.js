// import {getNumberOfChars,getFirstChar,getLastChar,getLower,getUpper,
// getCapitalized } from "./variations.js"

const answer1 = document.querySelector("#answer1");
const answer2 = document.querySelector("#answer2");
const answer3 = document.querySelector("#answer3");
const answer4 = document.querySelector("#answer4");
const answer5 = document.querySelector("#answer5");
const answer6 = document.querySelector("#answer6");
const answer7 = document.querySelector("#answer7");

const names = document.querySelector("#your-name");

names.addEventListener("keyup",() => {
  const value = names.value;

  function getNumberOfChars(value){
    return value.length;
  }
   function getFirstChar(value) {
    return value[0]; //  index
  }
  function getLastChar(value){
    return value.length -1;
  }
  function getLower(value){
    return value.toLowerCase();
  }
  function getUpper(value){
    return value.toUpperCase();
  }
  function getCapitalized(value){
    return value[0].toUpperCase() + value.slice(1).toLowerCase();
  }
  function getReplace(value){
    return value.replace("value","repla");
  }

  answer1.textContent = getNumberOfChars(value);
  answer2.textContent = getFirstChar(value);
  answer3.textContent = getLastChar(value);
  answer4.textContent = getLower(value);
  answer5.textContent = getUpper(value);
  answer6.textContent = getCapitalized(value);
  answer7.innerHTML= getReplace(value);
  

});



