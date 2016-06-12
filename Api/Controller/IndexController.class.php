<?php
use Small\DB;

class IndexController
{
    public function index(){
        echo '<h1>Welcome</h1>';
        $db = new Small\db();
        $db->mysql->query();
    }
}