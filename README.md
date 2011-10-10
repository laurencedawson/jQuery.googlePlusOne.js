# About jQuery.googlePlusOne.js

jQuery.googlePlusOne.js is a simple plugin for quickly adding animated Google +1 buttons to a page. Unlike the standard Google+ button, this plugin will not contact Google for any assets (images / javascript) until the user hovers over the button intently expressing an interest. 

###Why bother?

- Privacy! A user has to opt in (via hover) to enable the button
- The minified plugin is small (~2kb) and contains the default assets encoded in base64 to reduce http requests. This means that when a user visits a page with multiple +1 buttons on, all buttons will load immedieaty and removes the noticable lag / flicker of assets being loaded that is currently seen with the code from Google.
- The button is animated (the same animation can be seen on any Google search page and currently not available)


## Example

A working text blog can be viewed [here](http://laurencedawson.github.com/jQuery.googlePlusOne.js/), the source can be viewed in /demo.

## Usage

Add the html to your page (where google.co.uk could be any link):

	<div class="plus" link="http://www.google.co.uk/"></div>

Include jQuery.googlePlusOne.js

	<script type="text/javascript" src="jQuery.googlePlusOne.min.js"></script>

Initialise the plugin:

    // Link the div class plus to the plugin
	$(document).ready(function(){
    	$('body').find('.plus').googlePlusOne('init');
    });

## Contact

Laurence Dawson: [email](mailto:contact@laurencedawson.com), [twitter](http://twitter.com/#!/loljdawson)