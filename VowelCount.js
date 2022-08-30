// DESCRIPTION:
// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
    const ar = str.split('')
    const letter =['a','e','i','o','u']
    let count = 0
    for (let i=0;i<ar.length;i++){
      for (let j=0;j<letter.length;j++){
        if(ar[i]===letter[j]){
          count++
        }
      }
    }
    return count
  }