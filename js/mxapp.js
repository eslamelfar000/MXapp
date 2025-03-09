// open setting box when click on the icon
document.querySelector('.contain .fa-cog').onclick = function() {

    document.querySelector('.setting-box').classList.toggle('open');

};

let mainColors = localStorage.getItem('color_option');

if (mainColors !== null) {

    document.documentElement.style.setProperty('--main-color', localStorage.getItem('color_option'));

}


// changa web page color
const colorList = document.querySelectorAll('.color-list li');

colorList.forEach(li => {

    li.addEventListener('click', (eve) => {

        document.documentElement.style.setProperty('--main-color', eve.target.dataset.color);

        localStorage.setItem('color_option', eve.target.dataset.color);

        // Remove active class fom all children
        eve.target.parentElement.querySelectorAll('.active').forEach(element => {

            element.classList.remove('active');

        });

        eve.target.classList.add('active');

    });
});




// const Imgs = document.querySelector('.carousel_box');
// const Btns = document.querySelectorAll('.button');
// const numOfImgs = document.querySelectorAll('.carousel_box img');
// let imageIndex = 1;
// let translateX = 0;


// Btns.forEach(button =>{
//     button.addEventListener('click', event =>{
//         if(event.target.id === 'previous'){
//             if(imageIndex !== 1){
//                 imageIndex--;
//                 translateX += 396;
//             }
//         }else {
//             if(imageIndex !== numOfImgs){
//                 imageIndex++;
//                 translateX -= 396;
//             }
//         }

//         Imgs.style.transform = 'translateX(${translateX}px)';
//     });
// });


// $('.carousel').slick({
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//   });


// const ul = document.querySelector('.slider');
// const btn = document.querySelector('.slick-arrow')

// ul.onscroll= function() {
//     btn.style.display ="block"
// }



let video = document.querySelector('.icon');

video.onclick = function() {

    let overlay = document.createElement('div');

    overlay.className = 'popup-overlay';

    document.body.appendChild(overlay);

    let popupBox = document.createElement("div");

    popupBox.className = 'popup-box';

    let closeButton = document.createElement('span');

    let closeButtonText = document.createTextNode('x');

    closeButton.appendChild(closeButtonText);

    closeButton.className = 'close-button';

    popupBox.appendChild(closeButton);

    let popupImg = document.createElement("iframe");

    popupImg.src = "pics/Working at Envato.mp4";
    popupImg.frameBorder = "0"

    popupBox.appendChild(popupImg).classList.add('myvideo');

    document.body.appendChild(popupBox);
}

document.addEventListener("click", function(e) {

    if (e.target.className == "close-button") {

        e.target.parentNode.remove();

        document.querySelector('.popup-overlay').remove();

    }


});


const Nav = document.querySelector('.navbar');
var myButton = document.getElementById('scroll');
var myNav = document.getElementById('navB');

window.onscroll = function() {

    'use strict';

    if (window.pageYOffset >= 30) {

        Nav.style.boxShadow = "0px 0px 50px 10px #0000001a";

    } else {
        Nav.style.boxShadow = "none";
    }

    // __________________________________________________

    //function to scroll to up in the page

    if (window.pageYOffset >= 300) {

        myButton.style.display = 'block';

    } else {

        myButton.style.display = 'none';

    };

};




// const allLinks = document.querySelectorAll('.i');
// const box = document.getElementById('navbarNav');


// allLinks.forEach(link => {

//     link.addEventListener("click", (e) => {

//         e.preventDefault();

//         document.querySelector(e.target.dataset.section).scrollIntoView({

//             behavior: "smooth"

//         });

//     });

//     link.onclick = function() {
//         box.classList.remove('show');
//     }

// });


// const Link = document.querySelectorAll('.down');

// Link.forEach(link => {

//     link.addEventListener("click", (e) => {

//         e.preventDefault();

//         document.querySelector(e.target.dataset.section).scrollIntoView({

//             behavior: "smooth"


//         });

//     });

//     link.onclick = function() {
//         box.classList.remove('show');
//         link.style.color = "white"
//     }

// });

// const Links = document.querySelectorAll('.accord');

// Links.forEach(link => {

//     link.addEventListener("click", (e) => {

//         e.preventDefault();

//         document.querySelector(e.target.dataset.section).scrollIntoView({

//             behavior: "smooth"


//         });

//     });

// });

document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

    // Function to remove active class from all links and add it to the clicked one
    function setActiveLink(link) {
        navLinks.forEach(nav => nav.classList.remove("active"));
        link.classList.add("active");
    }

    // Click event for each nav link
    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            setActiveLink(this);
        });
    });

    // Function to update active link on scroll
    function updateActiveOnScroll() {
        let scrollPosition = window.scrollY + 100; // Adjust for navbar height

        navLinks.forEach(link => {
            const section = document.querySelector(link.dataset.section);
            if (section) {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;

                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    setActiveLink(link);
                }
            }
        });
    }

    // Scroll event listener
    window.addEventListener("scroll", updateActiveOnScroll);
});
