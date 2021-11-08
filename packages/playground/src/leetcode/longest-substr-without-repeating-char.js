/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    // extreme condition
    if (!s || s.length <= 1) {
        return s ? s.length : 0;
    }
    let leadIndex = 1,
        trailIndex = 0;
    let longestCount = 1;

    function hasRepeative(s, startIndex, endIndex, targetChar) {
        for (let i = startIndex; i <= endIndex; i++) {
            if (targetChar === s[i]) {
                return i;
            }
        }
        return false;
    }

    while (leadIndex < s.length) {
        let repeativeIndex = hasRepeative(
            s,
            trailIndex,
            leadIndex - 1,
            s[leadIndex]
        );
        if (repeativeIndex === false) {
            // no repeative char found in current substring
            longestCount = Math.max(longestCount, leadIndex - trailIndex + 1);
            leadIndex++;
        } else {
            // repeative char found in current substring
            trailIndex = repeativeIndex + 1;
        }
    }
    return longestCount;
};

console.log(lengthOfLongestSubstring('abcabcbb'));
