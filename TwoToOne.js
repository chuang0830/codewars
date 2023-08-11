// DESCRIPTION:
// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

function longest(s1, s2) {
  const arS1 = s1.split("");
  const arS2 = s2.split("");
  const ar = [...arS1, ...arS2];
  return ar
    .filter((v, i) => ar.indexOf(v) === i)
    .sort()
    .join("");
}

//good way
function longest(s1, s2) {
  return Array.from(new Set(s1 + s2))
    .sort()
    .join("");
}
const longest = (s1, s2) => [...new Set(s1 + s2)].sort().join("");
