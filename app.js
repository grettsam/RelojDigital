var dias = ["Lun", "Mar", "Mie", "Jue", "Vie", "Sab", "Dom"];
var mes = [
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
  "Diciembre",
];

let tiempo = () => {
  let fechaHora = new Date();

  let hora = `${formatoHora(fechaHora.getHours())}:${formatoHora(
    fechaHora.getMinutes()
  )}:${formatoHora(fechaHora.getSeconds())}`;

  let fecha = `${dias[fechaHora.getUTCDay() - 1]}, ${fechaHora.getDay()} ${
    mes[fechaHora.getMonth() - 1]
  }`;

  document.getElementById("reloj").classList.toggle("colorOpacity");
  document.getElementById("hora").innerHTML = hora;
  document.getElementById("fecha").innerHTML = fecha;
};

let formatoHora = (hora) => {
  if (hora < 10) {
    hora = "0" + hora;
  }
  return hora;
};

setInterval(tiempo, 1000);
