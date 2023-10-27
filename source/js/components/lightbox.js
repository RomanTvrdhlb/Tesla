import _vars from '../_vars';
import '../vendor/lightbox';
import '../vendor/lg-video';

const videos = [...document.querySelectorAll('.pay-video')];

  videos.map(function(video){
    lightGallery(video,{
      controls: 0,
      showinfo: 0,
      rel: 0
    })
})