const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  arr: [],

  getLength() {
    return this.arr.length
  },
  addLink(value = '') {
    this.arr.push(value);

    return this
  },
  removeLink(position) {
    if (typeof position === 'number' && Number.isInteger(position) && position <= this.arr.length && position > 0) {
      this.arr.splice(position - 1, 1);
      return this
    }

    this.arr = [];
    throw new Error('You can\'t remove incorrect link!');
  },
  reverseChain() {
    this.arr = this.arr.reverse();
    return this
  },
  finishChain() {
    let str = '';
    this.arr.forEach((el, index) => {
      if(index !== this.arr.length - 1) {
        str += `( ${el} )~~`;
      } else {
        str += `( ${el} )`;
      }

    })

    this.arr = [];
    return str;
  }
};

module.exports = {
  chainMaker
};
