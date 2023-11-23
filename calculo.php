<?
$numero=0
function numeroFavoritoARepetir($numero){
    for($i = 1; $i <= $numero; $i++) {
        echo '<h3>"Bienvenidos al curso Full Sack"</h3>';
        echo '<h3>"Mensaje numero: "'. + $i.'</h3>';
    }
}
numeroFavoritoARepetir($numero);
?>