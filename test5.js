// Expected Result : 6
// Direction : Get the total of "1" in binary value of number input
const number = 221;
function result(num) {
    // Your Code Here
    return num
        .toString(2)
        .split('')
        .filter((n) => n == 1).length;
}

console.log(result(number));
