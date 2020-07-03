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


const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");

slides.forEach(function(slide,index){
    slide.style.left = `${index *100}%`
})

let counter = 0;

nextBtn.addEventListener("click", function(){
    counter++;
    carousel()
});
prevBtn.addEventListener("click", function(){
    counter--;
    carousel();
});

function carousel(){
    slides.forEach(function(slide){
        // working with slides
        if (counter===slides.length){
            counter=0;
        }
        if(counter<0){
            counter = slides.length - 1
        }

        slide.style.transform = `translateX(-${counter*100}%)`
    })
}