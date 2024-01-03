// 漢堡選單
let fabars = document.querySelector('.fa-bars')
let ul = document.querySelector('.top-nav_ul')
fabars.addEventListener('click', function(){
  
  ul.classList.toggle("-on")
})
document.querySelector('main').addEventListener('click',function(){
  ul.classList.remove("-on")
})
