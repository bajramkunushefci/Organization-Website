const hamburger = document.querySelector('.siteWrapper .site-header .nav-list .hamburger');
const mobile_menu = document.querySelector('.siteWrapper .site-header .nav-list ul');
const menu_item = document.querySelectorAll('.siteWrapper .site-header .nav-list ul li a');
const header = document.querySelector('.site-header');

hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll',()=>{
    var scroll_position = window.scrollY;
    if(scroll_position > 50) {
        header.style.backgroundColor = "#292826";
    }
    else {
        header.style.backgroundColor = "transparent";
    }
});

menu_item.forEach(item=>{
    item.addEventListener('click',()=>{
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    });
});

// function lockScroll() {
//     document.body.classList.toggle('lock-scroll');
// }