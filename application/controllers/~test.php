<?php

class Test extends CI_Controller
{
    public function __construct() 
    {
        parent::__construct();
        $this->load->model('user_model');
//        $result = $this->user_model->get();
//        
//        $result = $this->user_model->insert(['login' => 'Markus']);
//        $result = $this->user_model->delete(array(
//            'login' => 'Markus'
//        ));
        
//        $result = $this->user_model->update(
//                array('password' => 'piggy', 'login' =>'ted'),1);   
        $result = $this->user_model->insertUpdate([
            'login' => 'yah'
        ],1);
        echo '<pre>';
        print_r($result);

    }
    public function index()
    {
        $this->output->enable_profiler(true);
    }
    
    
    public function test_get()
    {
        $data = $this->user_model->get(1);
        print_r($data);
        
//        $this->output->enable_profiler(true);
    }
    public function test_insert()
    {
        $result = $this->user_model->insert([
            'Login' => 'Jetro'
        ]);
        print_r($result);
        
    }
    public function test_update()
    {
        $result = $this->user_model->update([
            'login' => 'Peggy'
        ],  2);
        print_r($result);
    }
    public function test_delete()
    {
        $result = $this->user_model->delete(6);
        print_r($result);
    }
}