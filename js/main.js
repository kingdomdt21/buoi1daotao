function form_add() {
  document.getElementById("modalAdd").style.display = "flex";
}

function closeModal() {
  document.getElementById("modalAdd").style.display = "none";
}


window.onclick = function (event) {
  const modal = document.getElementById("modalAdd");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
