
document.getElementById('boton').addEventListener('click', () => {
    numero=0
    function numeroFavoritoARepetir(numero){
        numero=Number(document.getElementById('numero').value)
        for (let i = 1; i <= numero; i++) {
            console.log('"Bienvenidos al curso Full Sack"')
            console.log("Mensaje numero: " + i)
        }
    }
    numeroFavoritoARepetir(numero)
})
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

document.getElementById('boton1').addEventListener('click', () => {
    numero1=0
    numero2=0
    function dosNumeros(numero1,numero2){
        numero1=document.getElementById('ej2a').value
        numero2=document.getElementById('ej2b').value
        if(numero1<numero2){
            console.log('Segundo valor es mayor: ' + numero2)
        } else {
            console.log('Primer valor es mayor: ' + numero1)
        }
    }
    dosNumeros(numero1,numero2)
})
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
document.getElementById('boton2').addEventListener('click', () => {
    argumento1=0
    argumento2=0
    argumento3=0
    
    function promedio3(argumento1,argumento2,argumento3){
        argumento1=document.getElementById('valor1').value
        argumento2=document.getElementById('valor2').value
        argumento3=document.getElementById('valor3').value
        promedio=(Number(argumento1)+Number(argumento2)+Number(argumento3))/3
        console.log('El promedio de la suma entre (' + argumento1 +','+argumento2+','+argumento3+') es de= ' + promedio)
    }
    
    promedio3(argumento1,argumento2,argumento3)
})
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
document.getElementById('boton3').addEventListener('click', () => {
    numero=0
    promedio=0
    arregloNumeros=[]
    numerosAleatorios()
    function numerosAleatorios(){
        numero=parseInt(prompt('Ingrese un numero a su gusto:' + "\n" + 'ingrese "-1" (menos 1) para salir'))
        if(numero==-1){
            arregloNumeros.forEach(number => {
                promedio=promedio+number
            });
            console.log('Cantidad de numeros ingresados: ' + arregloNumeros.length)
            promedio=promedio/arregloNumeros.length
            console.log('El promedio de las notas es de: ' + promedio)
            return
        } else {
            if(numero==0 || numero<-1){
                console.log('Numero elegido..."' + numero + '"...debes ingresar un numero positivo y mayor a cero.')
                numerosAleatorios()
            } else {
                console.log('Numero elegido: ' + numero)
                arregloNumeros.push(numero)
                numerosAleatorios()
            }
        }
    }
})