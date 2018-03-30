//define variables
var userOutput;
var userInput;
var userArray =[];

//transform function
function output(userInput) {
  if (userInput%3 !== 0 || userInput === 0) {
    return "Beep";
  } else if (number.includes (1) && userInput%3 !==0 || userInput == 1) {
    return "Boop";
  } else if (userInput%3 ===0) {
  return "I'm sorry Dave, I'm afraid I can't do that.!";

  }
};


$(document).ready(function() {
  $("form#inputForm").submit(function(event) {
    event.preventDefault();

    //take input from user
    var userInput = parseInt($("input#number").val());
    var userOutput = output(userInput);
    //bounce non-numbers


    //show result
    $("#output").text(userOutput);
    $("#result").show();
    if(!userInput) {
      alert ("That's not a valid number");
      return "";
    }

    //hide result
    $("#hideResult").click(function(){
          $("#result").hide();
    });
    //end
  });
});
