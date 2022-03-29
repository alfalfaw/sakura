const sidebarEl = document.querySelector('.sidebar')

const toggleEl = document.querySelector('.menu-btn i')
const closeEl = document.querySelector('.close-btn i')
const headerEl = document.querySelector('.site-header')
toggleEl.addEventListener('click', () => {
  if (sidebarEl.classList.contains('active')) {
    sidebarEl.classList.remove('active')

  } else {
    sidebarEl.classList.add('active')

  }
})
closeEl.addEventListener('click', () => {
  sidebarEl.classList.remove('active')

})