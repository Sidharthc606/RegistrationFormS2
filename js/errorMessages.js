// Script 10.1 - errorMessages.js
// This script defines functions for adding and removing error messages.

// This function adds the error message.
// It takes two arguments: the form element ID and the message.
function addErrorMessage(id, msg) {
   	'use strict';

	//Get the element we want to add an
	//error message element to:
	var elem = U.$(id);

	//Define a new span for the message
	var newId = id + 'Error';
	//example: firstNameError

	//Get the error element (ie. span) IF it exists
	var span = U.$(newId);
	if (span) {
		//User provided bad info last time,
		//so span already exists
		//Just update it
		span.firstChild.value = msg;
	}
	else {
		//Span does NOT already exist, so add it
		span = document.createElement("span");
		span.id = newId;
		span.className = "error";
		span.appendChild (
			document.createTextNode(msg)
		);

		//Place the span AFTER the input
		elem.parentNode.appendChild(span);

		//elem.previousSibling.className = "error";
		//elem.parentNode.childNodes[1].className = 'error';


		var nodes = elem.parentNode.childNodes;
		for (var i = 0; i < nodes.length; i++)
		{
			if(nodes[i].innerHTML != "" &&
				nodes[i].id == "") {
				nodes[i].className = 'error';
			}
		}
	}
} // End of addErrorMessage() function.

// This function removes the error message.
// It takes one argument: the form element ID.
function removeErrorMessage(id) {
   	'use strict';

	var span = U.$(id + "Error");
	if (span) {
		//Only when the span already exists

		//Remove class definition from label
		//span.previousSibling.previousSibling
		//	.className = null;
		var nodes = span.parentNode.childNodes;
		for (var i = 0; i < nodes.length; i++)
		{
			if(nodes[i].innerHTML != "" && nodes[i].id == "") {
				nodes[i].className = null;
			}
		}

		//Get rid of the span completely
		span.parentNode.removeChild(span);
	}
} // End of removeErrorMessage() function.