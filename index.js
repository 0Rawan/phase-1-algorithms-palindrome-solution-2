function isPalindrome(word) {
  // Write your algorithm 
   // iterate from the beginning of the string to the middle of the string
   newArray = []
   for (let i = word.length ; i > 0; i--) {


    newArray[word.length - i] = word[i - 1]

    // if the letters don't match, return false
  }

  return newArray.join("") === word;

  // if we reach the middle, and all the letters match, return true
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

}

module.exports = isPalindrome;
