//your JS code here. If required.
function secondHighest(arr) {
    if (arr.length < 2) return -Infinity;

    let first = -Infinity;
    let second = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        let val = Number(arr[i]);

        if (val > first) {
            second = first;
            first = val;
        } else if (val < first && val > second) {
            second = val;
        }
    }

    return second;
}