$(document).ready(function () {
  var btnMenuMobile = $(".fa-bars");

  $(btnMenuMobile).on("click", function () {
    $(".nav-container ul").toggleClass("open"); //quando não tem uma class o toggle adiocina e quando tem ele tira
  });
});
