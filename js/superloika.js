var top_social = document.getElementById('top_social');
var bottom_social = document.getElementById('bottom_social');

var top_nav = document.getElementById('top_nav');
var bottom_nav = document.getElementById('bottom_nav');

bottom_social.innerHTML = top_social.innerHTML;
bottom_nav.innerHTML = top_nav.innerHTML;

// May 28, 2020
let el_year = document.getElementById('year');
let curYear = new Date();
el_year.innerText = curYear.getFullYear();