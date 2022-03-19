# jQuery serialexpand - Display elements based on field states

## About jQuery serialexpand
The plugin is usedful when a form has many hidden elements that will be displayed depending the field states (radio, checkbox, and select). There is no more need of a complex custom code. Note that jQuery serialexpand is shared for inspirational and development purpose.


## Demonstration
See the [project page](https://github.meunierkevin.com/jquery-serialexpand/) for a demonstration.


## Compatibility
jQuery serialexpand has been tested in: IE, Edge, Chrome (mobile included), Firefox (mobile included), and Safari (mobile included).


## Self-Hosted
[Download](https://github.com/kevinmeunier/jquery-serialexpand/archive/master.zip) and save one of two available files to include serialexpand to your page, either the [development](https://github.com/kevinmeunier/jquery-serialexpand/blob/main/dist/jquery.serialexpand.js) or the [minified](https://github.com/kevinmeunier/jquery-serialexpand/blob/main/dist/jquery.serialexpand.min.js) version. Also, you can visit the [project page](https://github.meunierkevin.com/jquery-serialexpand/) to copy what you need.
```HTML
<script src="jquery.serialexpand.min.js"></script>
```

Make sure [jQuery](http://jquery.com) is properly loaded before using jQuery serialexpand. 


## Basic Usage
The basic usage of serialexpand is pretty easy, just start using jQuery serialexpand by calling it after page load. It works form radio, checkbox, and select.
```HTML
<input type="radio" name="customertype" data-serialexpand="registrationform">New customer
<input type="radio" name="customertype" data-serialexpand="loginform"> Existing customer

<div data-serialexpand-target="registrationform">Registration form</div>
<div data-serialexpand-target="loginform">Login form</div>
```
```JS
$(document).ready(function(){
  // jquery.serialexpand initialisation
  $.serialexpand({
    selector: '[data-serialexpand]'
  });
});(
```

  
## Configuration Parameters
The following configurations is available by default:

Name               | Type       | Default                             | Description
------------------ | ---------- | ----------------------------------- | -----------
selector           | *string*   | *undefined*                         | Mandatory option to identify the trigger elements
fxIn               | *string*   | *'slideDown'*                       | Show animation based on jQuery (additional options: fadeIn, show)
fxOut              | *string*   | *'slideUp'*                         | Hide animation based on jQuery (additional options: fadeOut, hide)
getTarget          | *function* | See [jquery.serialexpand.js](https://github.com/kevinmeunier/jquery-serialexpand/blob/main/dist/jquery.serialcookie.js) | Get the target based on the trigger element


## Bugs / Feature request
Please [report](http://github.com/kevinmeunier/jquery-serialexpand/issues) bugs and feel free to [ask](http://github.com/kevinmeunier/jquery-serialexpand/issues) for new features directly on GitHub.


## License
jQuery serialexpand is licensed under [MIT](http://www.opensource.org/licenses/mit-license.php) license.
