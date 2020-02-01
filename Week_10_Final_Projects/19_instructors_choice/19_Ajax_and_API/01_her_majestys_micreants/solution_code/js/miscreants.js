// Create Global Variables
var currentNeighbourhood = null;

var endpoint = "https://data.police.uk/api/";


// Define Functions
// Get all neighborhoods in a region
function getNeighborhoods(selectedRegion) {

    // Sample url to call https://data.police.uk/api/leicestershire/neighbourhoods

    var requestURL = endpoint + selectedRegion + "/neighbourhoods";


    // Make the ajax Request
    jQuery.ajax({
        method: "GET",
        url: requestURL,
    })
        .done(function( data ) {

            // When done
            // Empty the neighborhood selector
            jQuery("#location").empty();
            // Loop through the results and populate the neighbourhood selector
            var newSelections = "";
            for(var n=0;n<data.length;n++){
                // Add selected to the first one
                newSelections += "<option value=\""+data[n].id+"\">"+data[n].name+"</option>";
            }
            jQuery("#location").append(newSelections);

            // Get the first neighborhood and populate
            getOneNeighborhood(selectedRegion,jQuery("#location").val());
        })
        .fail(function(xhr, status, error) {
            //Ajax request failed.
            jQuery("#location").empty();
        });



}

// Get the contact and location information AND the location
function getOneNeighborhood(selectedRegion,neighborhoodID){

    // Sample url to call https://data.police.uk/api/leicestershire/NC68
    var requestURL = endpoint + selectedRegion + "/" + neighborhoodID;

    // Make the ajax Request
    jQuery.ajax({
        method: "GET",
        url: requestURL,
    })
        .done(function( data ) {

            // When done
            // Set the currentNeighbourhood data
            currentNeighbourhood = data;

            // Empty the Definition List
            jQuery("#neighbourhoodInfo").empty();

            var newInfo = "";
            // Add the name
            newInfo += "<dt>Name</dt><dd>"+currentNeighbourhood.name+"</dd>";

            // If url add url
            if(data.url_force != ""){
                newInfo += "<dt>Force URL</dt><dd><a href=\""+currentNeighbourhood.url_force+"#\" class=\"btn btn-primary btn-small\">Force Information</a></dd>";

            }

            // If population add population
            if(data.population != 0){
                newInfo += "<dt>Population</dt><dd>"+currentNeighbourhood.population+"</dd>";
            }

            jQuery("#neighbourhoodInfo").append(newInfo);

            // Load initial crime data
            var year = jQuery("#year").val();
            var month = jQuery("#month").val();
            var lat = currentNeighbourhood.centre.latitude;
            var lng = currentNeighbourhood.centre.longitude;
            getCrimes(lat,lng,year,month);


        })
        .fail(function(xhr, status, error) {
            //Ajax request failed.
            jQuery("#neighbourhoodInfo").empty();

        });

}

// Get all crimes for a location by date
function getCrimes(lat,lng,year,month){

    // Sample URL to call https://data.police.uk/api/crimes-street/all-crime?lat=51.491082&lng=-0.111108&date=2017-01

    var requestURL = endpoint + "crimes-street/all-crime";

    // Make the ajax Request
    jQuery.ajax({
        method: "GET",
        url: requestURL,
        data: {"lat":lat,"lng":lng,"date":year+"-"+month}
    })
        .done(function( data ) {

            // When done

            // Empty the table body
            jQuery("#crimeData tbody").empty();

            var tableRows = "";
            for(var c=0;c<data.length;c++){

                // Use google maps to create a link to that location
                var link = "http://www.google.com/maps/place/"+data[c].location.latitude+","+data[c].location.longitude;

                // Add a table row
                tableRows += "<tr><td>"+data[c].category+"</td><td>"+data[c].location.street.name+"</td><td><a href=\""+link+"\" target=\"blank\">"+data[c].location.longitude+","+data[c].location.latitude+"</a></td></tr>";
            }

            // Append all the new rows
            jQuery("#crimeData tbody").append(tableRows);
        })
        .fail(function(xhr, status, error) {
            //Ajax request failed.
            jQuery("#crimeData tbody").empty();

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