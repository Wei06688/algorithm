var arr = [1,2,3,312,3,12,312,3,12,312,3,123,12]

function quickSort(array){
    if(!array.length) return array

    const middle = Math.floor(array.length / 2)
    const middleNumber = array.splice(middle,1)[0]
    const left = []
    const right = []

    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        element > middleNumber? right.push(element) : left.push(element)
    }

    return [].concat(quickSort(left),middleNumber,quickSort(right))
}

console.log(quickSort(arr));