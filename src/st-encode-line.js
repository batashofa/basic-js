// import { NotImplementedError } from '../extensions/index.js';
//
// /**
//  * Given a string, return its encoding version.
//  *
//  * @param {String} str
//  * @return {String}
//  *
//  * @example
//  * For aabbbc should return 2a3bc
//  *
//  */
export default function encodeLine(str) {
    let k = 1;
    let res = "";
    for (let i=0; i<str.length; i++){
        if(str.charAt(i) === str.charAt(i + 1)) {
            k++;
        }else {
            if (k === 1) {
                res += str.charAt(i);
            }else {
                res += k + str.charAt(i);
            }
            k = 1;
        }
    }
    return res;
}

// function encodeLine(str) {
//     let k = 1;
//     let res = "";
//     for (let i=0; i<str.length; i++){
//         if(str.charAt(i) === str.charAt(i + 1)) {
//             k++;
//         }else {
//             res += k + str.charAt(i);
//             k = 1;
//         }
//     }
//     return res;
// }
//
// console.log(encodeLine('aaaatttt'))