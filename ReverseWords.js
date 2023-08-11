// DESCRIPTION:
// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

//Examples:
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) {
  const ar = str.split(" ");
  const len = ar.length;
  const newAr = [];
  for (let i = 0; i < len; i++) {
    newAr.push(ar[i].split("").reverse().join(""));
  }
  return newAr.join(" ");
}

//good
function reverseWords(str) {
  return str
    .split(" ")
    .map(function (word) {
      return word.split("").reverse().join("");
    })
    .join(" ");
}
