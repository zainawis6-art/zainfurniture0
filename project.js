const slider = document.querySelector('.slider');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

nextBtn.onclick = () => {
  slider.scrollLeft += slider.clientWidth * 0.8; 
}

prevBtn.onclick = () => {
  slider.scrollLeft -= slider.clientWidth * 0.8;
}




