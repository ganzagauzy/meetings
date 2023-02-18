let menubar = document.querySelector('#toggle');
let mynav = document.querySelector('.navbar-navbar');


menubar.onclick = () =>{
    console.log("hi");
    // menubar.classList.toggle('fa-times')
    mynav.classList.toggle('active');
}