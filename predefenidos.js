//TAREA NUMERO 1*****************************************************
var result1 = document.getElementById('result1');
result1.style="color:red; font-size:1.5rem";
document.getElementById('bValidar').onclick = function(ev) {
    var numIntroducido = document.getElementById('numCapicua').value;
    var numInicial = numIntroducido;
    var numArrevers = numIntroducido.split('').reverse().join('');
    if (numInicial==numArrevers) result1.innerHTML='El numero es capicua';
    else result1.innerHTML='No es capicua';
};

//TAREA NUMERO 2*****************************************************
var arrays = [];
document.getElementById('bBuscar').onclick = function(ev) {
    var result2 = document.getElementById('result2');
    var frase = String(document.getElementById('frase').value).replace(/[^a-zа-яё\s|-]/gi, '').replace(/\r?\n/g, " ").toLowerCase().trim().split(' ').sort();
    var cantidadPalabr=[];
    var listaPalabr=[];
    result2.innerHTML='';
    
    for (let i=0;i<frase.length;i++){

        palabrasIguales = frase.filter(buscarPalabra=>buscarPalabra==frase[i]);
        cantidadPalabr.push(palabrasIguales.length);
        if (listaPalabr.includes(frase[i])==false){
            listaPalabr.push(frase[i]);
            result2.innerHTML+=frase[i]+': '+cantidadPalabr[i]+'<br>';
        }
    }
};

//TAREA NUMERO 3*****************************************************

// creamos un numero que no se repite 
var numRandom=Math.round(Math.random()*300)+1;  
var arrNumNoRepit=[];
    do{
        numRandom=Math.round(Math.random()*300)+1;
        if(numRandom!=arrNumNoRepit.filter(numIguales=>numIguales==numRandom) )
            arrNumNoRepit.push(numRandom);
    }
    while(arrNumNoRepit.length<=200)
// ***************************************************


var result3 = document.getElementById('result3');
window.onload = function(ev) {
    var z=-1;
    var k;
    for(let i=1;i<=20;i++) {
        z++;
        result3.innerHTML += '<div class="numFila"><h1>'+i+'</h1></div> <br>';
        for(let j=1;j<=10;j++){
            k=10*z+j;
            result3.innerHTML += '<button data-style="background-color: white" data-id="'+arrNumNoRepit[k]+'">'+j+'</button>'
            let buttonAsientos = document.querySelector('button[data-id="'+arrNumNoRepit[k]+'"]');
             if(buttonAsientos.dataset.id<100){
                buttonAsientos.style="background-color: red";
                buttonAsientos.dataset.id="bPrueba";             
            }
        }
    }
};
/* document.addEventListener('DOMContentLoaded', _ => {
    document.getElementById('result3').addEventListener('click', e => {
      const v = e.target?.dataset?.id  // donde era un click
      if (v != 'bPrueba') return  // si el click no era hecho en el botton data-id="bPrueba"
      alert('este asiento ya esta ocupado')
    })
  }) */

  document.addEventListener('DOMContentLoaded', _ =>{
    document.getElementById('result3').addEventListener('click', e => {
        const v = e.target.dataset.id  // donde era un click
        if (v != 'bPrueba') {
            if(document.querySelector('button[data-id="'+v+'"]').dataset.style=="background-color: white"){ document.querySelector('button[data-id="'+v+'"]').style="background-color: green";
            document.querySelector('button[data-id="'+v+'"]').dataset.style="background-color: green"
        }
            else if (document.querySelector('button[data-id="'+v+'"]').dataset.style=="background-color: green") {
                document.querySelector('button[data-id="'+v+'"]').style="background-color: white";
            document.querySelector('button[data-id="'+v+'"]').dataset.style="background-color: white"}
            return
        }  // si el click no era hecho en el botton data-id="bPrueba"
      alert('este asiento ya esta ocupado')
    })
  })



//TAREA NUMERO 4*******************************************************************


//sacamos datos 
var nowData = new Date(),
    nowDataDay=nowData.getDate(),
    nowDataMonth=nowData.getMonth(),
    nowDataYear=nowData.getFullYear(),
    calendario=document.getElementById('calendario'),
    nombDiaSemana=document.getElementsByClassName('nombDiaSemana')[0],
    mesNomb=['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'],
    semNomb=['lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado','domingo' ],
    cantDiaMes=new Date(nowDataYear,nowDataMonth+1,0).getDate(),
    numDiaSemana;


    //Filter de getDay************************************* */
    if((nowData.getDay())==0) numDiaSemana=6;
        else numDiaSemana=(nowData.getDay())-1
    //******************************************* */




var prueba=document.getElementById('prueba');

prueba.innerHTML='Año actual: '+nowDataYear+'<br>';
prueba.innerHTML+='Mes actual: '+mesNomb[nowDataMonth]+'<br>';
prueba.innerHTML+='Cantidad de dias en el mes: '+new Date(nowDataYear,nowDataMonth+1,0).getDate()+'<br>';
prueba.innerHTML+='Dia actual: '+nowDataDay+'<br>';
prueba.innerHTML+='Dia de la semana actual: '+semNomb[numDiaSemana]+'<br>';
//prueba.innerHTML+='Dia de la semana actual: '+nowData.getDay()+'<br>';
prueba.innerHTML+='Primer dia del mes es: '+new Date(''+nowDataMonth+'/1/'+nowDataYear+'')+'<br>';
prueba.innerHTML+=':'+nowData.getDay();

var tabla=document.getElementById('calendario');

tabla.innerHTML='';
createTable(tabla,7,7);
function createTable(parent, numFilas, numcolumnas){
    var ta=document.createElement('table');
    for(let i=0;i<numFilas;i++){
        var tr=document.createElement('tr');
            for(let j=0;j<numcolumnas;j++){
                var td=document.createElement('td');
                tr.appendChild(td);
            };
        ta.appendChild(tr);
    };
    parent.appendChild(ta);  
};

var celdas=document.querySelectorAll('table td');

//RELLENAMOS  UUUUUUUUU *****************************************************************
for(let i=0;i<7;i++) celdas[i].textContent=semNomb[i];

for(let j=1;j<=cantDiaMes;j++){
    celdas[7+numDiaSemana+j].textContent=j;
};
/* for(let k=1;k<=celdas.length;k++){
    celdas[7+2+cantDiaMes+k].textContent=k;
    celdas[7+2+cantDiaMes+k].style="color: gray";
}; */


//rellenamos primeras celdas vacias con resto de mes pasado
for(let i=1;i<(7+numDiaSemana+1);i++){
    if(i==(7+numDiaSemana+1)) exit();
    celdas[6+i].textContent=i;
    celdas[6+i].style="color: gray";
};




/*  function createTable(parent,numcolumnas){
    var ta=document.createElement('table');
        var tr=document.createElement('tr');
            for(let i=0;i<numcolumnas;i++){
                var th=document.createElement('th');
                th.innerHTML=semNomb[i];
                tr.appendChild(th);
            };
        ta.appendChild(tr);
    parent.appendChild(ta);  
}; */




/* function daysInMonth (year, month) {
    return new Date(year, month, 0).getDate();
    } 
    prueba.innerHTML+=daysInMonth(2023,2)+'<br>';
*/





//TAREA NUMERO 5 NIE**************************************************************

document.getElementById('obtenerNum').onclick = function(ev) {

    var letraNIE = ((document.getElementById('letraNIE').value));
    var letraDNI = ((document.getElementById('letraDNI').value.toUpperCase()));
    var numDNI = Number(document.getElementById('numDNI').value);
    var letraObten = document.getElementById('letraObten');
    var error = document.getElementById('errorDNI');
    var result5 = document.getElementById('result5');


    var letras = ['T','R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'
    ];

    error.innerHTML = ''
    result5.innerHTML = ''

    if (numDNI>=10000000) {
        var i = numDNI - (parseInt((numDNI/23))*23)
        if(letras[i]==letraDNI)
        result5.innerHTML ='DNI: '+numDNI + letraDNI+' es correcto!';
            else result5.innerHTML ='DNI: '+numDNI + letraDNI+' es INcorrecto!';

    }
        else {

            if (letraNIE=='X' || letraNIE=='x') letraNIE=0
            else if (letraNIE=='Y' || letraNIE=='y') letraNIE=10000000
            else if (letraNIE=='Z' || letraNIE=='z') letraNIE=20000000
            else error.innerHTML = 'Hay que entroducir: X o x, Y o y, Z o z'

            var numNIE = numDNI + letraNIE;
            var i = numNIE - (parseInt((numNIE/23))*23)

            if (letraNIE==0) {
                letraNIE='X'
                if(letras[i]==letraDNI)
                    result5.innerHTML ='DNI: '+letraNIE+numDNI + letraDNI+' es correcto!';
                    else result5.innerHTML ='DNI: '+letraNIE+numDNI + letraDNI+' es INcorrecto!';
            }
            
                else if (letraNIE==10000000) {
                    letraNIE='Y';
                    if(letras[i]==letraDNI)
                    result5.innerHTML ='DNI: '+letraNIE+numDNI + letraDNI+' es correcto!';
                    else result5.innerHTML ='DNI: '+letraNIE+numDNI + letraDNI+' es INcorrecto!';
                }
                    else if (letraNIE==20000000) {
                        letraNIE='Z';
                        if(letras[i]==letraDNI)
                        result5.innerHTML ='DNI: '+letraNIE+numDNI + letraDNI+' es correcto!';
                        else result5.innerHTML ='DNI: '+letraNIE+numDNI + letraDNI+' es INcorrecto!';
                        }
        }
};



//TAREA NUMERO 2 de ejercicios-funciones**************************************************
document.getElementById('bCod').onclick=function(ev){
    var fraseCod=document.getElementById('fraseCodificar').value;
    var fraseCodArray=fraseCod.split('');
    var result6 = document.getElementById('result6');

    result6.innerHTM='';
    var arrayCode=[];
     for (let i=0;i<fraseCodArray.length;i++)
        arrayCode.push((fraseCodArray[i].charCodeAt(0)+1));
    result6.innerHTML=arrayCode;
};

document.getElementById('bDescod').onclick=function(ev){
    var fraseDiscod=document.getElementById('fraseDescodificar').value,
    result7 = document.getElementById('result7'),
    fraseDiscodArray=fraseDiscod.split(',');

    result7.innerHTML='';
    for (let i=0;i<fraseDiscodArray.length;i++)
        fraseDiscodArray[i]=Number(fraseDiscodArray[i])-1;
    for(let i=0;i<fraseDiscodArray.length;i++)
        result7.innerHTML+=String.fromCharCode(fraseDiscodArray[i]);


};


