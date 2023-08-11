// DESCRIPTION:
//You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

//Examples:
// Kata.getMiddle("test") should return "es"
// Kata.getMiddle("testing") should return "t"
// Kata.getMiddle("middle") should return "dd"
// Kata.getMiddle("A") should return "A"

function getMiddle(s) {
  const num = Number(s.length / 2);
  return num % 1 ? s[Math.floor(num)] : s[num - 1] + s[num];
}

//good
function getMiddle(s) {
  return s.slice((s.length - 1) / 2, s.length / 2 + 1);
}
function getMiddle(s) {
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}
