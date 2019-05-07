function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  const smallNums = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 1) {
      smallNums.push(nums[i]);
    }
  }
  return smallNums;
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  const findNames = names.filter(function (name) {
    const firstChar = name.charAt(0);
    if (firstChar === "S" && "D" && "F") {
      return true;
    } else {
      return false;
    }
  });
  return findNames;
  // NOT WORKING YET
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  const verbs = words.filter(function (word) {
    const first3Chars = word.slice(0, 3);
    if (first3Chars === "to ") {
      return true;
    } else {
      return false;
    }
  });
  return verbs;
}
//Solved watching Harriet's video


function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  const integers = nums.filter(function (num) {
    if (Number.isInteger(num)) {
      return true;
    } else {
      return false;
    }
  });
  return integers;
}


function getCities(users) {
  if (!users) throw new Error("users is required");
  const cities = users.map(function (user) {
    const displayName = user.data.city.displayName;
    return displayName;
  });
  return cities;
  // Solved watching Harriet's video
}


function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  const squareRoots = nums.map(function (num) {
    const result = Math.sqrt(num).toFixed(2);
    return result;
  });
  return squareRoots;
}
//NOT WORKING YET


function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  const sentencesContaining = sentences.filter (function (str) {
    const requiredPhrase = str.match("");
    if (requiredPhrase === "license") {
      return true;
    } else {
      return false;
    }
    });
    return sentencesContaining;
}
//NOT WORKING YET



function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  const largestEdges = triangles.map(function (triangle) {
    triangle.sort(function (a, b) {
      return b - a;
    });
    const largestEdge = triangle[0];
    return largestEdge;
  });
  return largestEdges;
}
//Solved watching Harriet's video

module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides
};
