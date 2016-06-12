<?php

class StarController
{
    public function clist(){
        $id = $_GET['id'];
        echo $id;
    }
    public function add(){
        echo __FUNCTION__;
    }
    public function edit(){
        echo __FUNCTION__;
    }
    function test(){
        echo __FUNCTION__;
    }
    protected function prod(){
        echo __FUNCTION__;
    }
    private function ziji(){
        echo __FUNCTION__;
    }
}