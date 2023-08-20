function numToString(num) {
    const units = ["", "one", "two", 'three', "four", "five", "six", "seven", "eight", "nine"];
    const teens = ["ten", "eleven", "twelve", "thirteen", 'fourteen', "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    const ten = ["", "", "twenty", "thirty", "forty", "fifty", 'sixty', "seventy", "eighty", "ninety"];
    const hundreds = ["", "one hundred", "two hundred", "three hundred", "four hundred", "five hundred", "six hundred", "seven hundred", "eight hundred", "nine hundred"];

    if (num < 0) {
        return ("zero")
    } else if (num < 10) {
        return (units[num])
    } else if (num < 20) {
        return (teens[num - 10])
    } else if (num < 100) {
        const digitTen = Math.floor(num / 10);
        const digitUnits = num % 10;
        return (ten[digitTen] + " " + units[digitUnits])
    }

    if (num < 1000) {
        const digithundreds = Math.floor(num / 100);

        const remainder = num % 100;
        return (hundreds[digithundreds] + " " + numToString(remainder));
    }

}


let number = prompt();

alert(numToString(number))

console.log(999 % 100)