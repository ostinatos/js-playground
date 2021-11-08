/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
    // traverse index, only moving forward, shared amonst different inner function
    let index = 0;

    const getDigits = () => {
        let ret = 0;
        while (index < s.length && !isNaN(Number.parseInt(s[index]))) {
            ret = ret * 10 + Number.parseInt(s[index++]);
        }
        return ret;
    };

    const isNumber = (n) => {
        return !isNaN(Number.parseInt(n));
    };
    const isLetter = (char) => {
        return char.match(/[a-zA-Z]/g);
    };

    // inner function to get the string
    const getString = () => {
        //   terminate condition
        // index overflowed, or reach ], return blank string
        if (index === s.length || s[index] === ']') {
            return '';
        }

        let cur = s[index];
        let repTime = 1;
        let ret = '';

        if (isNumber(cur)) {
            // string is start with number, like
            // 3[a], 2[bc], 4[a3[bc]]
            // means DIGITS [  ] format
            repTime = getDigits();
            // jump pass [ right after digit
            index++;
            // get string
            let str = getString();
            // jump pass ] right after string
            index++;
            // repeat
            while (repTime-- > 0) {
                ret += str;
            }
        } else if (isLetter(cur)) {
            // current char is letter, assign to ret, and move forward the index
            ret = s[index++];
        }
        // keep decode string using getString()
        return ret + getString();
    };

    return getString();
};

console.log(decodeString('3[a]2[bc]'));
