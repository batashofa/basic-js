import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats(domains ) {
    let obj = {};
    for (let i = 0; i < domains.length; i++) {
        const domain = domains[i].split(".");
        let string = "";
        for (let j = domain.length - 1; j >= 0; j--) {
            string += "."+domain[j];
            if (obj[string] === undefined) {
                obj[string] = 0;
            }
            obj[string]++;
        }
    }
    return obj;
}