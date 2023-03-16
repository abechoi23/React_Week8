/* You need to write a function, that returns the first non-repeated character in the given string.
If all the characters are unique, return the first character of the string.
If there is no unique character, return null
You can assume, that the input string has always non-zero length.
Examples
"test"   returns "e"
"teeter" returns "r"
"trend"  returns "t" (all the characters are unique)
"aabbcc" returns null (all the characters are repeated) */

// create a string
// loop through the string of each index
// while looping through find the first non-repeat return unique character
// return null if there all repeats
function repeater(str) {
  let count = "";

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < str.length; j++) {
      // console.log(str.charAt(i), str.charAt(j))
      if (str.charAt(i) == str.charAt(j) && i != j) {
        break;
      }
      if (j == str.length - 1) {
        count += str.charAt(i);
        // console.log(count)
      }
    }
  }
  if (count.length > 0) {
    return count[0];
  } else {
    return null;
  }
}

console.log(repeater("test"));
console.log(repeater("teeter"));
console.log(repeater("trend"));
console.log(repeater("aabbcc"));


function firstNonRepeatedChar(str) {
  // Create an object to keep track of character counts
  let charCounts = {};
  
  // Loop through the string and count each character
  for (let i = 0; i < str.length; i++) {
    let char = str.charAt(i);
    if (char in charCounts) {
      charCounts[char]++;
    } else {
      charCounts[char] = 1;
    }
  }
  
  // Loop through the string again and find the first non-repeated character
  for (let i = 0; i < str.length; i++) {
    let char = str.charAt(i);
    if (charCounts[char] === 1) {
      return char;
    }
  }
  
  // If no non-repeated character is found, return null
  return null;
}