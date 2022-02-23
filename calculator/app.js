
var mateBasica = require('./mate')

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

readline.question('escribe la operacion (+ - * / %) por ejemplo 14+5: ', operacion => {
    const op = operacion.split(/([+-/*%])/g)
    if(op[1] == '+'){
        console.log(`Resultado de la suma es: ${mateBasica.suma(parseInt(op[0]), parseInt(op[2]))}`)
    }else if(op[1] == '-'){
        console.log(`Resultado de la resta es: ${mateBasica.resta(parseInt(op[0]), parseInt(op[2]))}`)
    }else if(op[1] == '*'){
        console.log(`Resultado del producto es: ${mateBasica.producto(parseInt(op[0]), parseInt(op[2]))}`)
    }else if(op[1] == '/'){
        console.log(`Resultado de la division es: ${mateBasica.division(parseInt(op[0]), parseInt(op[2]))}`)
    }else if(op[1] == '%'){
        console.log(`Resultado del modulo es: ${mateBasica.modulo(parseInt(op[0]), parseInt(op[2]))}`)
    }else{
        console.log("operador invalido")
    }
    
    readline.close();
  });



