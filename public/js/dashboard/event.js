/* global Template */

var Event = function () {

    this.__construct = function () {
        Result = new Result();
        create_todo();
        create_note();
        update_todo();
        update_note();
        update_note_display();
        toggle_note();
        delete_todo();
        delete_note();


    };

    var create_todo = function ()
    {
        $("#create_todo").submit(function (evt) {
            evt.preventDefault();

            var url = $(this).attr('action');
            var postData = $(this).serialize();

            $.post(url, postData, function (o) {
                if (o.result == 1)
                {
                    Result.success('Todo list has been created');
                    var output = Template.todo(o.data);
                    $("#list_todo").append(output);
                    // clear the text field
                    $("#create_todo input[type=text]").val('');

                }
                else
                {
                    Result.error(o.error);
                }
            }, 'json');

        });
    };

    var create_note = function ()
    {
        $("#create_note").submit(function (evt) {
            evt.preventDefault();

            var url = $(this).attr('action');
            var postData = $(this).serialize();

            $.post(url, postData, function (o) {
                if (o.result == 1)
                {
                    Result.success('Note has been created');
                    var output = Template.note(o.data);
                    $("#list_note").append(output);
                    // clear the field
                    $("#create_note input[type=text]").val('');
                    $("#create_note textarea").val('');
                }
                else
                {
                    Result.error(o.error);
                }
            }, 'json');
        });
    };



    var update_todo = function ()
    {
        $("body").on('click', '.todo_update', function (evt) {
            evt.preventDefault();

            var self = $(this);
            var url = $(this).attr('href');
            var postData = {
                todo_id: $(this).attr('data-id'),
                completed: $(this).attr('data-completed')
            };
            $.post(url, postData, function (o) {
                if (o.result == 1)
                {
                    if (postData.completed == 1)
                    {
                        $('#todo_' + postData.todo_id).addClass('todo_complete');
                        self.html('<i class="icon-share-alt"></i>');
                        self.attr('data-completed', 0);
                    }
                    else
                    {
                        $('#todo_' + postData.todo_id).removeClass('todo_complete');
                        self.html('<i class="icon-ok"></i>');
                        self.attr('data-completed', 1);
                    }
                }
                else
                {
                    Result.error('Nothing updated');
                }
            }, 'json');
        });

    };
    var update_note = function ()
    {

        // display note content
        $("body").on('submit', '.note_edit_form', function (evt) {
            evt.preventDefault();
            
            var form = $(this);
            var url = $(this).attr('action');
            var postData = {
                note_id: $(this).find('.note_id').val(),
                title: $(this).find('.title').val(),
                content: $(this).find('.content').val()
            
            }
            
            $.post(url, postData, function(o) {
                if(o.result ==1)
                {
                    Result.success("Sucessfully updated note");
                    $("#note_title_"+ postData.note_id).html(postData.title);
                    $("#note_content_"+ postData.note_id).html(postData.content);
                    form.remove();
                }
                else
                {
                    Result.error("Error Saving");
                }
            },'json');
        });        

    }

    var update_note_display = function ()
    {

        $("body").on('click', '.note_update_display', function (evt) {
            evt.preventDefault();
            var note_id = $(this).data('id');
            var output = Template.note_edit(note_id);
            $("#note-edit-container_"+ note_id).html(output);
            
            // Display data after the Template is created
            var title = $("#note_title_"+ note_id).html();
            var content = $("#note_content_"+ note_id).html();
            $("#note-edit-container_"+ note_id).find('.title').val(title);
            $("#note-edit-container_"+ note_id).find('.content').val(content);
        });
        
        // cancel click event
        
        $("body").on('click', '.note_edit_cancel', function (evt) {
            evt.preventDefault();
            $(this).parents('.note-edit-container').html('');
        });


    };

    var delete_todo = function ()
    {
        $("body").on('click', '.todo_delete', function (evt) {
            evt.preventDefault();
            
            var c = confirm('Are you sure you want to delete');

            if(c == false) return false;
            
            var self = $(this).parents('div:eq(0)');
            var url = $(this).attr('href');
            var postData = {
                'todo_id': $(this).attr('data-id')
            };
            $.post(url, postData, function (o) {
                if (o.result == 1)
                {
                    Result.success('Item Deleted');
                    self.remove();
                }
                else
                {
                    Result.error(o.msg);
                }
            }, 'json');
        });

    };

    var delete_note = function ()
    {
        $("body").on('click', '.note_delete', function (evt) {
            evt.preventDefault(); 
            var c = confirm('Are you sure you want to delete');

            if(c == false) return false;
            
            var self = $(this).parents('div:eq(0)');
            var url = $(this).attr('href');
            var postData = {
                'note_id': $(this).attr('data-id')
            };
            $.post(url, postData, function (o) {
                if (o.result == 1)
                {
                    Result.success('Item Deleted');
                    self.remove();
                }
                else
                {
                    Result.error(o.msg);
                }
            }, 'json');
        });

    };


    var toggle_note = function ()
    {
        $("body").on('click', '.note_toggle', function (evt) {
            evt.preventDefault();
            var note_id = $(this).data('id');
            
            $("#note_content_" + note_id).toggleClass()
        });

    };
    

    this.__construct();


};