const select = document.querySelectorAll("[data-select]");
if (select.length) {
  select.forEach((item) => {
    const selectCurrent = item.querySelector(".select__current");
    const selectInut = item.querySelector(".select__input");
    const selectOptions = [...item.querySelectorAll("svg")];
   

    selectOptions.map((option) => {
      // const optionIcon = option.querySelector('svg');
      if (option) {
        option.style.pointerEvents = "none";
      }
    });

    if (selectInut) {
      const currentId = selectCurrent.getAttribute("data-id");
      selectInut.setAttribute("value", currentId);
    }

    item.addEventListener("click", (e) => {
      e.preventDefault();
      const el = e.target.dataset.choice;
      const innerSelect = e.target.innerHTML;

      // console.log(innerSelect);

      if (el === "choosen") {
        selectCurrent.innerHTML = innerSelect;
        selectInut.setAttribute("value", e.target.getAttribute("data-id"));
        selectCurrent.setAttribute("data-id", e.target.getAttribute("data-id"));
      }

      item
        .querySelectorAll(`.select__wrapp [data-id]`)
        .forEach(function (item) {
          item.style.display = "flex";
        });

      item.querySelector(
        `.select__wrapp [data-id='${selectInut.getAttribute("value")}']`
      ).style.display = "none";

      item.classList.toggle("active");
    });
    document.addEventListener("click", function (event) {
      if (!item.contains(event.target)) {
        item.classList.remove("active");
      }
    });
  });
}
