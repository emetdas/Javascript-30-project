const filterItem = document.querySelector(".items");
const filterImg = document.querySelectorAll(".image");
window.onload = () => {
  filterItem.onclick = (selectItem) => {
    if (selectItem.target.classList.contains("item")) {
      filterItem.querySelector(".active").classList.remove("active");
      selectItem.target.classList.add("active");
      let filterName = selectItem.target.getAttribute("data-name");
      filterImg.forEach((image) => {
        let filterImages = image.getAttribute("data-name");
        if (filterImages == filterName || filterName == "all") {
          image.classList.remove("hide");
          image.classList.add("show");
        } else {
          image.classList.add("hide");
          image.classList.remove("show");
        }
      });
    }
  };
  for (let index = 0; index < filterImg.length; index++) {
    filterImg[index].setAttribute("onclick", "previwe(this)");
  }
};
// open perviwe image
const previweBox = document.querySelector(".previwe-box"),
  previweImg = previweBox.querySelector("img"),
  titleName = document.querySelector(".title-name"),
  closeIcon = previweBox.querySelector(".fa-times"),
  shadow = document.querySelector(".shadow");
function previwe(params) {
  let seletPreviweImg = params.querySelector("img").src;
  let imageCategory = params.getAttribute("data-name");
  titleName.textContent = imageCategory;
  previweImg.src = seletPreviweImg;
  previweBox.classList.add("show");
  shadow.classList.add("show");
  closeIcon.onclick = () => {
    previweBox.classList.remove("show");
    shadow.classList.remove("show");
  };
}
