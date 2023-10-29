const kthDistinct = (arr, k) => {
    let mp = {};
    for (let val of arr)
        mp[val] = (mp[val] || 0) + 1;

    for (let val of arr) {
        if (mp[val] === 1)
            k--;

        if (k === 0)
            return val;
    }

    return ''
}

export { kthDistinct }