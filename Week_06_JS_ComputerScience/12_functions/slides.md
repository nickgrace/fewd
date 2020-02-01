![GeneralAssemb.ly](../../img/icons/FEWD_Logo.png)

#FEWD - Functions

---

##Agenda

*   Review Comparison and Variables
*	Functions
*	Exercises
*	Mood Swings


---

##New jQuery Method

jQuery().attr();<br/>

<p>Gets or sets an attribute</p>


---

##New Javascript Method

trim()

Removes any extraneous white space from the start or end of a string
---


![GeneralAssemb.ly](../../img/icons/exercise_icon_md.png)

##Mood Swings

---


##Mood Swings - Useful Functions

* preventDefault()
* toLowerCase()
* jQuery.click()
* jQuery.attr()
* jQuery.val()
* trim()


---

##Functions

A function is a set of actions that you are telling the machine to do.

```
  function makeSandwich(){
    Open Bread;
    if PeanutButterJelly
      spread peanut butter;
      spread jelly;
    else if BLT
      apply bacon, lettuce, tomato;
    else go hungry;
  }

  makeSandwich();
```

---

##Functions Syntax

![](../../img/unit_2/functions_syntax.png)

---

##Function Calls

![](../../img/unit_2/function_calls.png)

---

##Function Arguments

Data inputs that are "passed" into a function

![](../../img/unit_2/argument_syntax.png)

---

##Function Arguments

![](../../img/unit_2/function_call_argument.png)


---

##Function Arguments

Define a function that will accept an argument:
```
  function hello (name) {
  		alert("Hello, it's " + name)
  }
```
Call a function that accepts an argument:
```
  hello('me')

	// outputs: "hello, it's me"

	hello('Mollie')
	hello('Nate')
```

---

##Function Arguments

Functions can accept multiple arguments

Use a comma-separated list to define:
```
  function add (x, y) {
  		return x + y
  }
```
Call a function with multiple arguments:
```
  add(2, 2)

	// returns 4

	add(2, 5)
	add(100, 1)
```
---

##Arguments vs Parameters
Parameters:
Function add defined with two parameters, x and y:
```
  function add (x, y) {
  		return x + y
  }
```

Arguments:
Function add called with the arguments 5 and 2:
```
  add(5, 2)
  // returns 7
```
---


![GeneralAssemb.ly](../../img/icons/exercise_icon_md.png)

##Rock Paper Scissors


---
##Rock Paper Scissors - Useful Functions

*  event.preventDefault();
*  Math.random()
*  jQuery().text();
*  jQuery().html();


---

##Organizing Function

Where do you put functions

---

![GeneralAssemb.ly](../../img/icons/exercise_icon_md.png)

##Cash Register

---

##Cash Register - Useful Functions

*  event.preventDefault();
*  parseFloat()
*  toFixed()
*  jQuery().append();
*  jQuery().val();
*  jQuery().submit();


---



