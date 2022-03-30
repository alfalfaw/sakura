const sidebarEl = document.querySelector('.sidebar')

const toggleEl = document.querySelector('.menu-btn i')
const closeEl = document.querySelector('.close-btn i')
const headerEl = document.querySelector('.site-header')
toggleEl.addEventListener('click', () => {
  if (sidebarEl.classList.contains('active')) {
    sidebarEl.classList.remove('active')

  } else {
    sidebarEl.classList.add('active')
    headerEl.classList.remove('active')

  }
})
closeEl.addEventListener('click', () => {
  sidebarEl.classList.remove('active')

})


let ticking = false;
let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop

function onPageScroll (scroll_pos, scroll_ori) {
  // 根据滚动位置做的事
  console.log(scroll_pos, scroll_ori);
  const width = document.body.clientWidth
  if (scroll_ori === 'down' && !sidebarEl.classList.contains('active')) {
    headerEl.classList.add('active')
  }
  if (scroll_pos === 0) {
    headerEl.classList.remove('active')
  }
}

window.addEventListener('scroll', function (e) {
  const st = window.pageYOffset || document.documentElement.scrollTop
  let direction = ''
  if (st > lastScrollTop) {
    direction = 'down'
  } else {
    direction = 'up'
  }
  lastScrollTop = st <= 0 ? 0 : st

  if (!ticking) {
    window.requestAnimationFrame(function () {
      onPageScroll(lastScrollTop, direction);
      ticking = false;
    });
    ticking = true;
  }
});