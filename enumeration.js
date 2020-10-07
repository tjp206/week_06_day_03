const myNumbers = [1 ,2 ,3, 4, 5];

// for (const number of myNumbers) {
//     console.log(`This is number ${number}`);
// }


// // arrow function using 'for each' is the same as above function:
// myNumbers.forEach((number, index) => {     
//     console.log(`This is number ${number} at index position ${index}`);
// })

const multiplyByTwo = function (numbers) {
    // const result = [];
    // numbers.forEach((number) => {
    //     const multiplied = number * 2;
    //     result.push(multiplied);
    // })
    // same as above but using map():
    const result = numbers.map((number) => {
        return number * 2;
    });
    return result;
} 

console.log(multiplyByTwo(myNumbers));

const getEvens = function (numbers) {
    // const result = [];
    // numbers.forEach((number) => {
    //     if(number % 2 === 0) {
    //         result.push(number);
    //     }
    // })
    // same as above using filter():
    const result  = numbers.filter((number) => {
        return number % 2 === 0;
    });
    return result;
}

console.log(getEvens(myNumbers));

const sumElements = function (numbers) {
    // let result = 0;
    // numbers.forEach((number) => {
    //     result += number;
    // })
    // same as above using reduce():
    const total = numbers.reduce((runningTotal, number) => {
        return runningTotal + number;
    }, 0); // set runningTotal using any number which is 0 by default
    return total;
}

console.log(sumElements(myNumbers));



const ourForEach = function (array, callback) {
    for(const element of array) {
        callback(element);
    }
}

const numbers = [1, 2, 3, 4, 5];

ourForEach(numbers, (number) => {
    console.log('The number is:', number);
})