var imageStart = 0;
var images = ['Fotos/slider2.jpg', 'Fotos/gtrslider.jpg', 'Fotos/evojdm.jpeg', 'Fotos/r34heaven.jpg'];
var pause = 1500;

function slideImage(){
    document.slide.src = images[imageStart];
    
    if(imageStart < images.length - 1){
        imageStart++;
    }else {
        imageStart = 0;
    }
    
    setTimeout("slideImage()", pause);
}
// on window load slideImage() gets called
window.onload = slideImage();