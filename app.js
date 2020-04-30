//BROWSER VERSION
/*Using userinput from what they type into the prompt so have to create userInput variable */

let balance = 500;
let pinAttempts = 0;
let pin = 3233;
let transactionLogs = [];
let currencyConverted;
let userInput;
const maxDepositLimit = 250;
const usDollars = 1.2;


//ENTER PIN
const enterPin = () => {
    userInput = prompt("Please enter your pin");
    while(pinAttempts <= 3) {
        if (userInput == pin) {
            selectOption();
        } else if (pinAttempts === 3) {
            alert("Sorry your account is now blocked");
            return;     
        } else {
            alert("Please re-enter your pin");
            pinAttempts++;
            enterPin();
        }
    }
}

// } else if (userInput !== pin) {
//     alert("Please re-enter your pin");
//     pinAttempts++;
//     console.log(pinAttempts);
//     enterPin();
// } else {
//     alert("Sorry your account is now blocked");
//     return;
// }





    
    // else if (pinAttempts  === 3) {
    //     alert("Your account is now blocked!Please contact your bank")
    //     return
    // } else {
    //     pinAttempts++;
    //     prompt("Please re-enter your pin number") //
    //     console.log(`Number of pin attempts:${pinAttempts}`) //
    //     return;
    // }

//CHECK BALANCE
const checkBalance = () => {
    transactionLogs.push("Balance checked");
    alert("You have selected: Check balance");
    alert(`Your current balance is: £${balance}`);
    selectOption();
}
// checkBalance();

// //WITHDRAW FROM THEIR ACCOUNT
const withdrawAmount = () => {
    userInput = prompt("Please enter the amount you wish to withdraw");
    if ( (userInput < balance) && (userInput < 251)) {
        balance -= userInput;
        transactionLogs.push(`£${userInput} withdrawn from your account`);
        alert(`Successful transaction! You have withdrawn £${userInput} and your new balance is £${balance}`);
        selectOption();
        return balance;
    } else if ( userInput > 251) {
        alert("You have reached your maximum withdrawal amount today")
        selectOption();
    } else {
        alert("Sorry you have insufficient funds!")
        selectOption();

    }
}
// withdrawAmount(300);

//DEPOSIT FROM THEIR ACCOUNT - UNDER £250 NOT WORKING CORRECTLY!!!
const depositAmount = () => {
    userInput = prompt("Please enter the amount you wish to deposit")
    if (userInput <= maxDepositLimit) {
        balance += parseInt(userInput);
        transactionLogs.push(`£${deposit} deposited into your account`)
        alert(`Successful transaction! You have deposited £${userInput} and your new balance is £${balance}`);
        selectOption();
        return balance;
    } else {
        alert("Sorry you have reached the maximum you can deposit today");
        selectOption();
    }
}

//CHANGE PIN NUMBER
const changePin = () => {
    userInput = prompt("Please enter your new 4 digit pin number")
    if ( userInput.length == 4 ) {
        pin = userInput;
        transactionLogs.push("Pin number updated")
        alert(`Your new pin number is:${pin}`)
        selectOption();
        return pin;
    } else {
        alert("Sorry please enter a number that is 4 digits long")
        changePin();
    }
    
}


//CONVERT CURRENCY
const convertCurrency = () => {
    userInput = prompt("Please select how much you wish to convert to");
    if ( userInput <= balance) {
        currencyConverted = userInput * usDollars;
        balance -= userInput;
        alert(`You have successfully converted $${currencyConverted} and your new balance is £${balance}`);
        selectOption();
    } else {
        alert("Sorry you have insufficient funds");
        selectOption();
    }
    
}



//SELET OPTION
const selectOption = () => {
    userInput = prompt("Please select from the following options: \n1: Check balance \n2: Cash withdrawal \n3: Deposit cash \n4: Change pin \n5: Convert currency \n6: Withdraw card")
    if (userInput == 1) {
        checkBalance();
    } else if (userInput == 2) {
        alert("You have selected: Cash withdrawal");
        withdrawAmount();
    } else if (userInput == 3) {
        alert("You have selected: Deposit cash");
        depositAmount();
    } else if (userInput == 4) {
        alert("You have selected: Change pin number");
        changePin();
    } else if (userInput == 5) {
        alert("You have selected: Convert currency");
        convertCurrency();
    } else if ( userInput == 6)  {
        alert("Thank you for using the bank.Enjoy your day!");
        return;
    } else {
        alert("Please select from Options 1-6");
        selectOption();
    }
}

// selectOption(1);


enterPin();

//change pin prompts - USER INPUT WHAT IS YOUR NEW PIN & PLEASE CONFIRM YOUR pin.