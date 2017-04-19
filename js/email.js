$("#button_enviar").click(function(){
  var assunto = $("#assunto");
  var msg = $("#msg");
  if(assunto.val() == "" || msg.val() == ""){
    $(".text-alert").fadeIn(1000);
    $(this).removeAttr("href");
  } else {
    var href_value = "mailto:contato@autecjr.com?subject="+ assunto.val() + "&body=" + msg.val();
    //console.log(href_value);
    $(".text-alert").fadeOut(1000);
    $(this).attr("href", href_value);
  }
});
