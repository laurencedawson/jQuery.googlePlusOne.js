(function($,r){
  s = "R0lGODlhGAAPAKIAAP///6W997vP9c3d98/h/Nfl+ebv/QAAACH5BAEAAAAALAAAAAAYAA8AAANQCLZb/iNKQali7Tk5a9VgKFpAaZ5oSqbsgq7sKQTGK7SDaQS8eqeEH4BggJWMO16AYFr6UkWBS0F7AoWAQtUWe21l2G6XUhCLCzePes0GJAAAOw==";
  // Aliases
  tt = jQuery.data;
  to = setTimeout;
  // Plugin methods
  m = { 
    // Setup the plugin & bind cursor events to the plugin methods
    init:function(){
      this.find('.plus-button').css({'width':'24px'})
        .css({'height':'15px'})
        .css({'background':'no-repeat url(data:image/png;base64,'+s+')'});
      $(this).find('.plus-button').append('<div class="button-wrapper"></div>');
      // Add all the plus one buttons for the page
      for(i=0;i<this.length;i++)
        $(this.get(i)).find('.button-wrapper').append('<div class="g-plusone" data-size="small" expandto="right" data-annotation="none" data-href="'+$(this.get(i)).find('.plus-button').attr('link')+'"></div>');
      // Hide the button wrapper
      $(this).find('.button-wrapper').hide();
      // Bind to the callbacks
      this.bind('mouseenter',m.show)
      this.bind('mouseleave',m.hide);      
      // Grab the plus one 
      $.getScript('//apis.google.com/js/plusone.js',function(){ gapi.plusone.go()});
    }, //end init
    
    // Display the animation and show the live button
    show:function(){
      r = this;
      tt(r,'s',0)
      // Start the animation
      for(i=1;i<17;i++)
        m.anim(r,i);
      // Show the live button
      to( function(){	   
        if(tt(r,'s')==0)
          $(r).find('.button-wrapper').show();
      },(240));
    },//end show

    hide : function(){
      tt(this,'s',1);
      $(this).find('.button-wrapper').hide();
      $(this).find('.plus-button').css({'background':'no-repeat url(data:image/png;base64,'+s+')'});
    },//end hide

    anim:function(v,i){ 
      to( function(){	 
        if(tt(v,'s')==0)
          $(v).find('.plus-button').css({'background':'no-repeat url("http://www.google.co.uk/images/experiments/p1/p1sprite.png")-'+i*25+'px'});           
      },i*15);
    }//end anim
  };

  $.fn.googlePlusOne = function(mode) {
    return m[mode].apply( this, Array.prototype.slice.call(arguments,1));
  };
})(jQuery);
