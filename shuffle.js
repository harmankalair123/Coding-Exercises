let arrList = [1, 2, 3,  4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]; // list of array 1- 20
let sum = 0

const shuffleArray = array => {
    for (let i = array.length -1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i))
        const temp = array[i]
        array[i] = array[j]
        array[j] = temp
    }


    return array

}

console.log("Original List: ", arrList)

let newArray = shuffleArray(arrList);

console.log("Shuffled List: ", newArray)

// grand total


for (let i=0; i < arrList.length; i++) {
    sum = sum + arrList[i];
}

console.log("Grand Total of this array is: ", sum)