// DESCRIPTION:
// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

//Examples:
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

function removeEveryOther(arr) {
  const newAr = [];
  for (let i = 0; i < arr.length; i += 2) {
    newAr.push(arr[i]);
  }
  return newAr;
}

//good
function removeEveryOther(arr) {
  return arr.filter(function (elem, index) {
    return index % 2 === 0;
  });
}

const removeEveryOther = (arr) => arr.filter((_, i) => !(i % 2));
