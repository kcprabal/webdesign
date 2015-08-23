<?php

class Todo_model extends Crud_Model
{
    protected $_table = 'todo';
    protected $_primary_key = 'todo_id';
    
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