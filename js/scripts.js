$(document).ready(function(){
	console.log("dom is loaded");
});

//skrótowy zapis

$(function()
{console.log('DOM loaded');
});

$("p").css('color', 'red'); //changes all paragraph's text into red

$(function(){
	var paragraphs = $('p').css('color', 'red'); 
	var rawFirstParagraph = paragraphs[0]; //"raw DOM element without Jquery wrapper
	console.log(rawFirstParagraph);
	var jqFirstParagraph = paragraphs.eq(0);
	console.log(jqFirstParagraph);
	jqFirstParagraph.css('color', 'blue');
});

$(function(){
	var p=$( '<p></p>' ), //Adds new paragraph - stays in memory
		pWithText = $( '<p>Hi! I\'am a new paragraph</p>' ), //Adds new paragraph with text - stays in memory
		pWithClass = $('<p class="greeting">Hi! I\'am a new paragraph</p>');
	console.log(p);
	console.log(pWithText);
	console.log(pWithClass);
	
	$("body").append(pWithText);//adds created paragraph to DOM
	$("body").append(pWithClass);//adds created paragraph to DOM
	
});


$(function(){

	$('p').each(function( index, elem ) {
		$(elem).text('paragraph' + index);
	});
});

$(function(){

	$('p').each(function( index, elem ) {
		$(elem).text('paragraph' + index);
	}).css('color', 'pink');
});