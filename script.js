const links = document.querySelectorAll('li');
console.log(links);
function activeLink() {
  links.forEach((item) => {
    console.log('yo');
    item.classList.remove('active');
    this.classList.add('active');
  });
}

links.forEach((item) => {
  item.addEventListener('click', activeLink);
});
