function getSquares(nums) {
  if (!nums) throw new Error("nums is required");
  const squaredNums = nums.map (function (num) {
    return num * num;
  });
  return squaredNums;
  // Solved watching Harriet's video 
}

function camelCaseWords(words) {
  if (!words) throw new Error("words is required");
  const transformedWords = words.map (function (word, i) {
    const isFirstWord = i === 0;
    if (isFirstWord === false) {
      const capitalisedWord = word.charAt(0).toUpperCase() + word.slice(1);
      return capitalisedWord;
    } else {
     return word;
    }
     })
     const finishedString = transformedWords.join('');
     return finishedString;
   }
  

function getTotalSubjects(people) {
  if (!people) throw new Error("people is required");
  const subjects = [];
  for (let i = 0; i < people.length; i++) {
    const person = people[i];
    const totalSubjects = person.subjects.totalSubjects;
    subjects.push(totalSubjects) ;
  }
  return subjects;
}
//NOT WORKING YET


function checkIngredients(menu, ingredient) {
  if (!menu) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  let foundFoodItem = false;
  menu.forEach (function (menuItem) {
    menuItem.ingredients.forEach (function (menuItemIngredient) {
      if (menuItemIngredient === ingredient) {
        foundFoodItem = true;
      }
    });
  });
        return foundFoodItem;
      
  // Solved watching Harriet's video
}

function duplicateNumbers(arr1, arr2) {
  if (!arr1) throw new Error("arr1 is required");
  if (!arr2) throw new Error("arr2 is required");
  const duplicates = [];
  arr1.forEach (function (num){
  const numIsInArr2 = arr2.includes (num);
  if (numIsInArr2) {
    const duplicatesContainsNum = duplicates.includes(num);
    if (duplicatesContainsNum === false) {
      duplicates.push(num);
    }
    }
  });
  return duplicates.sort(function (a, b) {
    return a - b;
  });
}  
  // Solved watching Harriet's video


module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
