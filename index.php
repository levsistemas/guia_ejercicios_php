<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Guia de Ejercicios en PHP</title>
</head>
<body>
    <?php
        //include 'calculo.php';
        echo '<h1>Consignas:</h1>';
        echo '<h2>1. Realizar una función, a la que se le pase como parámetro un número N, y muestre por consola N veces, el siguiente mensaje: “Bienvenidos al curso Full Stack”</h2>';
        echo '<br><h2>2. Diseñar una función que tenga como parámetros dos números, y que calcule el máximo.</h2>';
        echo '<br><h2>3. Crear una función que se llame promedio3, que reciba como parámetro tres valores y devuelva el promedio de los mismos.</h2>';
        echo '<br><h2>4. Crear una función que lea notas hasta que ingrese -1 y devuelve el promedio de las notas leídas.</h2>';
        echo '<br><h2>5. Una función que se llame doble, que reciba como parámetro un valor, y devuelva el doble del número ingresado como parámetro.</h2>';
        echo '<br><h2>6. Una función que se llame cuadrado, que reciba como parámetro un valor, y devuelva el valor del número ingresado como parámetro elevado al cuadrado.</h2>';
        echo '<br><h2>7. Una función que se denomine imprimirValores que dado un número por parámetro, imprima cual es el valor siguiente, el doble y el cuadrado.</h2>';
        echo '<br><h2>8. Una función que dado la longitud de un lado de un cuadrado devuelva el perímetro</h2>';
        echo '<br><h2>9. Una función que dado la longitud de un lado de un cuadrado devuelva la superficie.</h2>';
        echo '<br><h2>10. Una función que dado el radio de un círculo devuelva la circunferencia (perímetro del círculo).</h2>';
        echo '<br><h2>11. Una función que dado el radio de un círculo devuelva el área del círculo.</h2>';
        echo '<br><h2>12. Una función que dado un número de mes y me devuelva la cantidad de días de ese mes (suponiendo que no es un año bisiesto).</h2>';

        echo '<div>';
        echo '<hr>';
        echo '<hr>';
        echo 'Ejercicio 1:<br><br>';
        echo '<input type="number" id="numero" name="numero" placeholder="Ingrese un numero a su gusto" style="width:250px;">';
        echo '<input type="button" id="boton" value="Calcular" style="margin-left:5px">';
        echo '<hr>';
        echo '</div>';

        echo '<div>';
        echo '<hr>';
        echo '<br>Ejercicio 2:<br><br>';
        echo '<input type="number" id="ej2a" placeholder="Ingrese un primer valor" style="width:200px;">';
        echo '<input type="number" id="ej2b" placeholder="Ingrese un segundo valor" style="width:200px;margin-left:5px">';
        echo '<input type="button" id="boton1" value="Calcular" style="margin-left:5px">';
        echo '<hr>';
        echo '</div>';
        
        echo '<div>';
        echo '<hr>';
        echo '<br>Ejercicio 3:<br><br>';
        echo '<input type="number" id="valor1" placeholder="Ingrese un primer valor" style="width:200px;">';
        echo '<input type="number" id="valor2" placeholder="Ingrese un segundo valor" style="width:200px;margin-left:5px">';
        echo '<input type="number" id="valor3" placeholder="Ingrese un tercer valor" style="width:200px;margin-left:5px">';
        echo '<input type="button" id="boton2" value="Calcular" style="margin-left:5px">';
        echo '<hr>';
        echo '</div>';

        echo '<div>';
        echo '<hr>';
        echo '<br>Ejercicio 4:<br><br>';
        echo '<input type="button" id="boton3" value="Ejecutar ejercicio 4" style="margin-left:0px">';
        echo '<hr>';
        echo '</div>';
        
        echo '<div>';
        echo '<hr>';
        echo '<br>Ejercicio 5:<br><br>';
        echo '<input type="button" id="boton4" value="Ejecutar ejercicio 5" style="margin-left:0px">';
        echo '<hr>';
        echo '</div>';

        echo '<div>';
        echo '<hr>';
        echo '<br>Ejercicio 6:<br><br>';
        echo '<input type="button" id="boton5" value="Ejecutar ejercicio 6" style="margin-left:0px">';
        echo '<hr>';
        echo '</div>';
        
        echo '<div>';
        echo '<hr>';
        echo '<br>Ejercicio 7:<br><br>';
        echo '<input type="button" id="boton6" value="Ejecutar ejercicio 7" style="margin-left:0px">';
        echo '<hr>';
        echo '</div>';

        echo '<div>';
        echo '<hr>';
        echo '<br>Ejercicio 8:<br><br>';
        echo '<input type="button" id="boton7" value="Ejecutar ejercicio 8" style="margin-left:0px">';
        echo '<hr>';
        echo '</div>';

        echo '<div>';
        echo '<hr>';
        echo '<br>Ejercicio 9:<br><br>';
        echo '<input type="button" id="boton8" value="Ejecutar ejercicio 9" style="margin-left:0px">';
        echo '<hr>';
        echo '</div>';

        echo '<div>';
        echo '<hr>';
        echo '<br>Ejercicio 10:<br><br>';
        echo '<input type="button" id="boton9" value="Ejecutar ejercicio 10" style="margin-left:0px">';
        echo '<hr>';
        echo '</div>';

        echo '<div>';
        echo '<hr>';
        echo '<br>Ejercicio 11:<br><br>';
        echo '<input type="button" id="boton10" value="Ejecutar ejercicio 11" style="margin-left:0px">';
        echo '<hr>';
        echo '</div>';
        ?>
    <script src="funciones.js"></script>
</body>
</html>