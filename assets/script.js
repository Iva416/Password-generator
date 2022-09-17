
var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

let specialCharacters = ["`", "~", "#", "@", "%", "^", "&", "*", "<", ">", "?", "/"];
let lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i","j","k","l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
let masterArray = [];
let randomPassword = "";

generateBtn.addEventListener("click", writePassword);
function generatePassword() {
let passwordLength = prompt ("How many characters do you want your password to be? Must be between 8-128 characters.");
if(!passwordLength || passwordLength <=7 || passwordLength >=129)
return alert("Error, please try again.")
}

let usespecialCharacters = confrim ("Do you want to include Special Characters?");
if (specialCharacters) === true 
masterArray= masterArray.concat(specialCharacters)

let uselowerCase = confrim ("Do you want to include lowercase letters?");
if (lowerCase) === true 
masterArray= masterArray.concat(lowerCase)

let useupperCase = confrim ("Do you want to include uppercase letters?");
if (upperCase) === true 
masterArray= masterArray.concat(upperCase)

let usenumbers = confrim ("Do you want to include numbers?");
if (numbers) === true 
masterArray= masterArray.concat(lowerCase)
for (let i = 0; i < passwordLength; i++) {
randomPassword += masterArray[Math.floor(Math.random()*(masterArray.length))];
console.log(Math.floor(Math.random()*(masterArray.length)));
console.log(randomPassword); 
return randomPassword;

}

