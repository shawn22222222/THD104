let lightbox_el = document.getElementById("lightbox");

// 頁面上的按鈕
let member = document.querySelector(".member");
member.addEventListener("click", function(){
  lightbox_el.classList.remove("none");
});

let btn_modal_close = document.querySelector(".fa-xmark");
btn_modal_close.addEventListener("click", function(){
  lightbox_el.classList.add("none");
});


lightbox_el.addEventListener("click", function(){
  this.classList.add("none");
});

// 點擊 lightbox 中的白色區域，不會關掉 modal
lightbox_el.querySelector("article").addEventListener("click", function(e){
  e.stopPropagation();
});