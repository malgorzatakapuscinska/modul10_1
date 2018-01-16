var span = $("span"); //wybera wszystkie elementy span na stronie
	span.each(function(index, element) {
		if(index % 2 == 0){//sparwdzamy czy element jest parzysty
			$(element).css('color', 'red');
		};
	});