// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
  $("form[name='order']").validate({
    rules: {
      ca: "required",
      messages: {
        required: "Required input",
        minlength: "This field is necessary"
      }
    }
  });

  $(".update-drink").on("click", function (event) {
    var id = $(this).attr('data-id');

    // Send the PUT request.
    $.ajax(`/api/coffee/${id}/0`, {
      type: "PUT",
    }).then(
      function () {
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });


  $(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newCoffee = {
      name: $("#ca").val().trim(),
      drink: 1
    };
    // if (data){
    // Send the POST request.
    $.ajax("/api/coffee", {
      type: "POST",
      data: newCoffee
    }).then(
      function () {
        console.log("created new order");
        // Reload the page to get the updated list
        location.reload();
      }
    );
    // } else return;
  });
});
