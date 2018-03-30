var userOutput;
var userInput;
var outputArray = [];



$(document).ready(function() {
  $("form#inputForm").submit(function(event) {
    event.preventDefault();

  function output(userInput) {
    for (var i=0; i<userInput; i++) {
        if (userInput%3 === 0) {
        while ((number.includes(1)) || (number%3 ==0)) {
          userInput = "Beep!"}
      } else if (number.includes(1)){
          while (userInput%3 ==0){
          userOutput = "Boop!"}
      } else if (userInput%3 == 0){
          userOutput = "I'm sorry Dave, I'm afraid I can't do that.";
      }
    }
  }
    var userInput = parseInt($("form#formInput").val());
    var userOutput = output(userInput);



    $("#output").text(userInput);
    $("#result").show();
    $("#hideResult").click(function(){
          $("#result").fadeOut("slow");
          });
  });
});
