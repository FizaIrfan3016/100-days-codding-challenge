/**Q16 - More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner:

Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

Add one new guest to the beginning of your array.

Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list.

Print a new set of invitation messages, one for each person in your list. */
  console.log('ques : 16')
let guest : string[]=['Shahid', 'Rumina', 'Muskan']
console.log("Good news! I found a bigger dinning table.")

guest.unshift("Sheroz");
guest.splice(guest.length /2,0 , "Dania")
guest.push("Meerab")


guest.forEach(guests =>{
    console.log (`${guests}, You are invited for dinner.`)
});


/**Q17 - Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.

Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

Print a message to each of the two people still on your list, letting them know they’re still invited.

Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program. */

console.log('ques : 17');
console.log('Sorry ,I am inviting only two people for dinner.')

while(guest.length > 2){
    let Remove_guest = guest.pop()
    console.log(`Sorry, ${Remove_guest}, I cant invite you for dinner`)
};

guest.forEach(guests =>{
    console.log(`${guests}, You are still invited.`)
});

guest.splice(0, guest.length)
console.log(guest)

/**Q18 - Seeing the World: Think of at least five places in the world you’d like to visit.

Store the locations in a array. Make sure the array is not in alphabetical order.

Print your array in its original order.

Print your array in alphabetical order without modifying the actual list.

Show that your array is still in its original order by printing it.

Print your array in reverse alphabetical order without changing the order of the original list.

Show that your array is still in its original order by printing it again.

Reverse the order of your list. Print the array to show that its order has changed.

Reverse the order of your list again. Print the list to show it’s back to its original order.

Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed. */

console.log('ques : 18')

let favouritePlace : string[] = ['Saudia Arabia', 'South Korea', 'Bali', 'Japan']
console.log('Original order', favouritePlace)

console.log('Alphabetical order', [...favouritePlace].sort());

console.log('Original order', favouritePlace);

console.log('Reverse alphabetical order', [...favouritePlace].sort().reverse());

console.log('Original order', favouritePlace);

favouritePlace.reverse()
console.log('Reverse order',favouritePlace);

favouritePlace.reverse()
console.log('original order', favouritePlace);

favouritePlace.sort();
console.log('alphabetical order',favouritePlace)

favouritePlace.reverse();
console.log('Reverse alphabetical order',favouritePlace)


