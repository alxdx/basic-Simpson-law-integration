
    	

function trapecio(){

	var n=document.getElementById("n").value; // numero de divisiones
 	var a=document.getElementById("a").value;
 	var b=document.getElementById("b").value;

 		if (n%2 != 0){
 			n++;
 			document.getElementById("n").value=n
 		}
		
		var h=(b-a)/n;
		
		var suma=0.0;
		
		var aux1=0.0;
		var aux2=0.0;
		
		for(var i=1;i<n;i++){
			aux1=a+(i-1)*h;
			aux2=a+(i)*h;
			suma+=h/2*(f(aux1)+f(aux2));
		}

		document.getElementById("resT").value=suma;
		simpson();
}
			

	function simpson(){
	
 	var n=document.getElementById("n").value; // numero de divisiones
	// extremos del intervalo
 	var a=document.getElementById("a").value;
		
 	var b=document.getElementById("b").value;

		var h=(b-a)/n; // tamanio de cada subintervalo
	// primer sumando
 		var suma=f(a)+f(b);
	// segundo sumando: impares
 		for(var i=1; i<n; i+=2)
			suma+=4*f(a+i*h);
 	// tercer sumando: pares
		 for(var i=2; i<n; i+=2)
			suma+=2*f(a+i*h);
 	// mostramos el resultado final
 	var res=suma*(h/3);
 	document.getElementById("resS").value=res ;
	}

	// funcion a integrar: 
	 function f(x){
		var c=(1/(Math.sqrt(2*Math.PI)));
		return c*(Math.pow(Math.E,-(Math.pow(x,2)/2)));
	}





