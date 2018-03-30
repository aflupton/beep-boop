var userInput;



$(document).ready(function() {
  $("form#inputForm").submit(function(event) {
    event.preventDefault();

    var userInput = $("form#formInput").val();


    $("#output").text(userInput);
    $("#result").show();
