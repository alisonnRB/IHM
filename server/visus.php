<?php
include "./conexão/conexao.php";
include "./resposta/resposta.php";

header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Methods: POST');


function visu($body){
    $conexao = conecta_bd();


    $stmt = $conexao->prepare('UPDATE livro_publi SET visus = visus + 1 WHERE id = ?');
    $stmt->execute([$body->id]);


    resposta(200, true);

}

$body = file_get_contents('php://input');
$body = json_decode($body);


visu($body);



?>