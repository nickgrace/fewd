![GeneralAssemb.ly](../../img/icons/FEWD_Logo.png)

#FEWD - CSS Basics

---

##Agenda

* Download Class 02 Starter Code.
* Copy the starter code into your course work directory.

---

##Agenda

* Warmup Exercise
* CSS Intro
* Color Property
* Fonts
* Text
* Working Locally with CSS

---

##WARMUP - HTML/GITHUB

1. Open keanu/ in SublimeText

2. Mark up copy.txt with HTML in about.html

3. Ensure about.html contains proper structure!

4. Link the .html files (index, about, films) together

---

##CSS Intro

---

##CSS History

* CSS => Cascading Style Sheets
* First proposed in 1994 by H&aring;kon Lie ("How Con Lee") - a colleague of Tim Berners-Lee
* Stylesheet language used to describe HTML markup
* Allows separation of document content (HTML), from document presentation/styling
* &rArr; "Separation of concerns"

---

##CSS Syntax

![CSS Syntax](../../img/class02/css-syntax.png)

* This CSS rule turns the text color of every paragraph, P, black

---

##CSS Syntax

![CSS Syntax](../../img/class02/css-syntax-multiple.png)

* One selector can have multiple declarations
* Common for each declaration to have its own line

---

##CSS Color Property

![Nyan Cat](../../img/class02/css-colors.png)

---

##CSS Property: Color

* Colors can be specified using:
&rArr; "color" keyword - "red"
&rArr; rgb - rgb(255, 0, 0)
&rArr; hex codes - #FF0000
* Can also use: RGBA, HSL, HSLA

---

##CSS Colors - Keyword Property

```
span { color: red; }
```

* Simplest; least-descriptive
* red, green, blue, etc.
&rArr; <span style="color: tomato">tomato</span>
&rArr; <span style="color: deeppink">deeppink</span>
&rArr; <span style="color: chartreuse">chartreuse</span>
* <a href="http://www.crockford.com/wrrrld/color.html">More colors...</a>

---

##CSS Colors - RGB Property

```
span { color: rgb(255, 0, 0); }
```

* More complicated; more powerful!
* First value is red; second is green; third is blue
* Each value in a range 0 - 255
* Values closer together are gray or muted:
<span style="color: rgb(200,200,200)">rgb(200,200,200)</span> / <span style="color: rgb(155,155,155)">rgb(155,155,155)</span> / <span style="color: rgb(075,075,075)">rgb(075,075,075)</span>

---

##CSS Colors - Hexadecimal Property

```
p { color: #463DB3 };
```

* Great blog post "The Code Side of Color": http://www.smashingmagazine.com/2012/10/the-code-side-of-color
* Extracting Hex Values: from code, or from image using Photoshop / software tool.
* Adobe Color: https://color.adobe.com
* Google Material Design: https://material.google.com/style/color.html
* U.S. Web Design Standards: https://standards.usa.gov/colors/

---

##Fonts

![Fonts](../../img/class02/fonts.jpg)

---

##Font - Various Properties

* font-weight
&rArr; Sets the "thickness" of the font
&rArr; normal and <span style="font-weight: bold">bold</span>; values 100 - 900
* font-style
Sets a "slant" to the font
<span style="font-style: normal">normal</span> and <span style="font-style: italic">italic</span>
* font-size
&rArr; Sets the "size" of the font
&rArr; Length values (12px); Percentage (75%)

---

##Font - Font Family Property

```
p { font-family: 'Comic Sans MS', helvetica, serif };
```

* font-family
&rArr; Applies a particular font to the element
&rArr; Accepts multiple values
&rArr; Should always end with: serif; sans-serf; monospace;

---

##Text - Various Properties

* text-align
&rArr; how text is oriented within the containing block
text-left
text-center
text-right
* text-decoration
&rArr; controls extra-textual visual emphasis (<u>underline</u>)

```
a { text-decoration: none; }
```

---

##Sizes and Measures: Px and %

Many CSS properties take a size as an input. Two common measures are pixels (px) and percent (%).


---

##Code Along

Style a Press Release

---

##Working Locally with CSS

---

##Local CSS

* Three ways to apply CSS to HTML:

1) inline CSS

2) *style* tag inside the *head* tag

3) link to an external file w/ *link* tag

---

##Local CSS - Inline Styles

```
<p style="color: blue; font-size: 14px;">
	Keanu Reeves is Johnny Utah
</p>

<p style="color: blue; text-decoration: underline;">
	Or is Johnny Utah Keanu Reeves?
</p>
```

* Not a good practice
* Does not separate our concerns (HTML/CSS)
* Makes debugging difficult
* ONLY USE IF WRITING HTML EMAILS
* You will make enemies

---

##Local CSS - <head> Embed

```
<!DOCTYPE html>
	<html>
	<head>
		<title>Super Awesome Website</title>
		<style type="text/css">
			h1 {color: red;}
			p {color: blue; font-size: 14px}
		</style>
	</head>
	<body>
```

* Better than inline styles
* Bloats HTML pages
* Can make debugging large applications difficult

---

##Local CSS - External File via <link>

```
<!DOCTYPE html>
 <html>
 <head>
 	 <title>Super Awesome Website</title>
	 <link rel="stylesheet" type="text/css" href="style.css">
 </head>
 <body>
```

* Like *title*, links to CSS go in *head*
* Truly separates HTML from CSS
* Easiest to debug; just go to your CSS file!

---

##Local CSS - External File via <link>

```
<link rel="stylesheet" type="text/css" href="style.css">
```

* rel
&rArr; Specifies the relationship between the current document and the linked document
* type
&rArr; Specifies the media type of the linked document
* href
&rArr; Specifies the location of the linked document

---

##CSS <link> Exercise

1. Re-open keanu/ directory

2. Link style.css to all three .html files

3. Begin Lab Work

---


##Images

*	Images are placed using the img tag.

```&lt;img src="img/imageName.jpg" alt="alternative text"&gt;```

---

##Images

The `img` tag requires a `src` attribute, which tells the browser where to find the image.

---

##Images

How would you write the src?

![](../../img/unit_1/folder_structure.png)

*	There are different approaches to specifying an image location

---

##Images

*	Inside ```webroot```, a relative path could be used:

```&lt;img src="images/logo.png"&gt;```

---

##Images
Relative Path

![Parent Folder Structure](../../img/unit_1/folder_structure_parentDirectory.png)

Note:

* Given this folder structure the same image would be ```&lt;img src="../images/logo.png"&gt;``
*
Note that ```..``` means to go up a directory, and can be used repeatedly: `../..` would go up two directories.


---

##Images

Absolute Path

```&lt;img src="/images/logo.png"&gt;```

Note:

	Absolute URLs start with a `/`, so if we imagine that our `webroot` directory was stored on a server such that the `webroot/index.html` file is accessible at `http://example.com/index.html`, then placing the logo image could be done from any html page with: ```<img src="/images/logo.png">```

The benefit here is that this same ```src``` path works on any html page, no matter what its location, so the same ```img``` tag can be used on both the ```webroot/index.html``` page and the ```webroot/about/index.html``` page.

The downside is that the path only works if the project is stored to a proper location for serving.


---


##HTML Basics - Images
Full URL

		&lt;img src="https://ga-core.s3.amazonaws.com/production/uploads/program/default_image/397/thumb_User-Experience-Sketching.jpg"&gt;

Note:
For linking to images, make sure that you have permission to use the image in this way. Even then, it is often better to host a copy of the same image, rather than link to another server, because it reduces dependency.


---

##HTML Basics - Images

alt attribute

	&lt;img src="puppy.jpg" alt="My cute puppy"&gt;

Note:

A piece of text to be used in lieu of the image when the image is unavailable

Using `alt` attributes has the added benefit of giving search engines more linguistic context about the image as it is used on your page.

Reasons an image may not load:

*	There was a connection error, the browser didn't download the image.

*	The file was not found, perhaps because the image got moved elsewhere and the page wasn't updated yet to reflect the change.

*	The user is running a text-based browser such as an older phone with a WAP-style browser, or a non-graphical browser like lynx.

*	The user is using a screen reader because she has low vision, which will read the `alt` text aloud or present it through a braille reader.


---

##HTML Basics - Images

There are three main image file formats:

---

##Image File Formats

####.png

Note:
Supports transparency and semi-transparency, great for logos, icons, and repeating background tiles. Almost always preferable to a `gif`, unless semi-transparency is not needed, and the `gif` format is significantly smaller.


---

##Image File Formats


####.gif

*	Can have basic transparency, typically a `png` is used instead.

---

##Image File Formats

####.jpeg

Note:
No transparency, can be stored at different compression levels with varying amounts of "lossy-ness", typically the best format for photos. (Try to balance between photo quality and file size.)



---

##CSS

![](../../img/unit_1/css_syntax.png)

---


##CSS

Where does CSS go?

* Inline
* In the `head`
* In a separate file


Note:
CSS should go in a separate file. We're going to start by placing them in the head for convenience and to learn the syntax. We'll show inline styles at the end, just to demonstrate.


---

##CSS

Using a separate CSS file

Its best practice to put CSS in its own file and link to it from the `&lt;head&gt;`.

```&lt;link rel="stylesheet" href="style.css"&gt;```

Note:
"The `link` tag needs two attributes: `rel="stylesheet"` and an `href` attribute.

The `href` attribute value works very similarly to linking to an image, or to another page.


---

##CSS Break Down

```
p {
	color: red;
	font-weight: bold;
}
```
---

##CSS Break Down

This whole thing is called a **rule**.

The `p` is called a **selector**, and it's followed by a set of **declarations** in a **declaration block**.

---

##CSS Break Down

The **selector**, `p` in this case, specifies what parts of the HTML document should be styled by the declaration. This selector will style all `p` elements on the page.

---

##CSS Break Down

The **declaration block** here is:

```
{
	color: red;
	font-weight: bold;
}
```

**Declarations** go inside curly braces.

---


##CSS Break Down

#### Declarations

This example has two declarations. Here's the first:

```
color: red;
```

Note:
Every declaration is a **property** followed by a **value**, separated by a colon, ending in a semicolon.

In this declaration, we are setting the `color` **property** to the **value** `red`.


---


##CSS Break Down

Let's look at the second declaration:

```
font-weight: bold;
```

Note:

What style **property** are we specifying here?

What **value** are we setting that **property** to?

Try writing a new set of styles for another element, like an `h1`.


---

##CSS Break Down

Why might we want to link to a separate CSS file?

Note:

Discuss as a class


---

##Cascading Style Sheets (CSS)
###Colors

Colors can be specified in CSS in a variety of ways:

![](../../img/unit_1/color.png)

Note:
* keyword
* hex codes
* rgb
* hsl
* rgba
* hsla


---

##Color
###Color Keywords

These are used less frequently, but are handy for basic colors like `black` and `white`. There are several

See [here](http://msdn.microsoft.com/en-us/library/ie/aa358802.aspx) for more

---

##Color
###Hex Codes (RGB)

![Hex Color explanation](../../img/unit_1/hex_colors.png)

Note:
"Hex" values are so-called because they use hexadecimal, or base-16, to describe the color values for red, green, and blue. Each of the 3 color values is expressed by two hexadecimal digits, from `00` (no color) to `FF` (full color), and are written in the order red, green, then blue, after an initial `#` sign.

Hex values can be abbreviated to only 3 digits if each digits is doubled. So `#FFFFFF` (white) can be expressed more succinctly as `#FFF`, and `#000000` (black) can be expressed as `#000`. `#FA6198`, however, cannot be abbreviated without altering the color.


---

##Color
###RGB Color Values

####```rgb(0,0,0)```

*	The first value is red, the second green, the third blue.

*	Each value can range from 0 to 255, which expresses the same number of color steps as 00 to FF in base-16.


Note:
FF in base-16 is equivalent to 255 in base-10.

In RGB, `rgb(0,0,0)` is black, `rgb(255,255,255)` is white, `rgb(255,0,0)` is red, etc.

White-space is allowed *inside* the parentheses, so `rgb(255, 0, 0)` will do just as well.

---

##Color
###RGBa Colors


*	RGBa works identically to RGB, expect that it takes a 4th value called the "alpha".
*	This is a value between 0 and 1 which will be used to determine a color's opacity on the page,


![](../../img/unit_1/rgba_color.png)

Note:
0 is completely transparent, and 1 being solid. 0.5 or .5 is 50% opacity.

Thus, __rgba(0,0,0,.25)__ is black at 25% opacity and __rgba(255, 255, 255, 0.8)__ is white at 80% opacity.

The alpha value can be in decimal form but cannot use a percentage. When a decimal is used, the leading zero is optional.

---

##Color
###HSL Colors

####HSL
*	Similar notation to RGB values, but specify colors using hue, saturation, and lightness.


####HSLa
*	As with RGBa, HSLa is exactly like HSL for the first 3 values, but takes a 4th alpha-channel value.

Note:
**Hue** is expressed as a degree angle measure, with red being at 0, green at 120, and blue at 240. Note that the degree unit is implied, and that the angle wraps around, so 360 also refers to red, and -120 is the same as 240 (blue).

**Saturation** is expressed as a percentage, with 100% being a fully saturated color, and 0% being a shade of gray (no hue).

**Lightness** is also expressed as a percentage, 0% being black, and 100% being white. 50% lightness is the "normal" color range: anything above 50% gives a white tint, anything below 50% gives a black shade.

As an example, red is ```hsl(0, 100%, 50%)```, which is equivalent to ```#FF0000```.

Note that changing the opacity allows whatever colors are "behind" an element to shine through, which can alter the visible color significantly, especially at lower opacities.


---


##CSS
###Review

Add a couple points here with the major takeaways for the basics of CSS.


---


![GeneralAssemb.ly](../../img/icons/exercise_icon_md.png)
##Lab Time
*	Cookie Recipe
