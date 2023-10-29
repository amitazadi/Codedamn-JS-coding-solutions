
// Second solution using Map library
// const countWords = (words1, words2) => {
//     const mp1 = new Map();
//     const mp2 = new Map();

//     for (const word of words1) {
//         if (mp1.has(word)) {
//             mp1.set(word, mp1.get(word) + 1);
//         } else {
//             mp1.set(word, 1);
//         }
//     }

//     for (const word of words2) {
//         if (mp2.has(word)) {
//             mp2.set(word, mp2.get(word) + 1);
//         } else {
//             mp2.set(word, 1);
//         }
//     }

//     let ans = 0;

//     for (const [word, count] of mp1) {
//         if (mp2.has(word) && mp2.get(word) === 1 && count === 1) {
//             ans++;
//         }
//     }

//     return ans;
// }

// Second spolution usign Object
const countWords = (words1, words2) => {
    const mp1 = {};
    const mp2 = {};

    for (const word of words1) {
        mp1[word] = (mp1[word] || 0) + 1;
    }

    for (const word of words2) {
        mp2[word] = (mp2[word] || 0) + 1;
    }

    let ans = 0;

    for (const word in mp1) {
        if (mp2[word] !== undefined && mp2[word] === 1 && mp1[word] === 1) {
            ans++;
        }
    }

    return ans;

}

export { countWords }