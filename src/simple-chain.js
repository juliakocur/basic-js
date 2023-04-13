const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
//const chainMaker = {
//  getLength() {
//    throw new NotImplementedError('Not implemented');
//    // remove line with error and write your code here
//  },
//  addLink(/* value */) {
//    throw new NotImplementedError('Not implemented');
//    // remove line with error and write your code here
//  },
//  removeLink(/* position */) {
//    throw new NotImplementedError('Not implemented');
//    // remove line with error and write your code here
//  },
//  reverseChain() {
//    throw new NotImplementedError('Not implemented');
//    // remove line with error and write your code here
//  },
//  finishChain() {
//    throw new NotImplementedError('Not implemented');
//    // remove line with error and write your code here
//  }
//};



const chainMaker = {
  chain: [],
  getLength() {
    return this.chan.length;
  },
  addLink(value= ' ') {
    this.chain.push(`( ${value} )`);
    return this
  },
  removeLink(position) {
if (!Number.isInteger(position) || (position > this.chain.length) || (position <= 0)) {
this.chain = [];
throw new Error("You can't remove incorrect link!");
}
    this.chain.splice(position - 1,1);
    return this
  },
  reverseChain() {
    this.chain = this.chain.reverse();
    return this
  },
  finishChain() {
    return this.chain.join('~~')
  }
};

module.exports = {
  chainMaker
};
