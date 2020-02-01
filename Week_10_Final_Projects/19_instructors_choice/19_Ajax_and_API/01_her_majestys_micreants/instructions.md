# FEWD Week #10: Ajax & API's

## Her Majesty's Miscreants

---


###Description 

This lesson is about how to load data from an external API onto the page. Our source data is from the English police departments


---

### Part 1: Make a Request

In part one use the data.police.uk API endpoint:
https://data.police.uk/docs/method/neighbourhoods/

The goal is to load a list of neighborhoods for a particular region.

1) Create a function to load the data
2) When the data is returned create a loop that populates the #location select element with all the different locations. Display the location name but use the location id for the value.
3) Make your function run whenever the #region select is changed. Use the value of that select to determine which region your function will load.
4) Make your function run once when the page first loads.  What value should you use by default as an input?
5) Adjust your function so that your page will not fail if the data does not load.  What should happen if the ajax fails?


### Part 2: Load More Data

Now that you have a fairly straighforward request structure in place, let's expand it to more calls.

#### Load Neighborhood Information

1) Create a function that loads the information of a single neighbourhood.  Which endpoint on the data.police.uk site should you use?
2) Whenever the select #location is changed call a function that will load the neighborhood data.
3) IF the are returned in the data, display the name, a button that links to the force_url, and the population of the location in the definition list #neighbourhoodInfo
4) Make your function run whenever the change location is run so that BOTH populate automatically.
5) Adjust your function so that your page will not fail if the data does not load.  What should happen if the ajax fails?

#### Load Crime Data

Use the concepts in the previous steps to load the crime data for a partiuclar neighborhood.  Note: The endpoint https://data.police.uk/api/crimes-street/all-crime?lat=51.491082&lng=-0.111108&date=2017-01 looks a litte different from the previous two steps.  Where can you get the Lat and Long as inputs?  Are your input forms identical to how this endpoint wants there data?



---



### Resources

jQuery Method: .ajax()
https://api.jquery.com/jquery.ajax/

API Reference
https://data.police.uk/docs/

Google Maps URLS
http://www.google.com/maps/place/LATT,LONG  (where LATT and LONG are float numbers)