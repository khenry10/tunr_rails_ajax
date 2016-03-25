// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

$(document).ready(function(){
  $(".test_ajax_get").on("click", function(){
    $.ajax({
      type: 'GET',
      dataType: 'json',
      url: "http://localhost:3000/artists"
    }).done(function(response) {
      console.log(response);

      for (var i = 0; i<response.length;i++){
        $("ul.artists").append("<li><a href='/artists/" + response[i].id + "'>" + response[i].name + "</a></li>")
      }

    }).fail(function(response){
      console.log("Ajax get request failed.");
    }).always(function(response){
      console.log("Always!");
    })
  })
  $(".test_ajax_post").on("click", function(){
    var photo_url = $("input[class = 'photo_url']").val()
    var name = $("input[class = 'name']").val()
    var nationality = $("input[class = 'nationality']").val()
    $.ajax({
      type: 'POST',
      data: {artist: {photo_url: photo_url, name: name, nationality: nationality}},
      dataType: 'json',
      url: "http://localhost:3000/artists"
    }).done(function(response) {
      console.log(response);
    $("ul.artists").append("<li>" + name + "</li>" + "<li>" + photo_url + "</li>" + "<li>" + nationality + "</li>" )
    }).fail(function(response){
      console.log("Ajax get request failed");
    })
  })
  $(".test_ajax_put").on("click", function(){
    var photo_url = $("input[class = 'photo_url']").val()
    var name = $("input[class = 'name']").val()
    var nationality = $("input[class = 'nationality']").val()
    $.ajax({
      type: 'PUT',
      data: {artist: { photo_url: photo_url, name: name, nationality: nationality}},
      dataType: 'json',
      url: "http://localhost:3000/artists/3"
    }).done(function(response) {
      console.log(response);
    $("ul.artists").append("<li>" + name + "</li>" + "<li>" + photo_url + "</li>" + "<li>" + nationality + "</li>" )
    }).fail(function(response){
      console.log("Ajax get request failed");
    })
  })
  $(".test_ajax_delete").on("click", function(){
    var photo_url = $("input[class = 'photo_url']").val()
    var name = $("input[class = 'name']").val()
    var nationality = $("input[class = 'nationality']").val()
    $.ajax({
      type: 'DELETE',
      data: {artist: { photo_url: photo_url, name: name, nationality: nationality}},
      dataType: 'json',
      url: "http://localhost:3000/artists/5"
    }).done(function(response) {
      console.log(response);
    $("ul.artists").append("<li>" + name + "</li>" + "<li>" + photo_url + "</li>" + "<li>" + nationality + "</li>" )
    }).fail(function(response){
      console.log("Ajax get request failed");
    })
  })
})
