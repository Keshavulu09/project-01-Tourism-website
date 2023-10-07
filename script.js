let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-Container');


searchBtn.addEventListener('click', () =>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});
