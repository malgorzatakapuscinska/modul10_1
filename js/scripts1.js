
var span = $("span"); //wybera wszystkie elementy span na stronie
	span.each(function(index, element) {
		if(index % 2 == 0){//sparwdzamy czy element jest parzysty
			$(element).css('color', 'red');
		}
	});
	
// można też: $("span:even").css('color', 'red');
	
// dodanie do każdego paragrafu przycisku o klasie btn oraz atrybucie data-tmp=index
	
var paragraphs = $('p');
	console.log(paragraphs);
	paragraphs.each(function(index, element){
		var button = '<button class="btn" data-tmp="' + index + '">Click me</button>';
		$(element).append(button);
		
	});
	
$("button").click(function(){
		alert($(this).attr("data-tmp"));
});

// this - referencja do obiektu, który wywołał daną funkcję.
//===========================================

/*var obj = {}; // deklaracja obiektu
obj.someProperty = 'someValue';
obj.doSomething = function() {
  alert(this.someProperty); // odwołanie do właściwości wewnątrz obiektu
};

obj.doSomething(); // wywołanie metody

$("p").css('color', 'yellow');
$("p").append("coś dodanego");*/

