var slideIndex = 1;
showSlides(slideIndex);
function currentSlide(n){
    showSlides(slideIndex = n);
}
function plusSlides(n){
    showSlides(slideIndex += n);
}
function showSlides(n){
    var i;
    var slides = document.getElementsByClassName("slides"); 
    var slidesText = document.getElementsByClassName("contador"); 
    var dots = document.getElementsByClassName("demo");

    if(n > slides.length) {slideIndex = 3}
    if(n < 1) {slideIndex = 1;}
    for(i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
        slidesText[i].style.display = "none";
    }
    for(i = 0; i < dots.length; i++){
        dots[i].className =  dots[i].className.replace(" active", "");
    }

    slides[slideIndex-1].style.display = "block";
    slidesText[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}