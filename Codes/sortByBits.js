// In this lab, you will be given an integer array arr and your task is to sort the integers in the array in ascending order based on the number of 1's in their binary representation. In case two or more integers have the same number of 1's, you have to sort them in ascending order.

// To achieve this, you need to implement the function sortByBits(arr) that takes an array of integers as input and returns a new sorted array based on the mentioned conditions.

// Examples:
// Example 1
// Input: arr = [0,1,2,3,4,5,6,7,8] Output: [0,1,2,4,8,3,5,6,7] Explanation: [0] is the only integer with 0 bits. [1,2,4,8] all have 1 bit. [3,5,6] have 2 bits. [7] has 3 bits. The sorted array by bits is [0,1,2,4,8,3,5,6,7]

// Example 2
// Input: arr = [1024,512,256,128,64,32,16,8,4,2,1] Output: [1,2,4,8,16,32,64,128,256,512,1024] Explanation: All integers have 1 bit in the binary representation, you should just sort them in ascending order.

// Constraints:
// 1 <= arr.length <= 500
// 0 <= arr[i] <= 10^4
// Now, after understanding the problem statement and conditions, you need to work on the following challenges:

// Export the sortByBits function
// Implement the sortByBits function correctly



const sortByBits = function (arr) {
    let obj = {};

    for (let i = 0; i < arr.length; i++) {
        let x = arr[i];
        let temp = 0;

        while (x > 0) {
            temp += x & 1;
            x >>= 1;
        }

        if (temp in obj) {
            obj[temp].push(arr[i]);
        } else {
            obj[temp] = [arr[i]];
        }
    }

    let keys = Object.keys(obj).sort((a, b) => a - b);
    let ans = [];

    for (let key of keys) {
        ans = ans.concat(obj[key].sort((a, b) => a - b));
    }

    return ans;
};

export { sortByBits }
