window.addEventListener('scroll', function () {
  let scrollTopBtn = document.querySelector('#scroll-top-btn');
  let footer = document.querySelector('footer');
  let footerTop = footer.getBoundingClientRect().top;

  if (this.window.scrollY == 0) {
    scrollTopBtn.style.display = 'none';
  } else {
    scrollTopBtn.style.display = 'flex';
  }
  if (this.window.innerHeight > footerTop) {
    scrollTopBtn.style.position = 'absolute';
  } else {
    scrollTopBtn.style.position = 'fixed';
  }
});
