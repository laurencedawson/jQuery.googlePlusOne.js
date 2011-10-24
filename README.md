# About jQuery.googlePlusOne.js

jQuery.googlePlusOne.js is a simple plugin for quickly adding animated Google +1 buttons to a page. Unlike the standard Google+ button the button activates an animation when the user hovers over the plus-row div (as can be seen on any Google search page).

###Why bother?

- The minified plugin is small (~1.3kb) and contains the default assets encoded in base64 to reduce http requests. This means that when a user visits a page with multiple +1 buttons on, all buttons will load immedieaty and removes the noticable lag / flicker of assets being loaded that is currently seen with the code from Google.
- The button is animated (the same animation can be seen on any Google search page and currently not available)
- The surrounding div (plus-row) will trigger the animation (again like on any Google search page)


## Example

A working text blog can be viewed [here](http://laurencedawson.github.com/jQuery.googlePlusOne.js/), the source can be viewed in /demo.

## Usage

Add the html to your page (where google.co.uk could be any link):

    <div class="plus-row">
        Google
        <div class="plus-button" link="http://www.google.co.uk/"></div>
    </div>

Include jQuery.googlePlusOne.js

	<script type="text/javascript" src="jQuery.googlePlusOne.min.js"></script>

Initialise the plugin:

    // Link the div class plus to the plugin
	$(document).ready(function(){
    	$('body').find('.plus').googlePlusOne('init');
    });

###Note
jQuery.googlePlusOne.js currently does not support running locally without a web server. You must either deploy to a live site or local apache instance.s

## Contact

Laurence Dawson: [email](mailto:contact@laurencedawson.com), [twitter](http://twitter.com/#!/loljdawson)