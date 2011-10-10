// Button states (data, s)
// 0 = ready, 1 = animating, 2 = finished animating 

(function($){
  // Sprites (Base64 encoded to reduce # http requests)
  off = "iVBORw0KGgoAAAANSUhEUgAAABgAAAAPCAYAAAD+pA/bAAAAAXNSR0IArs4c6QAAAAlwSFlzAAALEwAACxMBAJqcGAAAATBJREFUOMu1lEtPwkAUhb+ZQoFiSFeaqumCEKOugJ2JGxf8Vf+EiW6M7jRx4yMxGiWSEJSWSMFSWxfGCPZhU+Asz9zcM+fcOyMAnnrDgD/wJoIo9J1o/m3gh7hWoyxEVPNFCQDkbp9hczVHWmjFOF6GuHbXIwewva6yDLS7HnLeJh3LZ+QGsedzCZxejzi5cBNr/g3/oftJ/31Cs/ob/mPP5/zOBQSiCCVVZHdgj8MbYjkBe1sqlWKAoZPNQcfyp+xLDo/H7Nby1E2FuqkAcHYl2KjlswkYuuSgqXLf+cAeQbNaQNfEzAUA1ioiUSAxIkOXrJRVCjLA0OVM1pbzvTnTopmGXDcVMLUQ/2q7qJqfOOBUAnHY3ymlqpMANy/uwl/xT08BcHQ5DJbxVbQaZfEFqytjZi4PNaYAAAAASUVORK5CYII=";
  on = "iVBORw0KGgoAAAANSUhEUgAAABgAAAAPCAYAAAD+pA/bAAAAAXNSR0IArs4c6QAAAAlwSFlzAAALEwAACxMBAJqcGAAAAbtJREFUOMu1lL9LW1EUxz83eU+J5JdGRYKIbakiJSagIIJUwSmT4OAouDq0W7dC2j+gklFEh1K6RRzEDlYodRDBxUZFNBZrIigmVUybmryXdx0ij9L3UmgxXzjDPefe7znfcw9HAJyGBiV/IDKZQGBF81AQO+yqVp/oRzjsyO8LcgspiMal2jtekwTal0UUAOHy1UpEJYEsl/6bYPiByt5RhqxsRDrrLHEHAHrpn82v6MyP1bM65cX/bdn+nqlAL1atcLLfTV/zDS/frnPdOgjA2JMGFiaa8LoUMhdXfL8RGFKCDU9FgVasap0+QThYj5pPm75wm5PpuU2SmTw7x1l0p8f+/d8UDD92s/bsoXk+S7zgzfuPvF4559VyCPDwrt3D6udNNMVTtQtK5Q+swe1jndGZfaYGfESCKrHZJZKyh5/uRwitwNNuPwAb24eU1A5bDrNFUi9a7DJf4NNelq85jauCxnryhFROYpR1jLJOOFiZmJ1UGs3RYMvxW4uqj2lsMUUMoGXEnAyAcLuL9MU1lwWDsleCYc8hiMalCHTVZlXkDu4U/DhDuAL3S/4rd6cAIBqvzcL78FzcArgb+BCjQUznAAAAAElFTkSuQmCC";
  // Aliases
  tt = jQuery.data;
  to = setTimeout;
  db = document.body;
  var r; //Link to the last access button
  // Plugin methods
  m = { 
	// Setup the plugin & bind cursor events to the plugin methods
	init:function(){
      this.css({'width':'24px'})
        .css({'height':'15px'})
        .css({'background':'no-repeat url(data:image/png;base64,'+off+')'})
        .bind('mouseenter',m.show)
        .bind('mouseleave',m.hide);
      tt(db,'js',0);
      this.bind('pressed',m.pressed);
    }, //end init
    
    // Display the live +1 button
    show:function(){
	  // Create a shorthand reference to this
	  r = this;
	  // Set the state of the button if undefined
      if(tt(r,'s')==undefined)
        tt(r,'s',0),tt(r,'a',false);
      
      // If the button is ready, grab the live iframe, set a timer of 280ms
      if(tt(r,'s')==0){
        m.reset(r),tt(r,'s',1);
 	    // If the button is not active, display the animated sprite
        if(tt(r,'a')!=true)
          for(i=1;i<17;i++)
            m.anim(r,i);
	    // Otherwise just skip the animation
	    else tt(r, 's',2);
        // If the animation has finished, grab the button
        to(function(){
	      // Check that the state is still finished animating
          if(tt(r, 's')==2)
	        // If the google +1 js has not been loaded yet, grab it
            if(!tt(db,'js')) $.getScript('//apis.google.com/js/plusone.js',function(){tt(db,'js',1),m.grab(r)});
	        else m.grab(r);
	      // If not reset the button div
	      else m.reset(r);
        },tt(r,'a')?0:280);
      }
    },//end show
 
    grab:function(v){
	  // If the state is finished animating, append the +1 div and set to active
      if(tt(v,'s')==2){
        $(v).append('<g:plusone size="small" annotation="none" expandto="right" callback="button_callback" href="'+$(v).attr('link')+'"></g:plusone>');	       
        gapi.plusone.go();
        // Set the state back to ready
        tt(v,'s',0);                
      }else
        m.reset(v)
    },//end grab

    hide : function(){   
	  // Reset the status and reset the div   
      tt(this,'s',0),m.reset(this)
    },//end hide

    anim:function(v,i){ 
      to( function(){
        if(tt(v, 's')==1){
	      // Set the background to a section of the sprite
          $(v).css({'background':'no-repeat url("http://www.google.co.uk/images/experiments/p1/p1sprite.png")-'+i*25+'px'}); 
          // When i is 13, set the status as finished animating
          if(i==13&&tt(v,'s')==1) tt(v,'s',2);
        }
      },i*20);
    },//end anim

    reset : function(v){
      $(v).empty();
      if(tt(v,'a'))
        $(v).css({'background' : 'no-repeat url(data:image/png;base64,'+on+')'});
       else
        $(v).css({'background' : 'no-repeat url(data:image/png;base64,'+off+')'});      
    },//end reset	

    on : function(){
      tt(r,'a',true)
    },//end on

    off : function(){
	  tt(r,'a',false)
    }//end off
  };

  $.fn.googlePlus = function(mode) {
    return m[mode].apply( this, Array.prototype.slice.call(arguments,1));
  };
})(jQuery);

// Link the button callbacks to jQuery.googlePlus.js (optional) 
function button_callback(p){
    if(p.state=="on")
        $('body').googlePlus('on')
    else $('body').googlePlus('off')
        return true
}