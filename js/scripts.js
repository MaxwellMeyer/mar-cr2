$(document).ready(function() {
  $("#response").submit(function(event) {
    event.preventDefault();
    let userName = $("#unm").val().toUpperCase();
    const a1 = $("#ans1").val().length;
    const a2 = $("#ans2").val().length;
    const a3 = $("#ans3").val().length;
    const a4 = $("#ans4").val().length;
    const a5 = $("#ans5").val().length;
    const theAnswers = a1 + a2 + a3 + a4 + a5;
    let yourLang = "";
      if (theAnswers < 15) 
        {yourLang = userName + "  it sounds like you should study C#!!!";}
      else if (theAnswers === 37) 
        {yourLang = userName + "  if I were you, I'd strongly consider quitting your job and going straight to the casino!";}
      else if (theAnswers <= 25) 
      {yourLang = userName + "  it sounds like you should choose ANY language EXCEPT javascript...";}
      else if (theAnswers <= 50)
      {yourLang = userName + "  dont think, just study RUBY!!!"}
      else if (theAnswers <= 100)
      {yourLang = userName + "  you would be a perfect match for JAVA!"}
      else if (theAnswers > 100)
      {yourLang = userName + "  PYTHON!!  There's your answer...  it's python..."}
      $("#result").text(yourLang);
      $("#results").show();
      
  });
});
