<div class="row">
    
    <div id="dashboard-side" class="span4">
        <form id="create_todo" class="form-horizontal" method="post" action="<?=site_url('api/create_todo')?>">
            <div class="input-append">            
                <input type="text" name="content" placeholder="Create New Todo List">
                <input type="submit" class="btn btn-success" name="create_todo" value="Create" >
            </div>
        </form>
        <div id ="list_todo"> 
            <span class="ajax-loader-gray">
                
            </span>
        </div>
        
    </div>
    <div id="dashboard-main" class="span8">
        <form id="create_note" class="form-horizontal" method="post" action="<?=site_url('api/create_note')?>">
            <div class="input-append">                       
                <input tabindex="1" type="text" name="title" placeholder="note Title">
                <input tabindex="3" type="submit" class="btn btn-success" name ="create_note" value="Create" >
            </div>
            
            <div class="clearfix"> 
            </div>
            
            <textarea tabindex="2" name="content" class="form-control" rows="2" id="content"></textarea>

        </form>
        <div id ="list_note"> 
            <span class="ajax-loader-red">
                
            </span>            
        </div>
        
    </div>
</div>

