import {
    addCustomClass,
  } from "../functions/customFunctions";
import vars from "../_vars";

const {parrentsImg} = vars;

  function getImgData(input, img) {
    const files = input.files[0];
    if (files) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(files);
      fileReader.addEventListener("load", function () {
        img.style.display = "block";
        img.innerHTML = '<img src="' + this.result + '" />';
      });    
    }
  }

  function getInputsImg(input, img) {

    const files = input.files[0];

    if (files) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(files);
      fileReader.addEventListener("load", function () {
        img.src = this.result;
      });    
    }
  }

  parrentsImg.forEach(function(parrent){
    const chooseFile = parrent.querySelector(".download-image__input");
    const imgPreview = parrent.querySelector(".download-image__preview");
    const icon = parrent.querySelector(".download-image__icon");
   
    chooseFile.addEventListener("change", function () {
      getImgData(chooseFile, imgPreview);
        icon.style.display = "none";
        addCustomClass(parrent.querySelector(".download-image__item"), 'active');
    });
  })

  const inputsFile = document.querySelectorAll('.hero-section__input');

  inputsFile.forEach(function(input){
    const img = input.parentNode.querySelector('img');

    input.addEventListener('change', function(e){
      getInputsImg(input, img);
    })
  })


 