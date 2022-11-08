var generateBtn = document.querySelector('#generate');

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}
// Values for the function are created
let specialCharacters = [
  '`',
  '~',
  '#',
  '@',
  '%',
  '^',
  '&',
  '*',
  '<',
  '>',
  '?',
  '/',
];
let lowerCase = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];
let upperCase = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];
let numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
let masterArray = [];
let randomPassword = '';
let pass;

// Prompts
function generatePassword() {
  let passwordLength = prompt(
    'How many characters do you want your password to be? Must be between 8-128 characters.'
  );
  passwordLength = parseInt;

  if (passwordLength < 8 || passwordLength > 128)
    return alert('Error, please try again.');

  let useSpecialCharacters = confirm(
    'Do you want to include Special Characters?'
  );
  if (useSpecialCharacters) masterArray = masterArray.concat(specialCharacters);
  console.log(masterArray);

  let useLowerCase = confirm('Do you want to include lowercase letters?');
  if (useLowerCase) masterArray = masterArray.concat(lowerCase);
  console.log(masterArray);

  let useUpperCase = confirm('Do you want to include uppercase letters?');
  if (useUpperCase) masterArray = masterArray.concat(upperCase);
  console.log(masterArray);

  let useNumbers = confirm('Do you want to include numbers?');
  if (useNumbers) masterArray = masterArray.concat(numbers);
  console.log(masterArray);

  for (var i = 0; i < passwordLength; i++) {
    randomPassword =
      masterArray[Math.floor(Math.random() * masterArray.length)];
    console.log(randomPassword);
    pass.push(randomPassword);
    console.log(pass);
    pass = pass.join('');
    console.log(pass);
  }
}
// Event listener to generate button
generateBtn.addEventListener('click', writePassword);
