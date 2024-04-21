import inquirer from "inquirer";

let user = await inquirer.prompt([
    {
        name: "firstNumber",
        type: "number",
        message: "Enter your first number"
    },
    {
        name: "secondNumber",
        type: "number",
        message: "Enter your second number"
    },
    {
        name: "operator",
        type: "list",
        message: "select one of the operators",
        choices: ["addition", "subtraction", "multiplication", "division"]
    },
])
if(user.operator === "addition"){
    console.log(user.firstNumber + user.secondNumber);
}else if(user.operator === "subtraction"){
    console.log(user.firstNumber - user.secondNumber);
}else if(user.operator === "multiplication"){
    console.log(user.firstNumber * user.secondNumber);
}else if(user.operator === "division"){
    console.log(user.firstNumber / user.secondNumber);
}else{
    console.log("please select a valid operator");
}

   