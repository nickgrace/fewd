// Create Global Variables
var currentNeighbourhood = null;

var endpoint = "https://data.police.uk/api/";


// Define Functions
// Get all neighborhoods in a region
function getNeighborhoods(selectedRegion) {

    // Sample url to call https://data.police.uk/api/leicestershire/neighbourhoods



    // Make the ajax Request
    jQuery.ajax({
        method: "GET",
        url: requestURL,
    })
        .done(function( data ) {

            // When done
            // Empty the neighborhood selector

            // Loop through the results and populate the neighbourhood selector


            // Get the first neighborhood and populate

        })
        .fail(function(xhr, status, error) {
            //Ajax request failed.

        });



}

// Get the contact and location information AND the location
function getOneNeighborhood(selectedRegion,neighborhoodID){

    // Sample url to call https://data.police.uk/api/leicestershire/NC68

    // Make the ajax Request


            // When done
            // Set the currentNeighbourhood data

            // Empty the Definition List

            // Add the name

            // If url add url


            // If population add population



            // Load initial crime data




            //Ajax request failed.



}

// Get all crimes for a location by date
function getCrimes(lat,lng,year,month){

    // Sample URL to call https://data.police.uk/api/crimes-street/all-crime?lat=51.491082&lng=-0.111108&date=2017-01


    // Make the ajax Request


            // When done

            // Empty the table body


                // Use google maps to create a link to that location

                // Add a table row


            // Append all the new rows
        })
        .fail(function(xhr, status, error) {
            //Ajax request failed.

        });



}

jQuery(document).ready(function(){

    // Run when the page loads
    getNeighborhoods(jQuery("#region").val());

    //getCrimes(51.491082, -0.111108,2017,01);

    // Run when the forms are changed
    jQuery("#region").on("change",function(){
        getNeighborhoods(jQuery(this).val());

    });

    jQuery("#location").on("change",function(){
        getOneNeighborhood(jQuery("#region").val(),jQuery(this).val());
    });

    jQuery("#year").on("change",function(){
        var year = jQuery("#year").val();
        var month = jQuery("#month").val();
        console.log(currentNeighbourhood);
        var lat = currentNeighbourhood.centre.latitude;
        var lng = currentNeighbourhood.centre.longitude;
        getCrimes(lat,lng,year,month);
    });

    jQuery("#month").on("change",function(){
        var year = jQuery("#year").val();
        var month = jQuery("#month").val();
        var lat = currentNeighbourhood.centre.latitude;
        var lng = currentNeighbourhood.centre.longitude;
        getCrimes(lat,lng,year,month);
    });

});