#!usr/bin/env node 

import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import { main } from "ts-node/dist/bin";

const sleep = () => {
    return new Promise((resolve) => setTimeout(resolve, 5000));
};



async function welcome(){
let rainbow = chalkAnimation.rainbow('Lets calculate the numbers');
await sleep();
rainbow.stop();
console.log(chalk.blueBright(`       _____________________
      |  _________________  |
      | | JO  3.141592654 | |
      | |_________________| |
      |  __ __ __ __ __ __  |
      | |__|__|__|__|__|__| |
      | |__|__|__|__|__|__| |
      | |__|__|__|__|__|__| |
      | |__|__|__|__|__|__| |
      | |__|__|__|__|__|__| |
      | |__|__|__|__|__|__| |
      |  ___ ___ ___   ___  |
      | | 7 | 8 | 9 | | + | |
      | |___|___|___| |___| |
      | | 4 | 5 | 6 | | - | |
      | |___|___|___| |___| |
      | | 1 | 2 | 3 | | x | |
      | |___|___|___| |___| |
      | | . | 0 | = | | / | |
      | |___|___|___| |___| |
      |_____________________|
       `));

 
}

await welcome();
async function askquestion(){
    const answers=await
    inquirer
    .prompt([
      /* Pass your questions in here */
      {
        type: "list",
        name: "operator",
        message: chalk.greenBright ("which operation uh want to perform? \n"),
        choices :["Add","Subtract","Divide","Multiply"]
      },
      {

        type: "number",
        name: "num1",
        message: chalk.yellowBright("Enter the first number : "),
      },
      {

        type: "number",
        name: "num2",
        message:chalk.whiteBright("Enter the second number : "),
      },


    ]);
if (answers.operator == "Add") {
    console.log(
      chalk.blueBright(
        `        ${answers.num1} + ${answers.num2} = ${answers.num1 + answers.num2 }` )
    );
}
else if (answers.operator == "Subtract") {
    console.log(
      chalk.yellowBright(
        `        ${answers.num1} - ${answers.num2} = ${ answers.num1 - answers.num2 }` )
    );
  } 
  else if (answers.operator == "Multiply") {
    console.log(
      chalk.greenBright(
        `        ${answers.num1} * ${answers.num2} = ${answers.num1 * answers.num2}` )
    );
  } else if (answers.operator == "Divide") {
    console.log(
      chalk.whiteBright(
        `        ${answers.num1} / ${answers.num2} = ${ answers.num1 / answers.num2 }` )
    );
  }



    };

//askquestion();
async function startAgain(){
do{
    await askquestion() ;
 var again=await inquirer
 .prompt({
        type: "input",
        name: "startAgain",
        message: chalk.whiteBright("Want to start again? press y or n:  \n"),
    })

} 
 while (again.startAgain == 'yes'|| again.startAgain == 'y' || again.startAgain == 'YES')
}

startAgain();