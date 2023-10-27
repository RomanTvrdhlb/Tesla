import '../vendor/lightbox';
import '../vendor/lg-video';
import vars from "../_vars";

const {ourProductGallery, videoBox} = vars;

ourProductGallery.forEach(item => {
  lightGallery(item,{
    download:false
  });
})

videoBox.forEach(item => {
  lightGallery(item,{
    download:false
  });
})

