
function findMinAndRemoveSorted(array) {
    return array.splice(0, 1)[0];
}

function merge(arr1, arr2) {
    let ret = [];

    let el1 = findMinAndRemoveSorted(arr1);
    let el2 = findMinAndRemoveSorted(arr2);
    while (el1 || el2) {
        if (el1 && el2) {
            if (el1 < el2) {
                ret.push(el1);
                el1 = findMinAndRemoveSorted(arr1);
            } else {
                ret.push(el2);
                el2 = findMinAndRemoveSorted(arr2);
            }
        } else if (el1) {
            ret.push(el1);
            el1 = findMinAndRemoveSorted(arr1);
        } else {
            ret.push(el2);
            el2 = findMinAndRemoveSorted(arr2);
        }
    }
    
    return ret;
}

function mergeSort(array) {
    if (array.length <= 1)
        return array;

    let arr1 = array.slice(0, array.length / 2);
    let arr2 = array.slice(array.length / 2);

    arr1 = mergeSort(arr1);
    arr2 = mergeSort(arr2);

    return merge(arr1, arr2);
}
