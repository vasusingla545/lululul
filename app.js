import * as utils from './utilities.js';

  document.getElementById('concatenate').addEventListener('click',()=>{
    const firstname=document.getElementById('firstname').value;
    const lastname=document.getElementById('lastname').value;
    utils.printConcatenatedMessage(firstname,lastname);

  });

  document.getElementById('ConvertF2C').addEventListener('click',()=>{
    const fahrenheit=parseFloat(document.getElementById('fahrenheit').value);
   
    const result=utils.FahrenheitToCelsius(fahrenheit);
    document.getElementById('resultinCelsius').textContent=`${fahrenheit} Fahrenheit is equal to ${result} degree Celsius`;

  });

  document.getElementById('Findfactorial').addEventListener('click',()=>{
    const number=parseInt(document.getElementById('factorialInput').value);
    const result=utils.factorial(number);
    document.getElementById('factorialresult').textContent=`Factorial of ${number} is ${result}`;
  });

  document.getElementById('FindGcd').addEventListener('click',()=>{
    const a=parseInt(document.getElementById('input1').value);
    const b=parseInt(document.getElementById('input2').value);
    const result=utils.gcd(a,b);
    document.getElementById('GcdResult').textContent=`Gcd of ${a} and ${b} is ${result}`;
  });

  utils.printConcatenatedMessage('Sukh','Bhullar');
  console.log(`10 Fahrenheit is equal to ${utils.FahrenheitToCelsius(10)} degree Celsius`);
console.log(`Factorial of 6 is ${utils.factorial(6)}`);
console.log(`Greatest common divisor of 12 and 26 is ${utils.gcd(12,26)}`);