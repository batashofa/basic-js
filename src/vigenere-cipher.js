import {NotImplementedError} from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */

export default class VigenereCipheringMachine {
    constructor(data = true) {
        this.data = data;
        this.alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    }

    cipher(str, code, method) {
        if (!str || !code) throw Error('Incorrect arguments!');

        let shift;
        str = str.toUpperCase().split('');
        while (code.length < str.length) {
            code += code;
        }
        code = code.toUpperCase().split('');
        for (let i = 0, j = 0; i < str.length; i++) {
                if (this.alphabet.includes(str[i])) {
                    if (method === 'encrypt') {
                        shift = (this.alphabet.indexOf(str[i]) + this.alphabet.indexOf(code[j])) % this.alphabet.length;
                    } else if (method === 'decrypt') {
                        shift = (this.alphabet.indexOf(str[i]) - this.alphabet.indexOf(code[j]) + this.alphabet.length) % this.alphabet.length;
                    } else {
                        shift = 0;
                    }
                    j++;
                    str[i] = this.alphabet[shift];
                }
        }
        if (this.data) {
            return str.join('');
        } else {
            return str.reverse().join('');
        }
    }

    encrypt (str, code) {
        return this.cipher(str, code, 'encrypt');
    }
    decrypt (str, code) {
        return this.cipher(str, code, 'decrypt');
    }
}



