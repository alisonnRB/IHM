<?php

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Headers: *');

function resposta($codigo, $ok, $infos) {
    http_response_code($codigo);

    $response = [
        'ok' => $ok,
        'infos' => $infos,
    ];

    echo(json_encode($response));
    die;
}
//! verificar id
function quaisGeneros($body) {
    try {
        $conexao = new PDO("mysql:host=localhost;dbname=ihm", "root", "");

        $stmt = $conexao->prepare("SELECT id, nome, imagem, genero, texto, sinopse, classificacao, publico, finalizado, tema FROM livro_publi WHERE id = :id ");
        $stmt->execute([':id' => $body->idLivro]);
        $stmt = $stmt->fetch(PDO::FETCH_ASSOC);

        resposta(200, true, $stmt);
    } catch (Exception $e) {
        resposta(500, false, ['...']);
    }
}

$body = file_get_contents('php://input');
$body = json_decode($body);
    if(!isset($body->idLivro) || empty($body->idLivro)){
        resposta(200, false, ['...']);
    }
quaisGeneros($body);
?>