function sortedFrequency(arr, num) {
    let firstIdx = findFirstIdx(arr, num);
    if (firstIdx === -1) return firstIdx;
    let lastIdx = findLastIdx(arr, num);
    return lastIdx - firstIdx + 1;
}



function findFirstIdx(arr, num, leftIdx = 0, rightIdx = arr.length - 1) {
    if (rightIdx >= leftIdx) {
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
        if ((middleIdx === 0 || num > arr[middleIdx - 1]) && arr[middleIdx] === num) {
            return middleIdx;
        } else if (num > arr[middleIdx]) {
            return findFirstIdx(arr, num, middleIdx + 1, rightIdx)
        } else {
            return findFirstIdx(arr, num, leftIdx, middleIdx - 1)
        }
    }
    return -1;
}

function findLastIdx(arr, num, leftIdx = 0, rightIdx = arr.length - 1) {
    if (rightIdx >= leftIdx) {
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
        if ((middleIdx === arr.length - 1 || num < arr[middleIdx + 1]) && arr[middleIdx] === num) {
            return middleIdx;
        } else if (num < arr[middleIdx]) {
            return findLastIdx(arr, num, leftIdx, middleIdx - 1);
        } else {
            return findLastIdx(arr, num, middleIdx + 1, rightIdx);
        }
    }
    return -1;
}

module.exports = sortedFrequency