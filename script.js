let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelecctor('.search-bar-container');

window.onscroll = () =>{
    searchBtn.classList.remove('fa-times');
    searchBtn.classList.remove('active');


}

searchBtn.addEventListener('click', () =>{
    searchBtn.classList.toggle('fa-times');
    searchBtn.classList.toggle('active');

});