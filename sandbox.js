let userBalance = 25
let userPin = 1234
let accountNumber = 987654321
let userInput;

/* 1. function to enter pin */

const enterPin = () => {
    userInput = prompt("Enter your pin"); 
    if (userPin == userInput) {
        userOptions();
    } else {
        enterPin(); // to not repeat code can just can just call pin function again
    }
} 
// if think some code can be re-used elsewhere put it in a function
const showBalance = () => {
    alert("Here's you current balance £" +userBalance) //alert shows information whilst prompt asks you information
}

const showWithdrawal = () => {
    userInput = prompt("Please enter the amount you wish to withdraw");
    userBalance = userBalance - parseInt(userInput);
    alert(`You're new balance is £${userBalance}`); 
}
const showDeposit = () => {
    userInput = prompt("Please enter the amount you wish to deposit");
    userBalance = userBalance + parseInt(userInput);
    alert(`You're new balance is £${userBalance}`);
}

const userOptions = () => {
    userInput = prompt("Please choose an option: \n1: Check balance \n2: withdraw cash \n3: deposit \n4:cancel");
    
    if (userInput == 1) { // 2 == means you dont need to convert the string to number as loose comparison
        // if user selects option 1 to view balance - show balance
        showBalance();
    } else if (userInput == 2) {
        // 4.if users selects withdraw cash - enter amount to withdraw and then show balance
        showWithdrawal();
    } else if (userInput == 3) {
       // 5.if user selects deposit - enter amount to deposit and show new balance
       showDeposit();
    } else if (userInput == 4) {
        // 6.user selects cancel -go back to step 2
        // userOptions(); // looks like continous loop so best to go back to pin number
        enterPin();
    }
} 

enterPin()
