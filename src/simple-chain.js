import {NotImplementedError} from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 *
 */
export default {
    chainMaker: [],
    getLength() {
        if (arguments === undefined) {
            this.chainMaker.push('()');
        }
        return this.chainMaker.length;
    },
    addLink(value) {
        this.chainMaker.push(value);
        return this;
    },
    removeLink(position) {
        if (typeof position != 'number' || position <= 0 || position > this.chainMaker.length) {
            this.chainMaker = [];
            throw new Error("You can't remove incorrect link!");
        }
        this.chainMaker.splice(position - 1, 1);
        return this;
    },
    reverseChain() {
        this.chainMaker.reverse();
        return this;
    },
    finishChain() {
        let res = this.chainMaker.map(item => `( ${item} )~~`).join('');
        this.chainMaker = [];
        return res.slice(0, -2);
    },
};
