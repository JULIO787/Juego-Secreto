
let numeroSecreto = 0;
let intentos =0;
let listaNumeroSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);

function asignarTextoElemento(elemento,texto){
    let titulo =document.querySelector(elemento);
    titulo.innerHTML = texto;
    return;
    
}
function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if(numeroDeUsuario===numeroSecreto){
        asignarTextoElemento('p',`acertaste el numero en ${intentos} ${(intentos ===1)?'vez':'veces'}`);
   document.getElementById('reiniciar').removeAttribute('disabled');
   
    }
    else{
        //El usuario no acerto
        if(numeroDeUsuario>numeroSecreto){

        asignarTextoElemento('p','el numero secreto es menor');
        }
        else{
            asignarTextoElemento('p','el numero secreto es mayor');
        }
        intentos++;
        limipiarCaja();
        
    }
    return;
}

function limipiarCaja(){
    document.querySelector('#valorUsuario').value ='';
    
}

function generarNumeroSecreto() {
let numeroGenerado= Math.floor(Math.random()*numeroMaximo)+1;
console.log(numeroGenerado);
console.log(listaNumeroSorteados);
//si ya sorteamos todos los numeros
 if(listaNumeroSorteados.length== numeroMaximo){
   asignarTextoElemento('p','Ya se sortearon todos los numeros posibles'); 
} else{

//si el numero generado esta incluido en la lista, hacemos la operacon sino hacemos otra
 if(listaNumeroSorteados.includes(numeroGenerado)){
return generarNumeroSecreto();

  }else{
    listaNumeroSorteados.push(numeroGenerado);
    return(numeroGenerado);
  }
 }
}
function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del numero secreto!');
    asignarTextoElemento('p',`Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    limipiarCaja();
}

function reiniciarJuego(){
    //limpiar la caja
    //Indicar mensaje de intervalo de numero
    //Generar el numero aleatorio
    //Inicializar el numero de intentos
    condicionesIniciales();
    //Deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
    
} 

condicionesIniciales();





