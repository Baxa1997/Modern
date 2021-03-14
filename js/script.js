let menuBtn = document.querySelector('.header_burger');
let headerMenu = document.querySelector('.header_menu');
let menuOpen = false;

menuBtn.addEventListener('click', () =>{
   if (!menuOpen) {
       menuBtn.classList.add('active');
       headerMenu.classList.add('active');
       menuOpen = true;
   } else {
       menuBtn.classList.remove('active');
       headerMenu.classList.remove('active');
       menuOpen = false;
   }
});