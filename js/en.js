let slide_img = document.querySelectorAll('.slide_img');
let banner_img = document.querySelector('.banner_img');
let right = document.querySelector('.fa-chevron-right');
let left = document.querySelector('.fa-chevron-left');
let indicators = document.querySelector('.indicators')


let i = 0;

let auto = setInterval(function () {
  right.click()
}, 3000)
banner_img.addEventListener('mouseenter', function () {
  clearInterval(auto);
})
right.addEventListener('mouseenter', function () {
  clearInterval(auto);
})
left.addEventListener('mouseenter', function () {
  clearInterval(auto);
})
banner_img.addEventListener('mouseleave', function () {
  clearInterval(auto);
  auto = setInterval(function () {
    right.click()
  }, 3000)
})


right.addEventListener('click', function (e) {
  e.stopPropagation();
  i++;
  if (i >= slide_img.length) {
    i = 0;
  }
  document.querySelector('.slide_img.active').classList.remove('active');
  document.querySelector(`.slide_img:nth-child(${i + 1})`).classList.add('active');
  document.querySelector('.slide.light').classList.remove('light');
  document.querySelector(`.slide:nth-child(${i + 1})`).classList.add('light');
})



left.addEventListener('click', function () {
  i--;
  if (i < 0) {
    i = slide_img.length - 1;
  }
  document.querySelector('.slide_img.active').classList.remove('active');
  document.querySelector(`.slide_img:nth-child(${i + 1})`).classList.add('active');
  document.querySelector('.slide.light').classList.remove('light');
  document.querySelector(`.slide:nth-child(${i + 1})`).classList.add('light')
})





