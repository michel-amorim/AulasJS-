const form = document.querySelector("#form");

form.addEventListener("Submit", function (event) {
  event.preventDefault();
  console.log("Evento previnido.");
});
