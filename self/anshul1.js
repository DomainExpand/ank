myArray = [12,4,7,9,10,1,3,2,12,13,14,16,3,2,1];


const mySort = (myArray) => {

    const myMinimum = myArray[0];
    for (let i=1;i<myArray.length; i++) {
        if (myArray[i] < myMinimum) {
            myMinimum = myArray[i]
            myArray[i] = myArray[0];
            myArray[0] = myMinimum
        }
    }

    return myArray
}


console.log(mySort(myArray));
// leetcode , geeksforgeeks , 