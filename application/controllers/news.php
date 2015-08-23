<?php

class News extends CI_Controller
{
    public function __construct() 
    {
        parent::__construct();
        $user_id = $this->session->userdata('user_id');
        if (!$user_id){
            $this->logout();
        }
        
    }
    
    // ---------------------------------------------------------

    public function index()
    {
        $this->load->view('news/inc/header_view');
        $this->load->view('news/news_view');
        $this->load->view('news/inc/footer_view');
    }
    
    // ---------------------------------------------------------
    
    public function logout()
    {
        $this->session->sess_destroy();
        //session_destroy();
        redirect('/');
    }
}

