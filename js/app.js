$(function () {

  // Ventana
  var ww = window.innerWidth;
  var wh = window.innerHeight;
  $("#ventana").width(ww / 2);
  $("#ventana").height(wh / 2);
  $("#ventana").css({ top: wh / 4, left: ww / 4 });

  // Ventana emergente
  $("section > img:first-of-type").dblclick(function () {
    $("#ventana").find("img").remove();
    $("#ventana").css({ display: "flex" });

    $(this).clone().prependTo("#ventana");
  });

  // Botón cerrar
  $("#ventana button").click(function () {
    $(this).parent().find("img").remove();
    $("#ventana").css("display", "none");
  });

  // Fecha
  var months = new Array(
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre"
  );

  var WeekDays = new Array(
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado"
  );

  var date = new Date(); 

  var strDate = months[date.getMonth()] + ", " + date.getFullYear();

  var dateC =
    WeekDays[date.getDay()] +
    ", " +
    date.getDate() +
    " de " +
    months[date.getMonth()] +
    "  de " +
    date.getFullYear();

  $(function () {
    $("footer").append($(`<h4>${strDate}</h4>`));

    $(document).on("mouseenter", "footer h4", function () {
      $(this).text(dateC);
    });
    $(document).on("mouseleave", "footer h4", function () {
      $(this).text(strDate);
    });
  });
});
