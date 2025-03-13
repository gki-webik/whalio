<?php
header("Content-Type: application/json");

echo json_encode([
    "message" => "Привет, мир!",
    "timestamp" => time()
]);