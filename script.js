/*
Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, 
this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. 
Instead, he's going to buy it for the lowest possible price and sell it at the highest.
Create a function that accepts an array of numbers and return both the minimum and maximum numbers, 
in that order.
*/

// sample arrays to test
var firstArray = [14, 35, 6, 1, 34, 54];
var secondArray = [1.346, 1.6532, 1.8734, 1.8723];
var thirdArray = [0.432, 0.874, 0.523, 0.984, 0.327, 0.2345];
var fourthArray = [13, 72, 98, 43, 24, 65, 31];
var fifthArray = [-54, -23, -54, -21];
var sixthArray = [-0.473, -0.6834, -0.1287, 0.5632];
var seventhArray = [0, 0, 0, 0];

// Function to find and return largest and smallest numbers
function findExtremes(inputArray) {
    for (var i = 0; i < inputArray.length; i++) {
        // Enters the first number in the inputArray into outputArray as both extremes 
        if (i === 0) {
            var outputArray = [inputArray[0], inputArray[0]];
        }
        // Check to see if the number is less than the lowest extreme and replace it in the 
        // ouputArray if it is
        else if (inputArray[i] < outputArray[0]) {
            outputArray[0] = inputArray[i];
        }
        // Check to see if the number is greater than the greates extreme and replace it in the 
        // ouputArray if it is
        else if (inputArray[i] > outputArray[1]) {
            outputArray[1] = inputArray[i];
        }
    }
    return outputArray;
}

console.log(findExtremes(firstArray));
console.log(findExtremes(secondArray));
console.log(findExtremes(thirdArray));
console.log(findExtremes(fourthArray));
console.log(findExtremes(fifthArray));
console.log(findExtremes(sixthArray));
console.log(findExtremes(seventhArray));