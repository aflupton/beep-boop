//define variables
var userOutput;
var userInput;

//transform function
function(userInput) {
  if (number%3 !== 0 || number === 0) {
    return "Beep!"
  } else if (number.includes (1) && number%3 !==0 || number == 1) {
    return "Boop!"
  } else if (number%3 ===0) {
    return "I'm sorry Dave, I'm afraid I can't do that."
  }
};


$(document).ready(function() {
  $("form#inputForm").submit(function(event) {
    event.preventDefault();

    //take input from user
    var userInput = parseInt($("input#number").val());
    var userOutput = output;
    //bounce non-numbers
    if(!userInput) {
      alert ("That's not a valid number");
    }


    //show result
    $("#output").text(userOutput);
    $("#result").show();
    //hide result
    $("#hideResult").click(function(){
          $("#result").hide();
    });
    //end
  });
});
