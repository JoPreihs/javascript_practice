function capitalize(word) {
  if (word === undefined) throw new Error("word is required"); 
  else return word.charAt(0).toUpperCase() + word.slice(1);
} 
  // Add your code here!


function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  else return firstName.charAt(0).toUpperCase() + lastName.charAt(0).toUpperCase();
  // Add your code here!
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  else return originalPrice + ((originalPrice * vatRate) / 100) ;
  // Add your code here!
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  else return originalPrice - ((originalPrice * reduction) / 100) ;
  // Add your code here!
}

function getMiddleCharacter(str) {
  var middleLetters = '';
  if (str.length % 2 === 0) {
    var even = str.length /2;
    return str.slice(even -1, even +1);
  } if (str.length % 2 !== 0) {
    var odd = str.charAt((str.length/2))
    return odd;
  }
  if (str === undefined) throw new Error("str is required"); 
  // Add your code here!
  
}


function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  // Add your code here!
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  // Add your code here!
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  // Add your code here!
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  // Add your code here!
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  // Add your code here!
}

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
};
