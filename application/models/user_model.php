<?php

class User_model extends Crud_Model
{
    protected $_table = 'user';
    protected $_primary_key = 'user_id';
    
    public function __construct() 
    {
        parent::__construct();
    }
    /**
     * @usage
     * Single: $this->user_model->get(2);
     * All: $this->user_model->get();
     */
    
}