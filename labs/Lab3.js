function countOddEven(intArr) {
    let evenCount = 0;
    let oddCount = 0;
    for (let num of intArr) {
        if (num % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }
    console.log(`Even numbers: ${evenCount}`);
    console.log(`Odd numbers: ${oddCount}`);
}

function findMinMax(intArr) {
    let min = Math.min(...intArr);
    let max = Math.max(...intArr);
    console.log(`Minimum: ${min}`);
    console.log(`Maximum: ${max}`);
}

function sortArray(intArr) {
    let sortedArr = intArr.sort((a, b) => a - b);
    console.log(`Expected output: [${sortedArr.join(', ')}]`);
}

let intArr1 = [1, 2, 3, 4, 5];
let intArr2 = [1, 2, 3, 4, 5];
let intArr3 = [12, 34, 1, 16, 28];

console.log("Lab 3.1:");
countOddEven(intArr1);

console.log("\nLab 3.2:");
findMinMax(intArr2);

console.log("\nLab 3.3:");
sortArray(intArr3);
