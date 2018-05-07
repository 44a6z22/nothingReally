/**
 * [takes the numbers and turn them into stars or takes them stars and turn them to numbers ]
 * @param  {[string]} bool [2 values : "button value" tell the function what to do ]
 */
function change(bool){	 	
		var elament = document.getElementById('rip');
		var btn = document.getElementById('btn');
		var value = elament.innerHTML;
		var three = "" ;	
		if( bool == "hide" ){
			for(var i = 0 ; i < 5 ; i++){
				 three += value[i];
			}
			for(var i = 7 ; i < value.length ; i++){
				 three += "*";
			}
			btn.innerHTML = "show";
			elament.innerHTML = three;
		}else{
			btn.innerHTML = "hide";
			document.getElementById('rip').innerHTML = document.getElementById('ripo').innerHTML ;
		}	
}
	/**
	 * [just a wast of time :D]
	 */
function onStartup(){	
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
		window.location.href="https://github.com/44a6z22/44a6z22.github.io/blob/master/README.org";
	} else {
		
	}
}
