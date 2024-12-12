
// Problem_01: Difference between two numbers.
function calculateDifference(a, b) {
    return a - b;
}
console.log(calculateDifference(13,4));
console.log(calculateDifference(-13,4));

// Problem_02: Finding Odd Number.
function isOdd(a){
    if(a %2 !==0){
        return true;
    }else{
        return false;
    }
}
console.log(isOdd(5));
console.log(isOdd(6));

// Problem_03: Finding the lowest value of an array.
function findMin(numbers){
    let min = numbers[0];
    for (let i = 0; i <numbers.length; i++) {
        if (numbers[i] < min){
            min = numbers[i];
        }
    }
    return min;
}
console.log(findMin([5, 10, 23, 7, 7, 4, 9, 34]));
console.log(findMin([-2, 10, 0, 7, -10, 9, 34]));

// Problem_04: Finding Even Numbers.
function filterEvenNumbers(numbers){
    return numbers.filter((x) => x % 2 === 0);
}
console.log(filterEvenNumbers([1, 2, 5, 7, 8, 23, 18, 30, 39]));
console.log(filterEvenNumbers([1, 3, 5, 19, 23, 39]));
console.log(filterEvenNumbers([8, 22, 18, 30, 40]));

// Problem_05: Sorting Descending Order.
function sortArrayDescending(numbers){
    return numbers.sort((a, b) => b-a);
}
console.log(sortArrayDescending([1, 2, 5, 27, 8, 23, 60]));
console.log(sortArrayDescending([1, 0, 5, 27, -8, 23, 45]));

// Problem_06: Converting first letter Upper case to Lower case of a string and return the string.
function lowercaseFirstLetter(string){
    if (string.length === 0){
        return string; // Checking empty string.
    }
    return string
        .split(" ") // Split into two words based on spaces
        .map((text) => text.charAt(0).toLowerCase() + text.slice(1)) // Lower case the first letter of each word.
        .join(" "); // Join all words together with spaces.
}
console.log(lowercaseFirstLetter("Hello"));
console.log(lowercaseFirstLetter("Hello World"));
console.log(lowercaseFirstLetter(" "));
console.log(lowercaseFirstLetter("javaScript"));
console.log(lowercaseFirstLetter("My Name is Sandwip"));

// Problem_07: Calculating Average of a number Array.
function findAverage(numbers){
    if (numbers.length === 0){
        return 0; // Return 0 if the input is empty.
    }
    const sum = numbers.reduce((acc, x) => acc + x, 0);
    return sum / numbers.length; // This returns Average of all numbers.
}
console.log(findAverage([1, 12, 5, 7]));
console.log(findAverage([10, 23, 15, 37, 0]));
console.log(findAverage([]));

// Problem_08: Leap year calculation.
function isLeapYear(year){
    if (year % 4 === 0 && year % 100 !== 0 || (year % 400 === 0)){
        return true; // Result is leap year.
    }
    return false; // Result is not leap year.
}
console.log(isLeapYear(2000));
console.log(isLeapYear(2020));
console.log(isLeapYear(1600));
console.log(isLeapYear(1900));
