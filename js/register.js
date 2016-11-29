// Script 10.7- register.js
// This script validates a form.

function validateUsername(username, message) {
    //Returns true if the given username
    //matches the following criteria:
    //1. Is 8 or more characters long
    //2. First character is A-Z or a-z
    //3. Contains at least one numeral
    //Returns false otherwise

    var char1;
    var hasNumber;

    //Check username length:
    if (username.length < 8) {
        message.valueOf = "Username must be >= 8 characters";
        return false;
    }

    //Check the first digit
    char1 = username.substr(0, 1).toUpperCase();
    if (!(char1 >= "A" && char1 <= "Z")) {
        message.valueOf  = "Username must begin with A-Z or a-z";
        return false;
    }

    //Check if there is at least one digit
    hasNumber = /\d/;
    if (!(hasNumber.test(username))) {
        message.valueOf  = "Username must contain at " +
            "least one 0-9";
        return false;
    }

    //Alternate method:
    /*var anyDigits;
    for (var i = 1; i < username.length; i++)
    {
        char1 = username.substr(i, 1);
        if (char1 >= "0" && char1 <= "9")
        {
            anyDigits = true;
            break;  //found a digit, exit loop
        } //end if
    } //end for

    if (!(anyDigits)) {
        return false;
    }*/

    //All criteria has been met:
    return true;
}




// Function called when the form is submitted.
// Function validates the form data.

function validateForm(e) {
    'use strict';

    //Handles window-generated events (i.e. non-user)
    if (typeof e == 'undefined') {
        e = window.event;
    }

    //Get form object references
    var firstName = U.$('firstName');
    var lastName = U.$('lastName');
    var userName = U.$('userName');
    var email = U.$('email');
    var phone = U.$('phone');
    var city = U.$('city');
    var state = U.$('state');
    var zip = U.$('zip');
    var terms = U.$('terms');


    //Flag variable
    var error = false;

    //Validate the first name using a regular expression
    if (/^[A-Z \.\-']{2,20}$/i.test(firstName.value)) {
        //Everything between / and / is the expression
        //Allows any letter A-Z (case insensitive)
        //Allows spaces, periods, and hyphens
        //Name must be 2-20 characters long

        //alert("Valid first name");
        removeErrorMessage('firstName');
    }
    else {
        //alert("Invalid first name");
        addErrorMessage(
            'firstName',
            'Invalid/missing first name'
        );
        error = true;
    }

    //Validate the last name using a regular expression:
    if (/^[A-Z \.\-']{2,20}$/i.test(lastName.value)) {
        removeErrorMessage('lastName');
    }
    else {
        addErrorMessage('lastName', 'Invalid last name');
        error = true;
    }

    //Validate the username using a validation function:
    //In Javascript, objects are ALWAYS
    //passed by reference
    //Turn msg into an object instead:
    var msg = Object("");
    if(validateUsername(userName.value, msg)) {
        //The username meets requirements
        removeErrorMessage('userName');
    }
    else {
        //The username is not valid
        addErrorMessage('userName', msg.valueOf);
        error = true;
    }

    //Validate the email using a regular expression:
    if (/^[\w.-]+@[\w.-]+\.[A-Za-z]{2,6}$/i.test(email.value)) {
        removeErrorMessage('email');
    }
    else {
        addErrorMessage('email', 'Invalid email');
        error = true;
    }

    //Validate the phone using a regular expression:
    if (/^\d{3}[ \-\.]?\d{3}[ \-\.]?\d{4}$/i.test(phone.value)) {
        removeErrorMessage('phone');
    }
    else {
        addErrorMessage('phone', 'Invalid phone');
        error = true;
    }

    //Validate the city using a regular expression:
    if (/^[A-Z \.\-']{2,20}$/i.test(city.value)) {
        removeErrorMessage('city');
    }
    else {
        addErrorMessage('city', 'Invalid city');
        error = true;
    }

    //Validate the zip using a regular expression:
    if (/^^\d{5}(-\d{4})?$$/i.test(zip.value)) {
        removeErrorMessage('zip');
    }
    else {
        addErrorMessage('lastName', 'Invalid zip');
        error = true;
    }

    //Prevent form from resubmitting
    if (error) {
        if (e.preventDefault) {
            e.preventDefault();
        }
        else {
            e.returnValue = false;
        }
    }

    return false;

} // End of validateForm() function.

// Function called when the terms checkbox changes.
// Function enables and disables the submit button.
function toggleSubmit() {
	'use strict';
    
} // End of toggleSubmit() function.

// Establish functionality on window load:
window.onload = function() {
    'use strict';

    U.addEvent(
        //Takes 3 arguments:
        //1. What object is calling the event?
        //2. What is the event?
        //3. What is the handler (function)?
        U.$('theForm'),
        'submit',
        validateForm);

};