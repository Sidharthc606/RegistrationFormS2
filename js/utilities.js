// Script 8.1 - utilities.js
// This script defines an object that has some utilitarian functions.

var U = {
    //Think of an object as a multipart or
    //complex variable
    //It can contain multiple pieces, elements
    $: function(id) {
        //get the document element for id
        if (typeof id == 'string') {
            return document.getElementById(id);
        }
    },  //end $

    addEvent: function(obj, type, fn) {
        //Function for creating event listeners
        if (obj && obj.addEventListener) {
            obj.addEventListener(type, fn, false);
        }
        else if (obj && obj.attachEvent) {
            //Older, IE browsers
            obj.attachEvent('on' + type, fn);
        }
    } //end addEvent
};