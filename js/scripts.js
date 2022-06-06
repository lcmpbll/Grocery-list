const groceryItems = [];

$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    let item = $("#grocery").val();
    $(groceryItems.push(item));
    $("#grocery").val("");
    return groceryItems;
  });

  $("#show-list").click(function(event) {
    event.preventDefault();
    $("#formOne").hide();
    $("#list").show();
    let itemList = [];
    groceryItems.forEach(function(item){
      itemList.push(item.toUpperCase());
    });
    itemList.sort();
    console.log(itemList);
    itemList.forEach(function(item) {
      $("#list").append("<li>" + item + "</li>");
    });
  });
});

