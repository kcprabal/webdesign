var Template = function() {
    
    this.__construct = function() {
    };

    
    this.todo = function(obj)
    {
        var output = '';   
        if(obj.completed == 1) 
        {
            output += '<div id="todo_'+ obj.todo_id +'" class="todo_complete">';
        }
        else
        {
            output += '<div id="todo_'+ obj.todo_id +'">';
        }
        
        output += '<span>'+obj.content+'</span>';

        output += '<span class="options">';
        var data_completed = (obj.completed ==1) ? 0 :1;
        var data_completed_text = (obj.completed ==1) ? '<i class="icon-share-alt"></i>' :'<i class="icon-ok"></i>';
        output += '<a class="todo_update" data-id="'+obj.todo_id+'" data-completed="'+data_completed+'" href="api/update_todo">'+data_completed_text+'</a>';
        
        output += '<a data-id="'+obj.todo_id +'"class="todo_delete" href="api/delete_todo"><i class="icon-remove"></i></a>';
        output += '</span>';
        output += '</div>';
        return output;
    };
    
    
    this.note = function(obj)
    {
        var output = '';
        output += '<div id="note_'+ obj.note_id +'">';
        output += '<span><a class="note_toggle" data-id="'+obj.note_id+'" id="note_title_'+ obj.note_id +'" href="#">'+obj.title+'</a></span> ';
        output += '<span class="options">';
        output += '<a class="note_update_display" data-id="'+obj.note_id+'" href="api/update_note_display"><i class=" icon-pencil"></i></a>';
        output += '<a data-id="'+obj.note_id +'"class="note_delete" href="api/delete_note"><i class="icon-remove"></i></a>';
        output += '</span>';
        output += '<div class="note-edit-container" id="note-edit-container_'+obj.note_id+'"></div>';
        output += '<div class="note_content hide" id="note_content_'+obj.note_id+'">'+obj.content+'</div>';
        output += '</div>';
        return output;
    };
    
    this.note_edit = function(note_id)
    {
        var output = '';

        output += '<form method="post" class="note_edit_form form-horizontal" action="api/update_note">';
        output += '<input class="note_id" type ="hidden" name="note_id" value="'+note_id+'"/>';        
        output += '<div class="input-append"> ';                      
        output += '<input tabindex="1" type="text" class="title"  name="title" placeholder="note Title">';
        output += '<input tabindex="3" type="submit" class="btn btn-success" value="Update" >';
        output += '<input type="submit" class="note_edit_cancel btn" value="Cancel" />';
        output += '</div>';
        output += '<div class="clearfix"></div>'; 
        output += '<textarea tabindex="2" class="content" name="content" class="form-control" rows="2" id="content"></textarea>';
        output += '</form>';
        return output;
    };    
    this.__construct();
    
    
};