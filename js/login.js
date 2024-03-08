function validaNome(event) {
   
  var user = $("#user").val();
  var regex = /[^(a-zA-Z\u00C0-\u00FF )]+/i

  user = user.replace(regex, '');

  console.log("nome = " + user);
  $("#user").val(user);
  $("#user").focus();
 
}

