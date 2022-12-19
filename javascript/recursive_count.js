function recursiveCount(num = 0) {
  // type your code here
  while (num < 10) {
    console.log(num);
    num++;
    recursiveCount(num);
  }
}

if (require.main === module) {
  recursiveCount();
}

module.exports = recursiveCount;

// OPTIONAL
// Please add your pseudocode to this file
// And a written explanation of your solution
