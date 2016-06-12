<?php
    function C($controller, $method){

        $controller = ucfirst(strtolower($controller))  . G('C_SUFFIX');
        if(!file_exists(G('C_PATH') . $controller . G('CLASS_SUFFIX'))){
            throw new Exception('无法加载控制器:' . $controller);
        }else{
            require_once G('C_PATH') . $controller . G('CLASS_SUFFIX');
        }
        $methods = get_class_methods($controller);
        if(!in_array($method, $methods)){
            throw new Exception('非法操作:' . $method);
        }
        $obj = new $controller();
        return $obj->$method();
    }

    function M($model){
        $model = ucfirst(strtolower($model)) . G('M_SUFFIX');
        require_once G('M_PATH') . $model . G('CLASS_SUFFIX');
        $obj = new $model;
        return $obj;
    }

    function V($view){
        $view = ucfirst(strtolower($view)) . G('V_SUFFIX');
        require_once G('M_PATH') . $view . G('SUFFIX');
        $obj = new $view;
        return $obj;
    }

    function G($key){
        global $config;
        $file = require_once __DIR__ . '/config.php';
        $config = is_array($file) ? $file : $config;
        return isset($config[$key]) ? $config[$key] : '';

    }

?>