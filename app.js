function bmiCalculator(userHeight, userWeight) {
    return ((Weight / (Height * Height)) * 10000);
}
let displayname = prompt("enter your name")
let Weight = Number(prompt("type your weight in kg AMERICAN"));
let Height = Number(prompt("type your height in CM AMERICAN"));

function bmiwavelength(){
    if (bmi < 18.5){
        return ("UNDERWEIGHT START EATING");
    } else if (bmi < 25){
        return ("HEALTHY EAT THE SAME AMOUNT");
    } else if (bmi < 30){
        return ("OVERWEIGHT STOP EAT THE SAME AMOUNT");
    } else {
        return ("OBESE HOW ARE YOU ALIVE");
    }
}
const bmi = bmiCalculator(Height,Weight);
const range = bmiwavelength(Height,Weight);

console.log("Name: " + displayname);
console.log("Your BMI is " + bmi);
console.log("You are " + range);