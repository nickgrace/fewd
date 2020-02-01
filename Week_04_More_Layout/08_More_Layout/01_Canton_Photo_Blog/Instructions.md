
### Canton Photo Blog

This exercise is to create the html/css templates based on design mocks for a photography website. It is intended to be created in several stages.  Most of the html has been created but not all of it.

General Notes & Guidelines

####Font Notes:
font-family: 'Lato', sans-serif;
font-family: 'Lora', serif;

####Color Notes:
Sand: #CCB87C
Dark Sand: #332A10
Putty: #E0CA88
BlueButton: #2B3775
Hover: #475CC4
Feature: #22495E
Near-Black: #0F0D05



###Part 1: Finish the HTML

The senior architects have started the page but haven't finish. The remaining tasks are to:
* Link the CSS files
* Add the Google Fonts Lato and Lora. Include all the weights for both fonts.
* The images are currently set to placeholders. Replace them with the actual images (use the alt attributes and titles as guides as to which image goes where)
* The link tag is being used a new way. What is it doing?


###Part 2: Build the Header & Nav

* Edit the header.css
* The header should have a black background
* There should be a 1px border in the feature color at the bottom
* The logo should be no larger than 70px
* There should be at least 10 pixels of space between the content of the header and the top and bottom of the header
* Links should be
** sand color (both visited and unvisited)
** uppercase
** no underline
** fill most of the vertical space of the header
* Links should hover white
* The header should use the font Lato
* It should look like the design mock as much as possible


###Part 3: Style the Core Content

* Edit the postTemplate.html and typography.css
* The content should generally use the font 'Lora' unless otherwise specified
* Unless otherwise specified the line height should be 1.45 lines
* All headers should have:
** The font Lato with the heaviest weight
** Spacing above the header of 20px
** No bottom margin
* H1 -> H3 should have the color "Feature" (see above) and be all uppercase
* Paragraphs that follow headers should have no top margin
* Headers should have the size below:
** h1 - 1.4rem
** h2 - 1.1rem
** h3 - 0.9rem
** h4 - 1rem
** h5 - 0.9rem
** h6 - 0.8rem
* Links should be the color "BlueButton" and "Hover" respectively
* The highlighting should use the color "Sand"
* The q tag should be italic

###Part 4: Create the Two Column Layout for Posts

* Edit the postTemplate.html and layout.css
* The twin column layout should not be wider than 1170px
* The layout should center
* Use flexbox
* There should be 20px between the columns
* The 'content' column should be twice as large as the sidebar column


###Part 5: Style the Sidebar

* Edit the postTemplate.html and layout.css
* Replace the thumbnails as needed with the real thumbnails
* Style the thumbnail so that it is no wider than 120px (be VERY specific - affect no images other than the thumbnails in the articles)
* Thumbnails should have a 1px border of near-black
* There should be at least 10px of space between the thumbnail and the title
* Links should have the same color combination as the links in part 4
* The headers should have a font size of 1rem and a weight of 600 and not uppercase
* The image and headers should have a 1:3 flex ratio
* There should be a 1px border between each entry of the gallery approximately 10px between each entry of the color "near black"


### Canton Photo Blog Part 2

This exercise is to create the html/css templates based on design mocks for a photography website. It is intended to be created in several stages.  Most of the html has been created but not all of it.

General Notes & Guidelines

####Font Notes:
font-family: 'Lato', sans-serif;
font-family: 'Lora', serif;

####Color Notes:
Sand: #CCB87C
Dark Sand: #332A10
Putty: #E0CA88
BlueButton: #2B3775
Hover: #475CC4
Feature: #22495E
Near-Black: #0F0D05



### Part 6 - Finish the HTML

Much like the postTemplate, senior architects have started the page but haven't finish. The remaining tasks are to:
* Link the CSS files (including the fonts)
* Replace the placeholder graphics

### Part 7 - The Featured Image: Planning

Take a look at the singlePhotogallery.html and design mock.  Draw out the containers for the layout of the featured image and gallery navigation section.  Include notes on what sorts of widths, margins, etc. needed. Start thinking about how you will approach targeting the elements in css.

### Part 8 - Build the <Header> of the featured image article

* Open the singlePhotogallery.html and imageGallery.css
* Unless otherwise specified the featured image area should have a color of Near-Black
* The titles and text of this area should have the font Lato
* There should be a 10px line of the color "Feature" that separates the <header> from the rest of the article
* The title of the image (h1) should be a normal weight and 1 rem in size with the color white
* Spacing, alignment, and typography should match the design mock
* There should be a 1px line in the dark sand color between the image title and the prev/next navigation
* The featured image should be no more than 700px tall, not wider than the browser and will shrink if the browser is narrower than the original image file.
* The featured image should center
* The gallery navigation (previous/next) should have a background of black
* It should be evenly divided between the previous and next
* The links should be white with a hover of Putty color
* The typography should match the design mock
* The Image thumbnails should not be taller than 100px 

### Part 9 - Build the content area

* The two column layout below the featured image should not be more than 1170px wide
* There should be 30px of space between the start of the content and the blue divider of the section above
* The content of each column should start at the exact same point and have the same top margin no matter what tag (hint: nested selectors and first-child may be useful here)
* The two columns should have a 3/2 width ratio and 20px of space between them
* The content of the left column should support and use the same content styles that the postTemplate does


### Part 10 - Build the InfoBox

* The Infobox Stats should have the same color as the other H1's in the general content styles
* The Infobox Stats title should be uppercase and 1 rem in size
* Style the definition lists so that they look like the design mock. Note: there should be only one DD/DT pair per line.
* The DT/DD should have a width split of 3/7
* DD's should have a size of 0.9em and a weight of 600
* There should be 20px between the DT and DD
* Definition data should be Dark Sand unless they are linked
* Definition terms should be uppercase
* Terms should be uppercase, with a 800 weight, and have 14px of space
* The links should have the same colors and hovers as the general content styles
* Layout, text, and typography should match the design mock
