$(document).ready(function() {
  $("form.form").submit(function(event) {
    var groceryList = ["item1", "item2", "item3", "item4", "item5"];
    var emptyList= []
    emptyList.push($("#item1").val());
    emptyList.push($("#item2").val());
    emptyList.push($("#item3").val());
    emptyList.push($("#item4").val());
    emptyList.push($("#item5").val());

    for (var index = 0; index < emptyList.length; index += 1) {
      $("ul#list").append("<li>" + emptyList[index] + "</li>");

    }






  $("#summary").show();

  event.preventDefault();

/* This displays refactoring with forEach

            $(document).ready(function() {
              $("form.form").submit(function(event) {
                var groceryList = ["item1", "item2", "item3", "item4", "item5"];

                groceryList.forEach(function(inputVal) {
                var userInput = $("input#" + inputVal).val();
                $("#" + inputVal + "Answer").text(userInput);
                });

*/




    /*  This is the original method of collecting the user input and later displaying it (not DRY code)

                  $(document).ready(function() {
                    $("form.form").submit(function(event) {
                    var item1Response = $("input#item1").val();
                    var item2Response = $("input#item2").val();
                    var item3Response = $("input#item3").val();
                    var item4Response = $("input#item4").val();
                    var item5Response = $("input#item5").val();

                    $("#summary").show();
                    $("#input1Answer").text(item1Response);
                    $("#input2Answer").text(item2Response);
                    $("#input3Answer").text(item3Response);
                    $("#input4Answer").text(item4Response);
                    $("#input5Answer").text(item5Response);

    */

  });
});
