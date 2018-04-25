var code = new Array("a", "b", "c", "d", "e", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");
var Meca = window.prompt("show me what you got ? ","");
var ThatEntry = Math.round((code.length*54)/48-7+(45*3));
var yourEntry ;
var	i = 0;
for(i = 0 ; i < code.length ; i++){
	ThatEntry += i;
}

if(Meca != ThatEntry) {
	alert("Erreur !!");
	window.location.href="https://github.com/44a6z22/44a6z22.github.io/blob/new/README.org";
} else {
	
}
	
