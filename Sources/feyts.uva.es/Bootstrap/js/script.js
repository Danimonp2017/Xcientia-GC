var currentLetter = ""

$(document).ready(function () {
	updateLetter("a");
	currentLetter="#a";
	$("#a").addClass(" active");
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
	$("#content").load("Sources/feyts.uva.es/pages/"+letter+".html");
};

function copyToClipboard(element) {
	var $temp = $("<input>");
	$("body").append($temp);
	$temp.val($(element).text()).select();
	document.execCommand("copy");
	$temp.remove();
};

$(function () {
	$('[data-toggle="popover"]').popover();
})