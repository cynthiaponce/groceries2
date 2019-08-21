$(document).ready(function() {
  $("form.form").submit(function(event) {
    var groceryList = ["item1", "item2", "item3", "item4", "item5"];

    for (var index = 0; index < groceryList.length; index += 1) {
      alert("Here is your list:" + groceryList[index]);
    }


    for (var userInput = 0; userInput < "input#" + )




/*
$(document).ready(function() {
  $("form.form").submit(function(event) {
    var groceryList = ["item1", "item2", "item3", "item4", "item5"];

    groceryList.forEach(function(inputVal) {
    var userInput = $("input#" + inputVal).val();
    $("#" + inputVal + "Answer").text(userInput);
    });
*/

    $("#summary").show();

    event.preventDefault();


    //alert(upperCaseList);

  //  var upperCaseList = groceryList.map(function(myList) {
  //    return myList.toUpperCase();

  });
});
