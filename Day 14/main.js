/**Q40 - Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album. */
function make_album(artist, title, tracks) {
    var album = { artist: artist, title: title };
    if (tracks) {
        album['tracks'] = tracks;
    }
    {
        return album;
    }
}
console.log(make_album('Artist one', 'First album'));
console.log(make_album('Artist two', 'Second album'));
console.log(make_album('Artist three', 'Third album', 12));
/**Q41 - Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array. */
var magicianNames = ['Harry potter', 'Ron', 'Harmaeni'];
function show_magicians(magicianNames) {
    magicianNames.forEach(function (magicians) {
        console.log(magicians);
    });
}
show_magicians(magicianNames);
/**Q42 - Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified. */
function make_great(magicianNames) {
    magicianNames.forEach(function (magician) {
        console.log("".concat(magician, " the great"));
    });
}
make_great(magicianNames);
// let magicians: string[] = ["Alice", "David", "Chris"];
// function show_magicians(magicians: string[]) {
//   magicians.forEach((magician) => {
//     console.log(magician);
//   });
// }
// function make_great(magicians: string[]) {
//   for (let i = 0; i < magicians.length; i++) {
//     magicians[i] = magicians[i] + " the Great";
//   }
// }
// make_great(magicians); // Modifies the original array
// show_magicians(magicians); // Shows modified names
