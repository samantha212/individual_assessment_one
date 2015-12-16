// Declaring variables.

var clickCount = 0;


// Functionality

// Event listeners that run when the page is ready: 
$(document).ready(function() {
	$('.container').on('click', '.generate', addToDOM);

	$('.container').on('click', '.delete', deleteRow);

	$('.container').on('click', '.change', changeColor);
});

//Append required info to the DOM.
//Keeps track of clicks, appends a DIV, two buttons, and a p tag with the # of clicks. 
function addToDOM() {
	clickCount++;

	var $el = $(this).parent();

	$el.append('<div class=\'created\'></div>');

	var $createdEl = $(this).parent().children().last();

	$createdEl.append('<button class=\'delete\'>Delete</button>');

	$createdEl.append('<button class=\'change\'>Change</button>');

	$createdEl.append('<p class=\'count\'>You have clicked ' + clickCount + ' time(s).</button>');
}

//Deletes the div to which the delete button belongs.
function deleteRow() {
	var $el = $(this).parent();

	$el.remove();
}

//Toggles the background color by adding a class that is listed lower on the CSS stylesheet than the default class.
function changeColor() {
	var $el = $(this).parent()

	$el.toggleClass('new-background');
}








