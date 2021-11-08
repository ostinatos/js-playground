function calculate(num) {
    let sum = 0;
    while (num > 0) {
        digit = num % 10;
        sum += digit * digit;
        num = Math.floor(num / 10);
    }
    return sum;
}

const find_happy_number = function (num) {
    // TODO: Write your code here

    /* fast and slow both point to head */
    let fast = num,
        slow = num;

    /* use fast and slow runner to determine whether the number sequence has loop */

    while (true) {
        fast = calculate(calculate(fast));
        slow = calculate(slow);
        if (fast === slow) {
            break;
        }
    }

    /* 这里需要发现规律了，对1进行计算是会一直返回1 */
    return slow === 1;
};

console.log(calculate(1));

console.log(`${find_happy_number(23)}`);
console.log(`${find_happy_number(12)}`);
