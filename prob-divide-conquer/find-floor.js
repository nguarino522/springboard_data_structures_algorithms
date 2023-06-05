function findFloor(arr, num, firstIdx = 0, lastIdx = arr.length - 1) {
    if (firstIdx > lastIdx) return -1;
    if (num >= arr[lastIdx]) return arr[lastIdx];

    let midIdx = Math.floor((firstIdx + lastIdx) / 2);

    if (arr[midIdx] === num) return arr[midIdx];
    
    if (midIdx > 0 && arr[midIdx - 1] <= num && num < arr [midIdx]) {
        return arr[midIdx -1];
    }

    if (num < arr[midIdx]) {
        return findFloor(arr, num, firstIdx, midIdx -1);
    }

    return findFloor(arr, num, midIdx + 1, lastIdx);

}

module.exports = findFloor