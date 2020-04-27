

let balance = 500;
let pinAttempts = 0;
let pin = "0354";
let transactionLogs = [];
let currencyConverted;


//ENTER PIN
const enterPin = (pin) => {
    // prompt("Please enter your pin")
    if (pin === "0354") {
        console.log("How can we help you today?")
    } else if (pinAttempts  === 3) {
        console.log("Your account is now blocked!Please contact your bank")
        return
    } else {
        pinAttempts++;
        console.log("Please re-enter your pin number") //
        console.log(`Number of pin attempts:${pinAttempts}`) //
        return;
    }
}

enterPin("0354");

enterPin("1234");

enterPin("1234");

enterPin("1234");

// //WITHDRAW FROM THEIR ACCOUNT
const withdrawAmount = (amount) => {
    
    if ( amount < balance) {
        balance -= amount;
        transactionLogs.push(`£${amount} withdrawn from your account`)
        console.log(`Successful transaction! You have withdrawn £${amount} and your new balance is £${balance}`)
        return balance;
    }
    else if ( amount > 250) {
        return;
        console.log("You have reached your maximum withdrawal amount today")
    }
    else {
        console.log("Sorry you have insufficient funds!")

    }
}
// withdrawAmount(300);

// //DEPOSIT INTO THEIR ACCOUNT - UP TO £250
const depositAmount = (deposit) => {
    if (deposit <= 250) {
        balance += deposit;
        transactionLogs.push(`£${deposit} deposited into your account`)
        console.log(`Successful transaction! You have deposited £${deposit} and your new balance is £${balance}`)
        return balance;  
    }
    else {
        console.log("Sorry you have reached the maximum you can deposit today")
    }
}

// depositAmount(250);

//CHECK BALANCE
const checkBalance = () => {
    transactionLogs.push("Balance checked")
    console.log(`Your current balance is: £${balance}`)
}
// checkBalance();

//CHANGE PIN NUMBER
const changePin = (numEntered) => {
    if ( numEntered.length == 4 ) {
        pin = numEntered;
        transactionLogs.push("Pin number updated")
        console.log(`Your new pin number is:${pin}`)
        return pin;
    } else {
        console.log("Sorry please enter a number that is 4 digits long")
    }
    
}

// changePin("9999");
console.log(pin);
// changePin("0000")


//SELET OPTION
const selectOption = (optionSelected) => {
    console.log("Please select ")
    if (optionSelected === 1) {
        console.log("You have selected: Check balance")
        checkBalance();
    } else if (optionSelected === 2) {
        console.log("You have selected: Cash withdrawal");
        withdrawAmount(300);
    } else if (optionSelected === 3) {
        console.log("You have selected: Deposit cash");
        depositAmount(250);
    } else if (optionSelected === 4) {
        console.log("You have selected: Change pin number");
        changePin("9999");
    } else if (optionSelected === 5) {
        console.log("You have selected: Convert currency");
        
    } else {
        console.log("Please select from Options 1-5")
    }
}
selectOption(5);

// STATEMENT OF ACTIONS
console.log(`Today you have done the following transactions:${transactionLogs}`)
// console.log(`transaction logs`, transactionLogs)

// CONVERSION

const convertCurrency = (currency, amount) => {
    console.log("Please select your amount and currency you wish to convert to" )
    if (currency === "USD") {
        currencyConverted = amount * 1.2;
        console.log(`You have successfully converted £${amount} to $${currencyConverted}`)
        return currencyConverted;
    } else if (currency === "EUR") {
        currencyConverted = amount * 1.1;
        console.log(`You have successfully converted £${amount} to €${currencyConverted}}`)
        return currencyConverted;
    } else if (currency === "INR") {
        currencyConverted = amount * 94.6;
        console.log(`You have successfully converted £${amount} to ₹${currencyConverted}}`)
        return currencyConverted;
    } else if (currency === "AUD") {
        currencyConverted = amount * 1.9;
        console.log(`You have successfully converted £${amount} to A$${currencyConverted}}`)
        return currencyConverted;
    } else {
        console.log("Sorry, please select your currency and amount you wish to convert")
    }
}

convertCurrency("AUD", 100);