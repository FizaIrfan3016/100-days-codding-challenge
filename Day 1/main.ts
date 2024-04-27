//Q2 - Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”

let nameOfperson : string = 'Fiza';
console.log(`Hello ${nameOfperson}, would you like to learn some typescript today?`)

//Q3 - Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let myName :string='Fiza'
console.log(myName.toLowerCase()); // show the name in all small letters.
console.log(myName.toUpperCase()); // show the name in all capital letters.
console.log(myName.charAt(0).toUpperCase () + myName.slice(1).toLowerCase()); // shows the name with 1 letter big.