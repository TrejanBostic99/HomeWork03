// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  

  passwordText.value = password
  
 }
 function generatePassword() {
  var numbOfChar = prompt("How many characters would you like to use in your password?");
    if(numbOfChar > 7 && numbOfChar < 129) {
        reWriteStats();
       } else {
       alert("You need atleast 8 characters and no more tna 129!")
      
     };
    
  
  
  
  // var upperCase = confirm("Would you like uppercase letters in your password?");
  // var lowerCase = confirm("Woud you like to lowercase letters in your password?");
  // var numbers = confirm("Would you like numbers in your password?");
  // var specialChar = confirm("Would you like special characters in your password?")
 }
 generatePassword();

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
