var list_color = document.getElementsByClassName("all_colors");
var change_body = document.getElementById("body");

for(var i = 0; i < list_color.length; i++){
	list_color[i].addEventListener("click", function(event){
		change_body.style.backgroundColor = event.target.innerHTML;
	});
}