//your JS code here. If required.
function secondHighest(arr) {
    // 1. Handle empty or single element arrays
    if (arr.length <= 1) {
        return -Infinity;
    }

    let first = -Infinity;
    let second = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        // Convert string from prompt to a number
        let val = Number(arr[i]);

        if (val > first) {
            // New highest found: old highest becomes second
            second = first;
            first = val;
        } else if (val < first && val > second) {
            // New second highest found
            second = val;
        }
    }

    // 2. If second is still -Infinity, it means all elements were the same
    return second;
}
