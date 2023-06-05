function countZeroes(arr, leftIdx = 0, rightIdx = arr.length - 1) {
    if (rightIdx >= leftIdx) {
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
        
        if ((middleIdx === 0 || arr[middleIdx - 1] === 1) && arr[middleIdx] === 0) {
            return arr.length - middleIdx;
        } else if (arr[middleIdx] === 1) {
            return countZeroes(arr, middleIdx + 1, rightIdx)
        } else {
            return countZeroes(arr, leftIdx, middleIdx - 1);
        }
    }
    return 0;
}

// [1, 0, 0, 0, 0]

module.exports = countZeroes