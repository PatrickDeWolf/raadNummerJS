<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $json = file_get_contents('php://input');
    $data = json_decode($json, true);

    if (isset($data['secretNumber'])) {
        file_put_contents('getal.json', json_encode($data, JSON_PRETTY_PRINT));
        echo json_encode(["status" => "success"]);
    } else {
        echo json_encode(["status" => "error", "message" => "Geen geldig nummer"]);
    }
}
?>
