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
            if(isNaN(promedio)==false){
                console.log('El promedio de las notas es de: ' + promedio)
            }
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
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
document.getElementById('boton4').addEventListener('click', () => {
    valordoble=0
    function funcionDoble(valordoble){
        valordoble=Number(prompt('Ingrese un número:'))
        if(isNaN(valordoble)){
            console.log('Valor NaN para la variable valordoble...' + valordoble)
            console.log(valordoble)
            funcionDoble(valordoble)
        } else {
            console.log('El número ingresado es: ' + '"' + valordoble + '"')
            valordoble=valordoble*2
            console.log('Su doble es: ' + valordoble)
        }
    }
    funcionDoble(valordoble)
})
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
document.getElementById('boton5').addEventListener('click', () => {
    cuadrado=0
    function funcionCuadrado(cuadrado){
        cuadrado=Number(prompt('Ingrese un número:'))
        if(isNaN(cuadrado)){
            console.log('Valor NaN para la variable cuadrado...' + cuadrado)
            console.log(cuadrado)
            funcionDoble(cuadrado)
        } else {
            console.log('El número ingresado es: ' + '"' + cuadrado + '"')
            cuadrado=cuadrado**2
            console.log('Su cuadrado es: ' + cuadrado)
        }
    }
    funcionCuadrado(cuadrado)
})
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
document.getElementById('boton6').addEventListener('click', () => {
    parametro=0
    function imprimirValores(parametro){
        parametro=Number(prompt('Ingresa un número:'))
        if(isNaN(parametro)){
            console.log('Valor NaN para la variable parametro...' + parametro)
            console.log(parametro)
            imprimirValores(parametro)
        } else {
            console.log('El numero elegido es el: ' + parametro)
            console.log('El numero siguiente es el: ' + (parametro+1))
            console.log('El doble es el: ' + parametro*2)
            console.log('El cuadrado es el: ' + parametro**2)
        }
    }
    imprimirValores(parametro)
})
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
document.getElementById('boton7').addEventListener('click', () => {
    longitud=0
    perimetro=0
    function imprimirPerimetroCuadrado(longitud){
        longitud=Number(prompt('Eliga un valor de longitud para informar su perimetro'))
        if(isNaN(longitud)){
            console.log('Valor NaN para la variable longitud...' + longitud)
            console.log(longitud)
            imprimirPerimetroCuadrado(longitud)
        } else {
            console.log('El valor elegido para su longitud es de: ' + longitud)
            perimetro=longitud*2
            perimetro=perimetro**2
            console.log('El perimetro para el cuadrado es de: ' + perimetro)
        }
    }
    imprimirPerimetroCuadrado(longitud)
})
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
document.getElementById('boton8').addEventListener('click', () => {
    superficie=0
    lado=0
    function imprimirSuperficieCuadrado(superficie){
        lado=Number(prompt('Eliga un número para la superficie'))
        if(isNaN(lado)){
            console.log('Valor NaN para la variable lado...' + lado)
            console.log(lado)
            imprimirSuperficieCuadrado(superficie)
        } else {
            superficie=lado*lado
            console.log('La longitud del lado es: ' + lado)
            console.log('La superficie del cuadrado es: ' + superficie)
        }
    }
    imprimirSuperficieCuadrado(superficie)
})
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
document.getElementById('boton9').addEventListener('click', () => {
    radio=0
    circunferencia=0
    diametro=0
    pi=3.14
    function imprimirCircunferencia(circunferencia){
        radio=Number(prompt('Ingrese un valor para el radio del circulo'))
        if(isNaN(radio)){
            console.log('el valor de radio es NaN ... ' + radio)
            console.log(radio)
            imprimirCircunferencia(circunferencia)
        } else {
            console.log('Se calcula el radio ' + radio + ' igual al centro hasta un extremo del circulo.')
            console.log('Se multiplica radio ' + radio + ' por dos para obtener el diametro.')
            diametro=radio*2
            console.log('El diametro equivale a: ' + diametro)
            circunferencia=pi*diametro
            console.log('la cincunferencia es igual a "PI" por diametro.')
            console.log('La circunferencia o perimetro del circulo es de: ' + circunferencia)
        }
    }
    imprimirCircunferencia(circunferencia)
})
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
document.getElementById('boton10').addEventListener('click', () => {
    radio=0
    area=0
    PI=3.14
    function imprimirAreaCirculo(area){
        radio=Number(prompt('Ingrese un valor para el radio del circulo'))
        if(isNaN(radio)){
            console.log('valor invalido para la variable radio ... ' + radio)
            console.log(radio)
        } else {
            area=PI*(radio**2)
            console.log('El valor para radio es de ' + radio + '.')
            console.log('La funcion para obtener el area es PI por radio al cuadrado.')
            console.log('El valor final para el area es de ' + area)
        }
    }
    imprimirAreaCirculo(area)
})