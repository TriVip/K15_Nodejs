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
    } else if (bmi <= 24.9) {
        return 'Normal weight';
    } else if (bmi <= 29.9) {
        return 'Overweight';
    } else {
        return 'Obesity';
    }
}

function suggestWeightChange(bmi, weight, height) {
    if (bmi < 18.5) {
        const targetWeight = 18.5 * height * height;
        const weightToGain = targetWeight - weight;
        return `You should consider gaining weight. You need to gain approximately ${weightToGain.toFixed(2)} kg to reach a normal weight.`;
    } else if (bmi > 24.9) {
        const targetWeight = 24.9 * height * height;
        const weightToLose = weight - targetWeight;
        return `You should consider losing weight. You need to lose approximately ${weightToLose.toFixed(2)} kg to reach a normal weight.`;
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

            const suggestion = suggestWeightChange(bmi, weight, height);
            console.log(suggestion);

            rl.close();
        });
    });
});
