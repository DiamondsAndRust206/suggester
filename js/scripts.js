$(document).ready(function() {
    $("form#triangle").submit(function(event) {
    event.preventDefault();
    const question1Input = $("select#question1").val()
    const question2Input = $("select#question2").val()
    const question3Input = $("select#question3").val()
    const question4Input = $("select#question4").val()
    const question5Input = $("select#question5").val()

    $("button#message").click(function() {
      $("p").prepend("<p>Python</p>");
      $("#message").show();
    });
    
  });
  });