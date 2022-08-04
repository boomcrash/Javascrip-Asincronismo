function suma(a,b){
    return a+b;
}

function calcular(num1,num2,callback){
    return callback(num1,num2);
}

console.log(calcular(1,2,suma));


setTimeout(function(){
    console.log(calcular(1,2,suma));
},5000)

function saludo(nombre){
    console.log("HOLA "+nombre);
}

setTimeout(saludo,2000,"Carlos");