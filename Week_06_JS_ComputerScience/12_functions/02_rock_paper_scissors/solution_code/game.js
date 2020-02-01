// Create a function that determines the computer choice.  It should return one of the three values: 'rock', 'paper', or 'scissors'
function computerChoice() {
    var random = Math.random();
    if (random < 0.333) {
        return  'rock';
    } else if(random < 0.67777) {
        return 'paper';
    } else {
        return 'scissors';
    }
};


/* Create a function that compares the user's selection to the computer's selection.  It should then output the opponent's choice to #computerSelection and display who is the winner.

 */
function compare(me, opponent) {

    jQuery('#computerSelection').text(opponent);

    if(me===opponent){
        return 'Tie';
    } else if(me === 'rock') {

        if (opponent === 'paper') {
            return 'My rock lost to paper :(';
        } else if (opponent === 'scissors') {
            return 'My rock crushed scissors! >:)';
        }

    } else if (me === 'paper') {

        if (opponent === 'rock') {
            return 'My paper beat rock :)';
        } else if (opponent === 'scissors') {
            return 'My paper got cut by scissors! >:)';
        }
    } else if (me === 'scissors') {

        if (opponent === 'paper') {
            return 'My scissor beat paper :(';
        } else if (opponent === 'rock') {
            return 'My scissor got crushed! >:)';
        }
    } else {
        return "That doesn't make any sense!"
    }
};


jQuery( document ).ready(function() {

    // Bind a click event onto each of the three buttons.  It should run the compare function and then put the result to the #decsision id in the html
jQuery("#scissors").on('click', function(){
  var result = compare('scissors', computerChoice());
  jQuery("#decision").html(result);
});

jQuery('#rock').on('click', function(){
  var result = compare('rock', computerChoice());
  jQuery("#decision").html(result);
});

jQuery('#paper').on('click', function(){
  var result = compare('paper', computerChoice());
  jQuery("#decision").html(result);
});

});
