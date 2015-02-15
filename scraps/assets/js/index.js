// $('#menu-toggle').click(function(e) {
//     e.preventDefault();
//     $('#wrapper').toggleClass("toggled");
// });

document.querySelector('#menu-toggle').onclick = function() {
	if(document.querySelector('#wrapper').classList.contains('toggled')){
		document.querySelector('#wrapper').classList.remove('toggled');
	}
	else {
		document.querySelector('#wrapper').classList.add('toggled');
	}
}

// document.onclick = function() {
// 	window.alert("test 2");
// }