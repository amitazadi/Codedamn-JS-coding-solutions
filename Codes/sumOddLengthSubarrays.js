const sumOddLengthSubarrays = (arr) => {
    let ans = 0;

    for (let i = 0; i < arr.length; i++)
        ans += arr[i] * Math.floor((((i + 1) * (arr.length - i) + 1) / 2));

    return ans;
}

export { sumOddLengthSubarrays }


