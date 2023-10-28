function arithmeticTriplets(nums, diff) {
    const cnt = {};
    let res = 0;

    for (const n of nums) {
        if (n >= 2 * diff) {
            if (cnt.hasOwnProperty(n - diff) && cnt.hasOwnProperty(n - 2 * diff)) {
                res += 1;
            }
        }
        cnt[n] = (cnt[n] || 0) + 1;
    }

    return res;
}


export { arithmeticTriplets }