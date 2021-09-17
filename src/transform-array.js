import { NotImplementedError } from '../extensions/index.js';

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
export default function transform(arr) {
    if (!Array.isArray(arr)) {
        throw new Error('\'arr\' parameter must be an instance of the Array!');
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '--discard-next' && arr[i + 2] === '--double-prev') {
            arr.splice(i, 3)
        }
        if (arr[i] === '--discard-next' && arr[i + 2] === '--discard-prev') {
            arr.splice(i, 1)
        }
        if (arr[i] === '--discard-next') {
            arr.splice(i, 2)
        }
        if (arr[i] === '--discard-prev') {
            arr.splice(i - 1, 2)
        }
        if (arr[i] === '--double-next') {
            arr.splice(i, 1, arr[i + 1])
        }
        if (arr[i] === '--double-prev') {
            arr.splice(i, 1, arr[i - 1])
        }
    }
    return arr;
}

// function transform(arr) {
//     if (!Array.isArray(arr)) {
//         throw new Error("\'arr\'parameter must be an instance of the Array!");
//     }
//     for (let i = 0; i < arr.length; i++) {
//         if (typeof arr[i] != 'number' || typeof arr[i] != 'string') {
//             throw new Error("\'arr\'parameter must be an instance of the Array!");
//         }
//         if (arr[i] === '--discard-next' && arr[i + 2] === '--double-prev') {
//             arr.splice(i, 3)
//         }
//         if (arr[i] === '--discard-next' && arr[i + 2] === '--discard-prev') {
//             arr.splice(i, 1)
//         }
//         if (arr[i] === '--discard-next') {
//             arr.splice(i, 2)
//         }
//         if (arr[i] === '--discard-prev') {
//             arr.splice(i - 1, 2)
//         }
//         if (arr[i] === '--double-next') {
//             arr.splice(i, 1, arr[i + 1])
//         }
//         if (arr[i] === '--double-prev') {
//             arr.splice(i, 1, arr[i - 1])
//         }
//     }
//     return arr;
// }
//
// console.log(transform([1, 2, 3, '--double-next', 1337, '--discard-prev', 4, 5]))
// console.log(transform(
//     () => transform(3),
//     () => transform(3.312312),
//     () => transform(false),
//     () => transform(null),
//     () => transform(undefined),
//     () => transform({'foo': 'bar'})
// ))
