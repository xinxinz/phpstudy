<?php
require_once __DIR__ . '/common/function.php';
if(strtoupper($_SERVER['REQUEST_METHOD']) == 'GET'){
    $request_url = trim(strtok($_SERVER['REQUEST_URI'], '?'), '/');
    unset($_GET[$request_url]);
}else{
    $request_url = trim($_SERVER['REQUEST_URI'], '/');
}
list($controller, $method) = explode('/', $request_url);
//controller method 校验
if(empty($controller)){
    $controller = 'Index';
    $method = 'index';
}

try {
    echo (C($controller, $method));
} catch (\Exception $e) {
    echo '<h1>' . $e->getMessage() . '</h1>';
    echo '<h3>' . '#' . $e->getCode() . ' ' . $e->getFile() .'('. $e->getLine() . ')' . '</h3>';
    echo '<h3>' . $e->getTraceAsString() . '</h3>';

}

