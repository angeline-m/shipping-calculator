  /* 
 select the input element
 store a reference to the input element in a variable
 output the value  of your variable to the console.
 set a value for the shipping rate per 1kg store it in a variable
 
 object.method()
 object.property()
 object.event()

 let = allows you to overwrite the value
 const = one assignment only

 document.getQuerySelector('input').value gives the value inside the text field
 
 */

const shippingWeight = document.getQuerySelector('input');

console.log(shippingWeight);

const shippingRate = 3;

console.log('shipping weight is: ' + 3);