import {NotImplementedError} from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(members) {
    let array = [];
    let res;
    let arr = []
    if (!Array.isArray(members)) {
        return false;
    } else {
        for (let i = 0; i < members.length; i++) {
            if (typeof members[i] === 'string') {
                arr = members[i].trim(members);
                array.push(arr[0])
            }
        }
        res = array.map(function (x) {
            return x.toUpperCase();
        }).sort().join('')
        return res;
    }
}

import {assert} from "chai";




