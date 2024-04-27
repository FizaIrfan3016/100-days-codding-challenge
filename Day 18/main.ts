/**Q52 - Make a Smartphone Object: Create a simple way to keep track of a smartphone's details. Include its brand, model, and other key features like how much storage it has, the size of its screen, and how long its battery lasts */

let smartphone={
    make:"Samsung",
    model:" Galaxy S23 ultra",
    specs:{
        storage:"128 GB",
        batterylife:"18 hours",
        screensize:"6.5 inches"

    },
};
console.log(smartphone)

/**Q53 - Pulling Apart a Nested Object: Imagine you have a list inside another list that shows what a computer programmer knows, like coding languages, tools, and software frameworks. Find a way to get three specific skills from this list and show them. */

let developerskills = {
    languages:['Javascript','Typescript','Python'],
    frameworks:['React','Angular','Vue'],
    tools:['Git','Webpack','Docker']
}

let {languages,frameworks,tools}= developerskills

console.log(
    `Language: ${languages[0]}, Frameworks: ${frameworks[0]}, Tool: ${tools[0]}`
)


/**Q54 - Making Flexible Object Keys: Learn how to set up a list where you can change the name of each section based on what you need at that moment, like adjusting labels based on user choices */

//A way to make a flexible list
function createobjectWithdynamickey(key:string, value:string){
    let dynamicobject ={}
 // Setting up a section with a list with a changeable name 
    dynamicobject[key]=value;
    return dynamicobject;
}
//Using a flexible list with a user preference
let userPreference = createobjectWithdynamickey('theme','dark')
// showing the user choice.
console.log(userPreference)