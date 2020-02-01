# jQuery Plugins

## Learning Objectives

- Define what a jQuery plugin is
- Describe where to find existing jQuery Plugins (and how to install them)
- Research and utilize a published jQuery Plugin
- Demonstrate the basic structure of a jQuery Plugin



## Framing
jQuery plugins are an extension of jQuery functionality. The idea of plugins is that you could build most of these on your own, but someone else already has! Many of the plugins that are out there are functionalities you're capable of building yourself. Only, now you don't have too. You can just use other people's stuff, it's great. As far as programming goes, we're not learning anything radically new.

**What are jQuery Plugins?**

Officially, plugins are "simply a new method that we use to extend jQuery's prototype object."  In practice, they enable to us to extend jQuery's functionality, from adding simple methods to jQuery objects (think `$()` or stuff wrapped in cash) to the [jQuery UI plugin](http://jqueryui.com) that is maintained by the jQuery team.

Think about the `.hide()` method in jquery. Under the hood its changing some css property using javascript. Much in the same way that jquery abstracts functionality from javascript, we can leverage javascript/jQuery to build our own jquery methods. This opens up a bunch of doors.

So you can see, they can be simple or rather complex.

But, you may be asking yourselves, "Why do we care?" <pause>

You tell me.  Check out these demos.

- [tablesorter](http://tablesorter.com/docs/#Demo)
- [isotope](http://codepen.io/desandro/full/nFrte)

Q. Why do we care?
---

> A. Encapsulation of really cool functionality, so we can reuse and share. We stand on the shoulders of giants. There's no need to recreate the wheel if it already exists.

## Basic anatomy of a jQuery Plugin?

What can we expect from jQuery plugins?  How do we use them?

### You do: Research plugins

#### Individually for 10m:

Start in https://learn.jquery.com/plugins/

Review the below plugins:
- [isotope.metafizzy.co](http://isotope.metafizzy.co)
- [packery.metafizzy.co](http://packery.metafizzy.co)
- [tablesorter](http://tablesorter.com/docs/#Introduction)

- look for commonality
- look for patterns
- look for convention
- look for installation/configuration

#### Break into groups for  

When we get back together, we will be answering these questions, together.

Questions:

1. Where do we find jQuery Plugins?<br>
2. What is the basic anatomy of a jQuery Plugin?<br>
3. What do we add to our app to utilize them?<br>
4. Name some ways to install/initialize a jQuery plugin.

---

#### Answers

Where?
- Officially a large list of Plugins have moved to: https://www.npmjs.com/browse/keyword/jquery-plugin

>Unofficially, google is your best bet.

Basic Anatomy?
- Initialize with:
- a single function
- pass options

>Some have supporting functions

What do we add?
- Include vendor's javascript file
- [maybe] add provided css
- update our css using documented classes
- initialize with jQuery, js, or (sometimes) html

How to install?
- Download, jQuery
- CDN, jQuery
- Node, Vanilla JS
- Rails, HTML

## I do - Fixed Content plugin

Let's actually implement a jquery plugin together.

The plugin we'll be using is [FixedContent.js](https://github.com/jeremychurch/FixedContent.js)

### Fixed Content Source

The first thing I want to do is take a look at this source code so we can get a better understanding of plugins. The source code can be found [here](https://github.com/jeremychurch/FixedContent.js/blob/master/jquery.fixedcontent.js)

It's a little scary, but let's look at some parts we can identify

```javascript
(function($) {
  // this is just using regular jquery to basically say if there is something with a class of js_fixedcontent, do something
  if ($('.js_fixedcontent').length > 0) {
    // this is where the jquery prototype is extended to now include fixedcontent,
    // just like how you can call .hide on a jquery object, you can now call .fixedcontent
    $.fn.fixedcontent = function(options){
      // check out the source for the actual function def.
    };

    // calling the method defined above on anything with class js_fixed_content
    $('.js_fixedcontent').fixedcontent();

  }

}(jQuery));
```

> One thing we can note is this is an immediately invoked function expression. We need to use an IIFE in order for this plugin to work well with jQuery and other plugins. When we put all of this code into an IIFE, we need to pass the function `jQuery` and name the parameter `$`. If you'd like to know more about this, check this [link](https://learn.jquery.com/plugins/basic-plugin-creation/#protecting-the-alias-and-adding-scope) out.

### An Aside - IIFE's

An Immediately Invoked Function Expression (IIFE), is exactly what it sounds like... a function that is invoked immediately.

```js
(function(){
  // add some code here,
  //   including other functions.

})() // and then invoke it immediately
```

See those trailing parens?  We define an anonymous function and immediately invoke it.

Why would we do that?  Read
- [jQuery Best Practices](http://gregfranko.com/blog/jquery-best-practices/)
- [I love my IIFE](http://gregfranko.com/blog/i-love-my-iife/)

Q. Why do we use an IIFE?
---

> A.
- to locally scope jQuery.  
- To use the $ without fear of corruption from another library.

### I Do: Implementation
Let's create some a folder and some files we'll need for this application in the terminal:

```bash
make folder: fixedcontent_demo
create index.html
create script.js
create fixedContent.js
create styles.css
```

Copy and paste the content from [here](https://raw.githubusercontent.com/jeremychurch/FixedContent.js/master/jquery.fixedcontent.js) into `fixedContent.js`

Use the content found in this [gist](https://gist.github.com/andrewsunglaekim/27d439df8ab05b6b176c) as the dummy html content for the `index.html`:

If we open up the index page we can see that the h1 remains at the top regardless of our scrolling!

Because of `$('.js_fixedcontent').fixedcontent();` in `fixedContent.js` we don't even have to call it in our script file. You can see inside the documentation that you can customize some of the default values. You might have something like this in your `script.js`:

```js
$(".js_fixedcontent").fixedcontent({
  marginTop: 24,
  minWidth: 767,
  zIndex: 500
});
```

### Pair up: Use a plugin!
For 5 minutes:

- With your partner, pick a plugin from these links
- [jAnimate](http://renatorib.github.io/janimate/)
- [Lightcase](http://cornel.bopp-art.com/lightcase/#download)
- [Alertify](http://alertifyjs.com/)
- [splitChar](https://github.com/razvanbalosin/Splitchar.js)

**Harder:**
- [Planetarium](http://www.onextrapixel.com/2014/04/01/construct-interactive-planets-and-build-the-universe-on-your-website/)
- [CurvedText](http://www.olivermusebrink.de/beta/curvedtext/)

- Try and pick something you think you could reasonably attempt to code a small demo in 20 minutes

For 15 minutes:
- Attempt to install & utilize.  

You've only got 20 minutes, so focus on installation and easy demo.

For 10 minutes:
- Let's have a couple groups present!


## Additional Resources

- http://www.sitepoint.com/how-to-develop-a-jquery-plugin/
- http://blog.npmjs.org/post/111475741445/publishing-your-jquery-plugin-to-npm-the-quick
- http://www.jquery-tutorial.net/introduction/method-chaining/
