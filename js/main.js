let links = document.querySelectorAll('.menu_link a');
for (let i = 0; i < links.length; i++) {
  // console.log(i);
  links[i].addEventListener('click', function (e) {
    e.preventDefault();
    // console.log('a');
    // console.log(this);
    document.querySelector('.dish.show').classList.remove('show');
    document.querySelector(`.dish:nth-child(${i + 2})`).classList.add('show');

  })
}