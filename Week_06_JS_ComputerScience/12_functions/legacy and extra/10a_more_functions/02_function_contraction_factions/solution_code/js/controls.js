

// This function will get the values of the two word forms, pass them to the compare function the update the display output

function conjunctionFormChecking(){

    // Create output variables
    var contractionFound = "";
    var logEntry = "";

    // Get words from search forms
    var wordOne = jQuery("#firstWord").val().trim();
    var wordTwo = jQuery("#secondWord").val().trim();

    // Create phrase to test by combining wordOne and wordTwo with a space

        // Test phrase
        var testPhrase = wordOne + " " + wordTwo;

        // if Test Phrase returns false search phrase with words in reverse order
        var phraseResult = checkForConjunction(testPhrase);
        if(phraseResult == false){
            testPhrase = wordTwo + " " + wordOne;
            phraseResult = checkForConjunction(testPhrase);
        }


    // If return is true
        if(phraseResult != false){
            // Set the output variable to the result
            contractionFound = phraseResult;

            // Set the log variable to wordOne wordTwo and the contraction
            logEntry = "<p>" + wordOne + " " + wordTwo + ": "+phraseResult + "</p>";

        }else{
            // Set the output variable to "None Found"
            contractionFound = "None Found";

            // Set the log variable to wordOne wordTwo and no contraction wrapped in paragraph tags
            logEntry = "<p>" + wordOne + " " + wordTwo + ": No Contraction</p>";

        }

        // Update contractionResult
        jQuery("#contractionResult").text(contractionFound);

        // Add wordOne + wordTwo + result to log
        jQuery(".playAreaResultsLog").append(logEntry);


        // Empty wordOne
        jQuery("#firstWord").val("");

        // Empty wordTwo
        jQuery("#secondWord").val("");


} // end conjunctionFormChecking





function resetAllForms(){

    // Empty Result
    jQuery("#contractionResult").empty();

    // Empty wordOne
    jQuery("#firstWord").val("");

    // Empty wordTwo
    jQuery("#secondWord").val("");

    // Empty the log
    jQuery(".playAreaResultsLog").empty();

} // resetAllForms




jQuery( document ).ready(function() {

        // Bind conjunctionFormChecking to button
        jQuery("#btnCheckConjunction").click(function(e){
            e.preventDefault();
            conjunctionFormChecking();
        });

        // Bind reset to button
        jQuery("#btnReset").click(function(e){
            e.preventDefault();
            resetAllForms();
        });


});