const stringCalculator = (numbers: string) => {
    const numbersSplit = numbers.split(",");
    const sum = numbersSplit.reduce((res: number, currentVal: string) => res += parseInt(currentVal), 0); 
    return sum;
}

const sumOfCommaSeparatedNums = stringCalculator("1,5");
const sumOfLargeNumbersCommaSeparated = stringCalculator("2,6,0,7,9,1,0,3,4,8,1,1,9,2,1,8,1,3,5,3,1,8,3,7,4,0,5,0,9,7,4,3,8,4,7,5,8,8,9,2,1,7,2,1,5,6,0,4,6,1,4,1,9,0,3,0,2,7,8,8,0,9,5,9,9,0,1,3,0,2,3,7,8,2,5,9,0,3,9,5,6,7,9,7,2,0,8,8,9,3,9,9,1,9,7,9,8,9,1,9");
console.log('ANSWER -', {
    sumOfCommaSeparatedNums,
    sumOfLargeNumbersCommaSeparated
});