<?php

class Note_model extends Crud_Model
{
    protected $_table = 'note';
    protected $_primary_key = 'note_id';
    
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