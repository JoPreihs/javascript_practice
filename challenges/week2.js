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
  // find out if there are any sheep in the array
  // if there are sheep, return number of sheep
  const checkSheep = arr.includes("sheep");
  if checkSheep = true;
    return sum(arr["sheep"]);
      if checkSheep = false;
        return (0);
      }
  

function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  const firstLetter = person.address.postcode[0];
  const secondLetter = person.address.postcode[1];
  const isAlphabeticCharacter = isNan(Number(secondLetter));
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