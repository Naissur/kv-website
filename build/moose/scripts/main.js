var didScroll=false;var hamburgerMenu=document.querySelector(".nav__icon");var docker=document.querySelector(".nav");var overlay=document.querySelector(".nav__overlay");docker._hidden=true;docker.style.transition="left 0.5s";hamburgerMenu.addEventListener("click",function(){docker.style.left="0";docker._hidden=false;overlay.style.height="100%";overlay.style.opacity="0.8"});overlay.addEventListener("click",function(){docker.style.left="-400px";docker._hidden=true;overlay.style.opacity="0";var a=function(){overlay.style.height="0";overlay.removeEventListener("transitionend",a)};overlay.addEventListener("transitionend",a)});window.onscroll=doThisStuffOnScroll;function doThisStuffOnScroll(){didScroll=true}setInterval(function(){if(didScroll){didScroll=false;var b=document.documentElement.scrollTop||document.body.scrollTop;if(b>100){hamburgerMenu.style.display="block";hamburgerMenu.style.opacity="1.0"}else{hamburgerMenu.style.opacity="0.0";var a=function(){hamburgerMenu.style.display="none";hamburgerMenu.removeEventListener("transitionend",a)};hamburgerMenu.addEventListener("transitionend",a)}}},300);