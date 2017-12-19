import Router from './router';


console.log(Router);
window.Router = new Router();
window.Router.init()

// const content = document.querySelector('body');

// const changeBgColor = (color) => {
//   content.style.backgroundColor = color
// }

// Router.route('/', function() {
//   changeBgColor('white')
// })

// Router.route('/green', function() {
//   changeBgColor('green')
// })

// Router.route('/blue', function() {
//   changeBgColor('blue')
// })