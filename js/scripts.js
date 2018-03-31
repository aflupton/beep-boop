//define variables
var userOutput;
var userInput;

//transform function
function output(num) {
  if (num%3 !== 0 && num === 0 && num !==1 || num.includes == 0) {
    return "Beep!";
  } else if (num%3 !==0 || num.includes == 1) {
    return "Boop!";
  } else if (num%3 ===0 && num !==0) {
    return "I'm sorry Dave, I'm afraid I can't do that!";

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
    if(!userInput || userInput == 0) {
      alert ("That's not a valid number");
      $("#result").hide();
    }

    //hide result
    $("#hideResult").click(function(){
          $("#result").hide();
    });
    //end
  });
});
