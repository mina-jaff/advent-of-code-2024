const analyzeMul = (substring) => {
    if (substring[1] === 'u' && substring[2] === 'l' && substring[3] === '(') {
        const betweenBrackets = substring.slice(4, -1); // Extract content inside parentheses
        const nums = betweenBrackets.split(",");
        if (nums.length === 2 && !isNaN(parseInt(nums[0])) && !isNaN(parseInt(nums[1]))) {
            return parseInt(nums[0]) * parseInt(nums[1]);
        }
    }
    return null;
};

const uncorruptedMulInstructions = (input) => {
    let sum = 0;
    let startIndex = -1;

    for (let i = 0; i < input.length; i++) {
        if (input[i] === 'm') {
            startIndex = i; // Potential start of 'mul(...)'
        }
        if (input[i] === ')' && startIndex !== -1) {
            const substringToTest = input.slice(startIndex, i + 1); // Extract substring from start to ')'
            const mulResult = analyzeMul(substringToTest); // Analyze the substring
            if (mulResult !== null) {
                sum += mulResult;
            }
            startIndex = -1; // Reset startIndex
        }
    }
    return sum;
};

