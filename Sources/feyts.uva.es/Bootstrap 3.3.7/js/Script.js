var currentLetter = ""

$(document).ready(function () {
	updateLetter("a");
	currentLetter="#a";
});
$(document).on("click", ".letter", function() {
	var name="#"+this.id+"";
	updateLetter(this.id);
	$(name).addClass(" active");
	$(currentLetter).removeClass("active");
	return currentLetter=name;
});

var updateLetter = function (letter) {
	$("title").html("Glosario Científico - " + letter);
	$(".current-letter").html(letter.toUpperCase());
	$("#content").load("/Sources/feyts.uva.es/pages/"+letter+".html");
};
