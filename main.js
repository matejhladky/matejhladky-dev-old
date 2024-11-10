import { app, analytics } from './firebase.js';
import { getAllArticles, getLatestArticle } from './scripts/articles.js';

sessionStorage.setItem('articles', JSON.stringify(getLatestArticle()));

// const routes = {
//     '/': {
//         name: 'Home',
//         content: `I am in home page`
//     },
//     '/articles': {
//         name: 'Articles',
//         content: `I am in articles page`
//     },
//     '/about': {
//         name: 'About',
//         content: `I am in about page`
//     },
//     '/contact': {
//         name: 'Contact',
//         content: `I am in contact page`
//     },
// };
// 
// const app = document.querySelector('#app');
// const nav = focument.querySelector('#nav');
// 
// const renderNavLinks = () => {
//     const navFragment = document.createDocumentFragment();
//     Object.keys(routes).forEach(route => {
//         const { name } = routes[route];
//         const linkElement = document.createElement('a');
//         linkElement.href = route;
//         linkElement.textContent = linkLabel;
//         linkElement.className = 'nav-link';
//         navFragment.apendChild(linkElement);
//     });
// 
//     nav.append(navFragment);
// };
// 
// const registerNavLinks = () => {
//     nav.addEventListener('click', (e) => {
//         e.preventDefault();
//         const { href } = e.target;
//         history.pushState({}, '', href);
//         navigate(e);
//     };
// };
// 
// const renderContent = route => app.innerHTML = routes[route].content;
// 
// const navigate = e => {
//     const route = e.target.pathname;
//     history.pushState({}, '', route);
//     renderContent(route);
// };
// 
// const registerBrowserBackAndForth = () => {
//     window.onpopstate = function (e) {
//         const route = location.pathname;
//         renderContent(route);
//     };
// };
// 
// const renderInitialPage = () => {
//     const route = location.pathname;
//     renderContent(route);
// }
// 
// (function bootup() {
//     renderNavLinks();
//     registerNavLinks();
//     registerBrowserBackAndForth();
//     renderInitialPage();
// })();
// 
// 
