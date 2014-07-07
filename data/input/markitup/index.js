$(document).ready(function() {
  $('#markItUp').markItUp(mySettings);
  $('.add').click(function() {
  $.markItUp({openWith: '<opening tag>', closeWith: '</closing tag>', placeHolder: "New content"});
  return false;
});
  $('.toggle').click(function() {
  if ($("#markItUp.markItUpEditor").length === 1) {
    $("#markItUp").markItUpRemove();
    $("span", this).text("get markItUp! back");
  } else {
    $('#markItUp').markItUp(mySettings);
    $("span", this).text("remove markItUp!");
  }
  return false;
});
});
