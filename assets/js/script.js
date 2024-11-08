document.addEventListener('DOMContentLoaded', function () {
  const glide = new Glide('.glide', {
      type: 'slider',
      startAt: 0,
      perView: 1
  });

  glide.mount();
});