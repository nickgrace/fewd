function selectPet(petType){

    // Get the specific pet data set
    var thisPetData = petData[petType];

    // Set the title
    jQuery(".petsDisplayName").text(thisPetData['displayName']);



    // Empty the specification data
    jQuery(".petsDataSpecs").empty();

    // Add the space required, size, weight
    var newSpec = "<dt>Size</dt><dd>"+thisPetData['size']+"</dd>";
    newSpec = newSpec + "<dt></dt><dd></dd>";

    jQuery(".petsDataSpecs").append(newSpec);

    // Add logic to add the trainability and lap size images


    // Add the foods (may require loop)
    var foods = "<dt>Foods</dt><dd><ul>"

    for(var b=0;b<thisPetData.foods.length;b++){
       foods = foods + "<li>"+ thisPetData['foods'][b] +"</li>"; 
    }

    foods = foods + "</ul></dd>";
    jQuery(".petsDataSpecs").append(foods);


    // Update the images

        // Set the main image
        jQuery(".photoHaus .photoLarge").attr("src",thisPetData.images[0].img);
        jQuery(".photoHaus .photoLarge").attr("alt",thisPetData.images[0].alt);

        // Empty the thumbnails
        jQuery(".thumbHaus").empty();

        // Add the thumbnails
        var thumbnailsHTML = "";
        for(var i=0;i<thisPetData.images.length;i++){

            thumbnailsHTML +=
                "<a href=\""+thisPetData.images[i].img+"\"><img class=\"photoThumb\" src=\""+thisPetData.images[i].thumb+"\" alt=\""+thisPetData.images[i].alt+"\"/></a>";


        }
        jQuery(".thumbHaus").append(thumbnailsHTML);



        // Apply the click event to thumbnails (note - this will likely need to be applied to the a and not the img direclty)

        jQuery(".photoThumb").on("click",function(e){
            e.preventDefault();
            var theSrc = jQuery(this).parents('a').attr('href');
            var theAlt = jQuery(this).attr('alt');
            jQuery(".photoHaus .photoLarge").attr("src",theSrc);
            jQuery(".photoHaus .photoLarge").attr("alt",theAlt);
        });


    // Empty the ideal for

    // Insert the ideal for


    // Empty the Adoption Groups

    // Add the adoption groups


}// end selectPet



jQuery(document).ready(function(){

    // Initial run
    selectPet("dog");
    //Update whenever a new value is picked
    jQuery(".myClass").on("change",function(){});
});






