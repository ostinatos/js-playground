var decodeString = function (s) {
  // traverse index
  let index = 0;
  let stack = [];

  let retString = "";

  const isNumber = (n) => {
    return !isNaN(Number.parseInt(n));
  };

  const getDigits = () => {
    let ret = 0;
    while (index < s.length && isNumber(s[index])) {
      ret = ret * 10 + Number.parseInt(s[index]);
      index++;
    }
    return ret;
  };

  const peekStack = (stack) => {
    return stack[stack.length - 1];
  };

  while (index < s.length) {
    let cur = s[index];
    if (isNumber(cur)) {
      let repTime = getDigits(cur);
      //   push repeat time to stack
      stack.push(repTime);
      continue;
    } else if (cur != "]") {
      // [ or letters, push into stack
      stack.push(cur);
      index++;
      continue;
    } else {
      // meet ], pop from stack
      let tempString = "";
      while (peekStack(stack) !== "[" && stack.length) {
        tempString = stack.pop() + tempString;
      }
      //   pop [
      stack.pop();
      //   before [, it should be repeat time
      let repTime = stack.pop();
      //   repeat tempString for repTime time
      let repeatedString = "";
      while (repTime-- > 0) {
        repeatedString += tempString;
      }

      // important:   push back to stack.
      stack.push(repeatedString);

      // increase index in the end, get pass ]
      index++;
    }
  }

  while (stack.length) {
    retString = stack.pop() + retString;
  }
  return retString;
};

// console.log(decodeString("2[abc]3[cd]ef"));
console.log(decodeString("3[a]2[bc]"));

