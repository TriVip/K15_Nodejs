const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calculateBMI(weight, height) {
    return weight / (height * height);
}

function getBMICategory(bmi) {
    if (bmi < 18.5) {
        return 'Underweight';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        return 'Normal weight';
    } else if (bmi >= 25 && bmi <= 29.9) {
        return 'Overweight';
    } else {
        return 'Obesity';
    }
}

function suggestWeightChange(bmi) {
    if (bmi < 18.5) {
        return 'You should consider gaining weight.';
    } else if (bmi > 24.9) {
        return 'You should consider losing weight.';
    } else {
        return 'Your weight is normal.';
    }
}

function isEvenOrOdd(number) {
    return number % 2 === 0 ? 'even' : 'odd';
}

rl.question('Enter your height in meters: ', (height) => {
    rl.question('Enter your weight in kilograms: ', (weight) => {
        const bmi = calculateBMI(weight, height);
        const category = getBMICategory(bmi);
        console.log(`Your BMI is ${bmi.toFixed(2)}, which is categorized as ${category}.`);

        rl.question('Enter a number: ', (number) => {
            const parity = isEvenOrOdd(parseInt(number));
            console.log(`The number ${number} is ${parity}.`);

            const suggestion = suggestWeightChange(bmi);
            console.log(suggestion);

            rl.close();
        });
    });
});
