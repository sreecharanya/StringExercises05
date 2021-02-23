let language = 'JavaScript';

//a) Use string concatenation and two .slice() methods to print 'JS' from 'JavaScript'.
let lan1 = language.slice(0,1)+language.slice(4,5);
console.log(lan1) 


//b) Without using .slice(), use method chaining to accomplish the same thing.
let lan3=language.charAt(0)+language.charAt(4)
console.log(lan3)
//c) Use bracket notation and a template literal to print "The abbreviation for 'JavaScript' is 'JS'."
let lan2=language[0]+language[4];
console.log(`The abbreviation for ${language} is ${lan2}.`)


//d) Just for fun, try chaining 3 or more methods together, and then print the result.
