/*
    Calculate combination for lock (10 - 40 - 39) and display to user.
    Once dialogue box for combination is closed, prompt user for the combination. Users have a total of 3 tries. If correct combination is not entered, force close the tab.
*/

//calculate first code (10)
const first_code = 5 + 5;
// calculate second code (40)
const second_code = 5 * 8;
// calculate third code (39)
const third_code = 80 / 2 - 1;

// create string with all of the codes. Should look like "10-40-39"
let combination = `${first_code}-${second_code}-${third_code}`;
console.log(combination);

// print text and combination code to user
let intro_text =
  "You have received this message beccause you have been chosen to open an important vault. Here is the secret combination: ";
alert(intro_text + combination);

/*
  WHILE user has tries (3)
    IF code is not correct
      -subtract a try and prompt user again
    ELSE the code is correct
      -let user into site
  IF user is out of tries
    -let user know they are out of tries and exit program
*/
let code = prompt("Enter the vault code. Format: xx-xx-xx", "");
let tries = 3;
while (tries > 1) {
  //code entered by user is incorrecct
  if (code != combination) {
    // lose a try
    tries = tries - 1;
    // prompt user to try again
    code = prompt("Try again. " + tries + " more tries. Format: xx-xx-xx", "");
  }
  // let user into site
  else break;
}
// out of tries. force close tab
if (tries <= 1 && code != combination) {
  alert("Too many fails. Closing window");
  window.close();
}
