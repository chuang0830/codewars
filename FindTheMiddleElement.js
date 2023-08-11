// DESCRIPTION:
// As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

// The input to the function will be an array of three distinct numbers (Haskell: a tuple).

//Examples:
// gimme([2, 3, 1]) => 0
// gimme([5, 10, 14]) => 1

function gimme(triplet) {
  const len = triplet.length;
  const middleNum = Math.floor(len / 2);
  const sortAr = [...triplet].sort((a, b) => {
    return a - b;
  });
  return triplet.indexOf(sortAr[middleNum]);
}

//good
const gimme = function (arr) {
  return arr.indexOf([...arr].sort((x, y) => x > y)[1]);
};
