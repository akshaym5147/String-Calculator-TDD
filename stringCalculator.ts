const DELIMITERS_REGEX = /^\/\/(.+)\n(.*)$/;
const stringCalculator = (numbers: string) => {
    let copyNumbers = numbers;
    const regMatch = copyNumbers.match(DELIMITERS_REGEX);

    if(regMatch && regMatch[1]) {
        copyNumbers = regMatch[2] || copyNumbers;
        copyNumbers = copyNumbers.replace(new RegExp(regMatch[1], 'g'), ',');
    }

    const numbersSplit = copyNumbers.split(/,|\n/);

    let sum = 0;
    const negetiveNumbers: string[] = [];
    // I am adding negetive numbers as well in sum
    // I will throw the errors if negetiveNumbers exist and will return null
    numbersSplit.forEach((item) => {
        if(parseInt(item) < 0) {
            negetiveNumbers.push(item)
        } else if(parseInt(item) <= 1000) {
            sum += parseInt(item);
        }
    })

    if(negetiveNumbers.length > 0) {
        console.error("negatives not allowed:", negetiveNumbers.join(','))
        return;
    }
    return sum;
}

const sumOfCommaSeparatedNums = stringCalculator("1,5");
console.log('sumOfCommaSeparatedNums', sumOfCommaSeparatedNums);
const sumOfLargeNumbersCommaSeparated = stringCalculator("2,6,0,7,9,1,0,3,4,8,1,1,9,2,1,8,1,3,5,3,1,8,3,7,4,0,5,0,9,7,4,3,8,4,7,5,8,8,9,2,1,7,2,1,5,6,0,4,6,1,4,1,9,0,3,0,2,7,8,8,0,9,5,9,9,0,1,3,0,2,3,7,8,2,5,9,0,3,9,5,6,7,9,7,2,0,8,8,9,3,9,9,1,9,7,9,8,9,1,9");
console.log('sumOfLargeNumbersCommaSeparated', sumOfLargeNumbersCommaSeparated);
const sumOfNumsWithNewLines = stringCalculator("1\n2,3");
console.log('sumOfNumsWithNewLines', sumOfNumsWithNewLines);
const sumOfDelimiters = stringCalculator("//;\n1;2;3");
console.log('sumOfDelimiters', sumOfDelimiters);
const withNegetiveNumbers = stringCalculator("-1,5");
console.log('withNegetiveNumbers', withNegetiveNumbers);
const withNumbersGtrThan1000 = stringCalculator("1,1000,1001");
console.log('withNumbersGtrThan1000', withNumbersGtrThan1000);