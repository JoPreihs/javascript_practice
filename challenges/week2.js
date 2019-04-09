function getFillings(sandwich) {
   if (sandwich === undefined) throw new Error("ingredients is required");
   const allFillings = sandwich.fillings;
   return allFillings
}
 
function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  const nameOfCity = person.city;
  if (nameOfCity === "Manchester") {
    return true 
   } else { 
       return false }
  }

function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
  return Math.ceil(people/40);
  // Solved watching Harriet's video
}

function countSheep(arr) {
  if (!arr) throw new Error("arr is required");
  let counter = 0;
  for (let i = 0; i < arr.length; i = i + 1) {
    if (arr[i] === "sheep"){
      counter = counter + 1;
    }
  }
  return counter;

}
  

function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  const firstLetter = person.address.postCode[0];
  const secondLetter = person.address.postCode[1];
  const isAlphabeticCharacter = isNaN(Number(secondLetter));
  return firstLetter === "M" && !isAlphabeticCharacter;
  // Solved watching Harriet's video
}

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
}