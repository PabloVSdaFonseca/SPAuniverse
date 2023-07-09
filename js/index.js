import { Router } from "./router.js";
const pageHome = document.querySelector('.page-home')
const pageUniverse = document.querySelector('.page-universe')
const pageExploration = document.querySelector('.page-exploration')
const body = document.querySelector('body')

function resetBackground() {
  document.body.classList.remove('home');
  document.body.classList.remove('universe');
  document.body.classList.remove('exploration');
};

function removeSelected() {
  pageHome.classList.remove('selected')
  pageUniverse.classList.remove('selected')
  pageExploration.classList.remove('selected')
}

pageHome.addEventListener('click', () => {
  removeSelected()
  pageHome.classList.add('selected')

  resetBackground();
  document.body.classList.add('home');
})

pageUniverse.addEventListener('click', () => {
  removeSelected()
  pageUniverse.classList.add('selected')

  resetBackground();
  document.body.classList.add('universe')
})

pageExploration.addEventListener('click', () => {
  removeSelected()
  pageExploration.classList.add('selected')

  resetBackground();
  document.body.classList.add('exploration')
})

const router = new Router();
router.add('/', '/Pages/home.html');
router.add('/universe', '/Pages/theUniverse.html');
router.add('/exploration', '/Pages/exploration.html');

router.handle();

window.onpopstate = () => router.handle();
window.route = () => router.route();