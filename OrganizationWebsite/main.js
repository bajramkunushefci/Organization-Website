// $(document).ready(function(){
//     // Add smooth scrolling to all links
//     $("a").on('click', function(event) {
  
//       // Make sure this.hash has a value before overriding default behavior
//       if (this.hash !== "") {
//         // Prevent default anchor click behavior
//         event.preventDefault();
  
//         // Store hash
//         var hash = this.hash;
  
//         // Using jQuery's animate() method to add smooth page scroll
//         // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
//         $('html, body').animate({
//                 scrollTop: $(hash).offset().top
//             }, 800, function(){
     
//           // Add hash (#) to URL when done scrolling (default click behavior)
//           window.location.hash = hash;
//         });
//       }; // End if
//     });
// });

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