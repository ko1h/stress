$(document).ready(function(){
  $("form#stress").submit(function(event){
    event.preventDefault();
    $("#results").show();
    $("input:checkbox[name=symptoms]:checked").each(function(){
      var picked = $(this).val();
      $("#results").append("<li>" + picked + "</li>")
    });
    });
  });
