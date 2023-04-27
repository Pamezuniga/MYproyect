<?php
header('Access-Control-Allow-Origin: *'); 
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept"); 
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header('content-type: aplication/json; charset-utf-8');

if(isset ($_GET['ruta'])) 
{
    $servidor = 'mysql:host=localhost;dbname=datos';
    $usuario = 'root';
    $contraseña = '';
    $tabla= explode("/",$_GET['ruta']);
    
    $pdo = new PDO($servidor, $usuario, $contraseña);

    $sql = "SELECT * FROM ".$tabla[0];
    $stmt = $pdo->query($sql);
    $resultados = $stmt->fetchAll(PDO::FETCH_ASSOC);
    

}
else
$resultados=array();


echo json_encode($resultados);