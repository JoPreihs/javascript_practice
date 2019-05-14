const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  
  for (let i = 0; i < nums.length; i++){
  const num = nums[i];
  const givenNum = n;
  if (num[i] === givenNum) {
   const nextNum = num.getNext();
   return nextNum;
  } else {
    return null;
  }
  }
};
//NOT WORKING YET

const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
};

const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");
 const newNumber = (n.toString().split('').reverse().join('')) * Math.sign(n);
 return newNumber;
}


const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  // Your code here!
};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  // Your code here!
};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
};

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
};