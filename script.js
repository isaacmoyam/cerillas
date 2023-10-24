
let fichero = 'd1.txt'

fetch(fichero)	
		.then(respuesta => respuesta.text())	
		.then(cerillas)		

function cerillas(entrada){
	//sacamos las entradas
	let casos = entrada.split("\r\n");
	
	let temporal;
	let n1=0;
	let n2=0;
	let resultado=0;
	let salidas=[];
	let palostotales=0;
	let compartidos=0;
	let dif=0;
	//parseamos los componentes del array
	for(let i=0;i<casos.length;i++){
		temporal=casos[i].split(" ");
		for(let j=0;j<2;j++){
			temporal[j]=+temporal[j];
		}
		n1=temporal[0];
		n2=temporal[1];
		if(n1==1&&n2==1){
			compartidos=0;
			resultado=4;
			salidas.push(resultado);
		}else{
			palostotales=(n1*n2)*4;
			if(n1>n2||n2>n1){
				dif=n1-n2
				if(dif<0){
						dif=dif*-1;
				}
				compartidos=n1*(n1-1)+n2*(n2-1)-dif;
			}else{
				compartidos=n1*(n1-1)+n2*(n2-1);
			}
			console.log(palostotales)
			console.log(compartidos)
			console.log("\n")
			resultado=palostotales-compartidos;
			salidas.push(resultado);
		}
	}
	console.log(casos)
	console.log(salidas)
}

