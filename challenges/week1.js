function capitalize(word) {
  if (word === undefined) throw new Error("word is required"); 
  else return word.charAt(0).toUpperCase() + word.slice(1);
} 


function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  else return firstName.charAt(0).toUpperCase() + lastName.charAt(0).toUpperCase();
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  else return originalPrice + ((originalPrice * vatRate) / 100) ;

}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  else return originalPrice - ((originalPrice * reduction) / 100);
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
  
}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  var str = "";
  var reverseStr = ""; 
  for (var i = str.length -1; i >= 0; i--); {
  reverseStr += str[i]; }
  return reverseStr;
  
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");

}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  let total = 0;
  users.forEach(function (user) {
    const machineType = user.type;
    if (machineType === "Linux") {
      total += 1 ;
    }
  });
      return total;
    }
  //Completed with Harriet's video

function getMeanScore(scores) {
if (scores === undefined) throw new Error("scores is required");
const meanScore = (total, currentValue) => total + currentValue;
const sum = scores.reduce(meanScore);
return sum/scores.length.toFixed(2);

}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  if (n % 3 === 0) return ("fizz");
  if (n % 5 === 0) return ("buzz");
  if (n % 3 === 0 && n % 5 === 0) return ("fizzbuzz");
else return (n);
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
