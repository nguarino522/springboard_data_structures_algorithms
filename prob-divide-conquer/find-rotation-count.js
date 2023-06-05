function findRotationCount(arr, firstIdx = 0, lastIdx = arr.length - 1) {
    if (lastIdx < firstIdx) {
        return 0;
    }

    if (lastIdx === firstIdx) {
        return firstIdx;
    }

    let midIdx = Math.floor((firstIdx + lastIdx) / 2);

    // Check if element (mid+1) is minimum element.
    // Consider the cases like [3, 4, 5, 1, 2]
    if (midIdx < lastIdx && arr[midIdx + 1] < arr[midIdx]) {
        return midIdx + 1;
    }

    // Check if mid itself is minimum element
    if (midIdx > firstIdx && arr[midIdx] < arr[midIdx - 1]) {
        return midIdx;
    }

    // Decide whether we need to go to left half or right half
    if (arr[lastIdx] > arr[midIdx]) {
        return findRotationCount(arr, firstIdx, midIdx - 1);
    }

    return findRotationCount(arr, midIdx + 1, lastIdx);
}


function findRotationCount2(array) {
    // Check if the array is not rotated at all.
    if (array[0] < array[array.length - 1]) {
      return 0;
    }
  
    // Find the index of the smallest element in the array using binary search.
    let low = 0;
    let high = array.length - 1;
    let mid;
    while (low <= high) {
      mid = Math.floor((low + high) / 2);
      if (array[mid] < array[0]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
  
    // Return the number of rotations.
    return low;
  }


module.exports = findRotationCount