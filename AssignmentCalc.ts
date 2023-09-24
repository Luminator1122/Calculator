import { error } from "console"
import { promises } from "dns"
import inquirer, { Answers, QuestionCollection } from "inquirer"
const myQuesions: QuestionCollection = [{
    name: "FirstValue",
    type: "number",
    message: "Enter first Value"
},
{
    name: "SecondValue",
    type: "number",
    message: "Entr Second Value"
},
{
    name: "operations",
    type: "list",
    message: "Select any one Operataor",
    choices: ["+", "-", "*", "/", "%", "power", "sq.Root"]
}]
var myAnswers: Promise<Answers> = inquirer.prompt(myQuesions)
myAnswers.then((answers: Answers) => {
    switch (answers.operations) {
        case "+":
            console.log(`${answers.FirstValue} + ${answers.SecondValue} = ${answers.FirstValue + answers.SecondValue}`)
            break;
        case "-":
            console.log(`${answers.FirstValue} - ${answers.SecondValue} = ${answers.FirstValue - answers.SecondValue}`)
            break;
        case "*":
            console.log(`${answers.FirstValue} * ${answers.SecondValue} = ${answers.FirstValue * answers.SecondValue}`)
            break;
        case "/":
            console.log(`${answers.FirstValue} / ${answers.SecondValue} = ${answers.FirstValue / answers.SecondValue}`)
            break;
        case "%":
            console.log(`${answers.FirstValue} % ${answers.SecondValue} = ${answers.FirstValue % answers.SecondValue}`)
            break;
        case "power":
            console.log(`${answers.FirstValue} power ${answers.SecondValue} = ${Math.pow(answers.FirstValue, answers.SecondValue)}`)
            break;
        case "sq.Root":
            console.log(`Square Root of ${answers.FirstValue} = ${Math.sqrt(answers.FirstValue)} And Square Root of ${answers.SecondValue} is ${Math.sqrt(answers.SecondValue)}`)
            break;
        default:
            break;
    }
    // console.log("My Answers", myAnswers)
})
    .catch((error) => {
        console.log("Error foud", error)
    })

//console.log("end line")
