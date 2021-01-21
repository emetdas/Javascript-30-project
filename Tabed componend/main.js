const tabBtn = document.querySelectorAll(".tab-btn");
const btnContainer = document.querySelector(".tab-btn-conainer");
const tabContant = document.querySelectorAll(".tab-contant");

btnContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".tab-btn");
  if (!clicked) return;
  tabBtn.forEach((t) => t.classList.remove("tab-btn-active"));
  tabContant.forEach((c) => c.classList.remove("tab-contant-active"));
  clicked.classList.add("tab-btn-active");
  document
    .querySelector(`.tab-contant-${clicked.dataset.tab}`)
    .classList.add("tab-contant-active");
});
