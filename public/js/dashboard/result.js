var Result = function() {
    
    this.__construct = function() {
    };
    
    this.success = function(msg) {
        var dom = $("#success");
        if(typeof msg === 'undefined') {
            dom.html('Success');
        }
        dom.html(msg);
        dom.show().fadeIn();

        setTimeout(function() {
            dom.fadeOut();
        }, 5000);
        
    };
    
    this.error = function(msg) {
        var dom = $("#error");
        if(typeof msg === 'undefined') {
            dom.html('Error').fadeIn();
        }
        if (typeof msg === 'object') {
            //loop
            var output = '<ul>';
            for (var key in msg)
            {
                output += '<li>'+msg[key]+ '</li>';
            }
            output += '</ul>';
            dom.show().fadeIn();
           
        }
        else {
            dom.show().fadeIn();
            
        }
        $("#error").html(output).fadeIn();
                
        setTimeout(function() {
            dom.fadeOut();
        }, 5000);

    };
    
    this.__construct();
    
    
};