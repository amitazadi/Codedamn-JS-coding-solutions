import { sortByBits } from './Codes/sortByBits.js'
import { arithmeticTriplets } from './Codes/arithmeticTriplets.js';
import { sumOddLengthSubarrays } from './Codes/sumOddLengthSubarrays.js'
import { countWords } from './Codes/countWords.js';

const arr = [1, 4, 2, 5, 3];
const words1 = ["leetcode", "is", "amazing", "as", "is"], words2 = ["amazing", "leetcode", "is"]
const result = countWords(words1, words2);

console.log(result);