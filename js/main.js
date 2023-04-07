"use strict"


let menuToggle = document.querySelector(".toggle");
let menuActive = document.querySelector(".active");

let divMenu =document.getElementById("divMenu");

let close = document.querySelector(".close")



menuToggle.addEventListener('click' , e => {
    menuToggle.classList.toggle ("active")
    divMenu.classList.toggle ("close")
    
})


