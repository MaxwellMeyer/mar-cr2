//let userName = prompt("Please enter a UserName:")
$(document).ready(function() {
  $("#response").submit(function(event) {
    event.preventDefault();
    const a1 = $("#ans1").val().length;
    const a2 = $("#ans2").val().length;
    const a3 = $("#ans3").val().length;
    const a4 = $("#ans4").val().length;
    const a5 = $("#ans5").val().length;
    const theAnswers = a1 + a2 + a3 + a4 + a5;
    let yourLang = "";
      if (theAnswers < 15) 
        {yourLang = userName + ", " + "here is an answer";}
      else if (theAnswers === 37) 
        {yourLang = userName + ", " + "another answer";}
      else if (theAnswers <= 25) 
      {yourLang = userName + ", " + "answer 3";}
      else if (theAnswers <= 50)
      {yourLang = userName + ", " + "answer 4"}
      else if (theAnswers <= 100)
      {yourLang = userName + ", " + "answer 5"}
      else if (theAnswers > 100)
      {yourLang = userName + ",  " + "answer 6"}
      $("#result").text(yourLang);
      $("#results").show();
  });
});
