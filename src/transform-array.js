const {NotImplementedError} = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!(arr instanceof Array)) {
    throw new Error('\'arr\' parameter must be an instance of the Array!');
  }

  let newArr = [];

  for (let i = 0; i < arr.length; i++) {

    if (arr[i] === '--discard-next') {
      i++;
    } else if (arr[i] === '--discard-prev' && i !== 0) {
      newArr = newArr.filter(el => el.ind !== i - 1);
    } else if (arr[i] === '--double-next' && i !== arr.length - 1) {
      newArr.push({ind: i, value: arr[i + 1] });
    } else if (arr[i] === '--double-prev' && i !== 0) {
      let temp = newArr.find(el => el.ind === i - 1)
      if (temp) {
        newArr.push(temp);
      }

    } else if (arr[i] !== '--discard-prev' && arr[i] !== '--double-next' && arr[i] !== '--double-prev' && arr[i] !== '--discard-next'){
      newArr.push({ind: i, value: arr[i]});
    }
  }


   return newArr.map(el => el.value);
}

console.log(transform([1, 2, 3, '--double-next', 1337, '--double-prev', 4, 5]));

module.exports = {
  transform
};
