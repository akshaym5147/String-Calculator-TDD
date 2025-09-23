const MULTI_DELIMITERS_REGEX = /^\/\/(\[.*?\]+)\n(.*)$/;
const DELIMITER_PATTERN_REGEX = /\[(.*?)\]/g;

const getEscapedRegEx = (str?: string) => {
    return str?.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

const stringCalculator = (numbers: string) => {
    console.log('Input -', JSON.stringify(numbers));
    let copyNumbers = numbers;
    const regMultiDelimitersMatch = copyNumbers.match(MULTI_DELIMITERS_REGEX);

    if(regMultiDelimitersMatch) {
        const delimiters = regMultiDelimitersMatch[1] || '';
        const delimitersList = [
            ...delimiters.matchAll(DELIMITER_PATTERN_REGEX).map(r => r[1])
        ];

        const escapedRegex = delimitersList.map(getEscapedRegEx)
        const delimiterExtracterRegex = new RegExp(escapedRegex.join('|'));

        copyNumbers = regMultiDelimitersMatch[2] || copyNumbers;
        copyNumbers = copyNumbers.replace(new RegExp(delimiterExtracterRegex, 'g'), ',');
    }

    const numbersSplit = copyNumbers.split(/,|\n/);

    let sum = 0;
    const negetiveNumbers: string[] = [];
    // I am adding negetive numbers in seperate array since its mentioned to print all negetive numbers
    // I am keeping track of positive nums sum as well
    // If negetive numbers are present then printing  errors and returning null
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

const commaSeperatedNums = stringCalculator("1,5");
console.log('commaSeperatedNums', commaSeperatedNums, '\n');

const largeCommaSeperatedNums = stringCalculator("2,6,0,7,9,1,0,3,4,8,1,1,9,2,1,8,1,3,5,3");
console.log('largeCommaSeperatedNums', largeCommaSeperatedNums, '\n');

const numsWithNewLines = stringCalculator("1\n2,3");
console.log('numsWithNewLines', numsWithNewLines, '\n');

const numsWithSingleTypeDelimiters = stringCalculator("//;\n1;2;3");
console.log('numsWithSingleTypeDelimiters', numsWithSingleTypeDelimiters, '\n');

const numsWithNegetiveNumbers = stringCalculator("-1,5");
console.log('numsWithNegetiveNumbers', numsWithNegetiveNumbers, '\n');

const numsWithGtrThan1000 = stringCalculator("1,1000,1001");
console.log('numsWithGtrThan1000', numsWithGtrThan1000, '\n');

const numsWithNSizeDelimiter = stringCalculator("//[***]\n1***2***3");
console.log('numsWithNSizeDelimiter', numsWithNSizeDelimiter, '\n');

const numsWithMultipleTypesDelimiters = stringCalculator("//[*][%]\n1*2%3");
console.log('numsWithMultipleTypesDelimiters', numsWithMultipleTypesDelimiters, '\n');
