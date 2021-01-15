const btn_open = document.querySelector(".btn-modal-open");
const box_modal = document.querySelector(".modal-box");
const overlay = document.querySelector(".overlay");
const close_btn = document.querySelector(".close-btn");

btn_open.addEventListener("click", () => {
  box_modal.classList.add("open");
  overlay.classList.add("active");
});
close_btn.addEventListener("click", () => {
  box_modal.classList.remove("open");
  overlay.classList.remove("active");
});
