$(document).ready( () => {
  $(".login").hide()
  $("#already").on("click", function(){
    $("#already").hide();
    $(".register").hide();
    $(".login").show(400);
});
//// add a new list well
  $("#grocery-list").on("focus", ".food-item", function() {
    $("#grocery-list").append(`<div class="input-group">
                                 <span class="input-group-addon">
                                   <input type="checkbox">
                                  </span>
                                  <input type="text" class="form-control food-item" name="food-item">
                               </div>`);
  });
});


// $(() => {
//   // $.ajax({
//   //   method: "GET",
//   //   url: "/api/users"
//   // }).done((users) => {
//   //   for(user of users) {
//   //     $("<div>").text(user.name).appendTo($("body"));
//   //   }
//   // });;
//   $("#grocery-list").on("click", "input:last-of-type", (ev) => {
//     console.log(ev.target);

//     });
//   });

