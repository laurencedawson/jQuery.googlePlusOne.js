# About jQuery.googlePlus.js

jQuery.googlePlus.js is a simple plugin for quickly adding Google +1 buttons to a page. Unlike the standard Google+ button, this plugin will not contact Google for any assets (images / javascript) until the user hovers over the button intently expressing an interest. 

**Why bother? **

- The minified plugin is small (~2kb) and contains the default assets encoded in base64 to reduce http requests. This means that when a user visits a page with multiple +1 buttons on, all buttons will load immedieaty and removes the noticable lag / flicker of assets being loaded that is currently seen with the code from Google.
- The button is animated (the same animation can be seen on any Google search page)


## Example

A working text blog can be viewed [here](http://laurencedawson.github.com/jQuery.googlePlus.js/), the source can be viewed in /demo.

## Usage

Add the html to your page (where google.co.uk could be any link):

	<div class="plus" link="http://www.google.co.uk/"></div>

Include jQuery.googlePlus.js

	<script type="text/javascript" src="jQuery.googlePlus.min.js"></script>

Initialise the plugin:

    // Link the div class plus to the plugin
	$(document).ready(function(){
    	$('body').find('.plus').googlePlus('init');
    });
 
    // Link the button callbacks to jQuery.googlePlus.js (optional) 
    function button_callback(p){
		if(p.state=="on")
	    	$('body').googlePlus('on')
	  	else $('body').googlePlus('off')
	    	return true
	}

## Contact

Laurence Dawson: [email](mailto:contact@laurencedawson.com), [twitter](http://twitter.com/#!/loljdawson)