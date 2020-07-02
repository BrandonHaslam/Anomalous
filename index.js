// let navbar = document.querySelector(".navbar");

// document.addEventListener("scroll", function(){
//     navbar.classList.add("white")
// })
// copyright update
copyrightDate = document.getElementById("date");
let date = new Date();
let year = date.getFullYear();
let day = date.getDay();
copyrightDate.innerText = year;
