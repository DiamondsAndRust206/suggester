$(document).ready(function() {
  $("form#triangle").submit(function(event) {
  event.preventDefault();
  const firstQuestion = $("#question1").val();
  const secondQuestion = $("#question2").val();
  const thirdQuestion = $("#question3").val();
  const fourthQuestion = $("#question4").val();
  const fifthQuestion = $("#question5").val();
  
  if(firstQuestion === "coffee" && secondQuestion === "dogs" && thirdQuestion === "summer" && fourthQuestion === "heights" && fifthQuestion === "swimming") {
    $("#python").show();
  }
});
})