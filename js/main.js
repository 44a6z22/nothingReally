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
	
