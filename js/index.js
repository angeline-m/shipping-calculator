/*
  getElementById(id attribute)
  return value: element of group of elements markup

  const shippingweight = document.getElementById('weight')
  console.log(shippingweight)
*/

/*

  getElementByClassName(css class name)
  return type HTMLCollection
  ** class name does not have a dot

  const testThings = document.getElementsByClassName('test')
  console.log(testThings)

*/

/*  
  getElementByTagName()

  const testThings = document.getElementByTagName

*/

/*
  Read data from the dom using a button click as the event that drives code

*/

//select the login button, add event listener click event, log to the console
const loginButton = document.querySelector('button')
loginButton.addEventListener('click', function() {
  console.log('button clicked')
})

//reference variables
//data types
//string number boolean
const calculateButton = document.querySelector('label');
const shippingWeight = document.querySelector('input');
const shippingPrice = document.querySelector('.shipping-price');
const shippingRate = 5;


calculateButton.addEventListener('click', function() {
  const rate = Number(shippingWeight.value) * shippingRate;

  shippingPrice.textContent = '$' + rate + '.00';
  shippingPrice.style.fontSize = '4rem';
})

