const readline = require("readline");
const userquestions = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var userName = "", userGender = "", userAge = 0, userIncome = 0;
userquestions.question("What is your name? " , (name) =>{
    userName = name;
    userquestions.question("What is your age ?" , (age) =>{
        userAge = age;
        userquestions.question("What is your gender ?" , (gender) => {
            userGender = gender;
            userquestions.question("Please enter your yearly income" , (income) =>{
                userIncome = income;
                calculateUserTax();
                userquestions.close();
            });
        });
    });
});

function calculateUserTax(){
    var taxableAmount = 0;
    if(userAge >= 80){
        if(userIncome>= 500000 && userIncome < 1000000){
            taxableAmount = 12500 + (userIncome - 500000) * 0.2;
        }else if(userIncome >= 1000000){
            taxableAmount = 37500 + (userIncome - 750000) * 0.3; 
        }
    }else if(userAge >= 60 && userAge < 80){
        if(userIncome>= 300000 && userIncome < 500000){
            taxableAmount = (userIncome - 300000) * 0.05;
        }else if(userIncome >= 500000 && userIncome< 1000000){
            taxableAmount = 12500 + (userIncome - 500000) * 0.2; 
        }else if(userIncome>= 1000000){
            taxableAmount = 37500 + (userIncome - 750000) * 0.3;; 
        }
    }else if(userAge >= 18 && userAge < 60){
        if(userIncome>= 250000 && userIncome < 500000){
            taxableAmount = (userIncome - 250000) * 0.05;
        }else if(userIncome >= 500000 && userIncome< 750000){
            taxableAmount = 12500 + (userIncome - 500000) * 0.1; 
        }else if(userIncome >= 750000 && userIncome< 1000000){
            taxableAmount = 37500 + (userIncome - 750000) * 0.15; 
        }else if(userIncome >= 1000000 && userIncome< 1250000){
            taxableAmount = 75000 + (income - 1000000) * 0.2; 
        }else if(userIncome >= 1250000 && userIncome< 1500000){
            taxableAmount = 125000 + (userIncome - 1250000) * 0.25; 
        }else(userIncome >= 1500000);{
            taxableAmount = 187500 + (userIncome - 1500000) * 0.3; 
        }
    }

    if(taxableAmount > 0){
        console.log(userName + "! Your payable tax amount will be " + taxableAmount);
    }else {
        console.log(userName + ", Congratulations! You payable tax amount is " + taxableAmount);
    }
}