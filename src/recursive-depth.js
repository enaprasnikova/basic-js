const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let count = 1;
    let max = 0;
    arr.forEach((el) => {
      if (el instanceof Array) {
        let temp = this.calculateDepth(el);
        if (temp > max) {
          max = temp;
        }
      }
    })

    return max + 1;
  }
}

module.exports = {
  DepthCalculator
};
