

const sidebar = document.getElementById("sidebar");
const collapseBtn = document.getElementById("collapseBtn");

collapseBtn.addEventListener("click", () => {
  sidebar.classList.toggle("collapsed");

  const isCollapsed = sidebar.classList.contains("collapsed");
 
  collapseBtn.querySelector("span").style.display = isCollapsed ? "none" : "inline";
});

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


