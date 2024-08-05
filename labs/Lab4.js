const readline = require('readline');

// Create interface for input and output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Bank account object structure
const bankAccount1 = {
    accountNumber: '1234',
    routingNumber: '1111',
    balance: 1000.0
};

// Clone bankAccount1 and update accountNumber
const bankAccount2 = {
    accountNumber: '9876',
    routingNumber: '2222',
    balance: 1000.0
};

// Put them into an array
const bankAccounts = [bankAccount1, bankAccount2];

// Function to find an account by account number
function findAccount(accountNumber) {
    for (let account of bankAccounts) {
        if (account.accountNumber === accountNumber) {
            return account;
        }
    }
    return null;
}

// Function to handle finding an account and printing info
function handleFindAccount() {
    rl.question('Enter the account number: ', (accountNumber) => {
        const account = findAccount(accountNumber);
        if (account) {
            console.log(`Account Number: ${account.accountNumber}`);
            console.log(`Balance: ${account.balance}`);
        } else {
            console.log('Account not found.');
        }
        mainMenu();
    });
}

// Function to handle withdrawing money
function handleWithdrawMoney() {
    rl.question('Enter the account number: ', (accountNumber) => {
        const account = findAccount(accountNumber);
        if (account) {
            rl.question('Enter amount to withdraw: ', (amount) => {
                const withdrawAmount = parseFloat(amount);
                if (withdrawAmount > account.balance) {
                    console.log('Insufficient balance.');
                } else {
                    account.balance -= withdrawAmount;
                    console.log(`Withdrawal successful. New balance: ${account.balance}`);
                }
                mainMenu();
            });
        } else {
            console.log('Account not found.');
            mainMenu();
        }
    });
}

// Main function to run the application
function mainMenu() {
    console.log('\n=== Banking application ===');
    console.log('1. Find an account');
    console.log('2. Withdraw money');
    console.log('0. Exit the program');
    rl.question('Choose an option: ', (choice) => {
        switch (choice) {
            case '1':
                handleFindAccount();
                break;
            case '2':
                handleWithdrawMoney();
                break;
            case '0':
                console.log('Exiting program...');
                rl.close();
                break;
            default:
                console.log('Invalid option. Please choose again.');
                mainMenu();
        }
    });
}

// Start the application
mainMenu();
