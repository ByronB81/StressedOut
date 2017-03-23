var stressCounter = 0;

$(function(){
  $("form#stress-survey").submit(function(event){
    event.preventDefault();

    $("input:checkbox[name=warning]:checked").each(function(){
      var warningInput = $(this).val();
      stressCounter = stressCounter +=1;
    });

    $("input:checkbox[name=symptoms]:checked").each(function(){
      var symptomsInput = $(this).val();
      stressCounter = stressCounter +=2;
    });

    $("input:checkbox[name=coping]:checked").each(function(){
      var copingInput = $(this).val();
      stressCounter = stressCounter -=1;
      console.log(stressCounter);
    });

    if (stressCounter <= 4) {
      $("#stressLow").show();
    }
    else if (stressCounter >= 9) {
      $("#stressHigh").show();
    }
    else {
      $("#stressMed").show();
    }

    $("#stress-survey").hide();
  });
});
