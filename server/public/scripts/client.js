$(document).ready(function() {
  console.log('loading!');
  $("#ajax-data").on("click", getData);

  // load stuff via AJAX
  function getData() {
    $.ajax({
      type: 'GET',
      url: '/data', // http://localhost:5000/data
      beforeSend: function() {
        console.log("hey, i'm about to make a request");
      },
      success: function(data) {
        updateDom(data.people);
      },
      error: function(xhr) {
        console.log('request failed');
      }
    });
  }

  function updateDom(people) {
    $.each(people, function(i, person) {
      console.log("index number: ", i);
      $("#person-container").append('<div class="person"></div>');
      var $el = $("#person-container").children().last();

      $el.append('<h2>' + person.name + '</h2>');
      $el.append('<p>' + person.position + '</p>');
      $el.append('<p>' + person.location + '</p>');
      $el.append('<img src="' + person.imageURL + '" />');
    });
  }

});
