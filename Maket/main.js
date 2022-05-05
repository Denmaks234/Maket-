const dot1= document.getElementById("dot1")
const dot2= document.getElementById("dot2")
const dot3= document.getElementById("dot3")
const dot4= document.getElementById("dot4")
const sayDot1= document.getElementById("say__dot1")
const sayDot2= document.getElementById("say__dot2")
const sayDot3= document.getElementById("say__dot3")
const sayDot4= document.getElementById("say__dot4")
const sliderLine= document.getElementById('about__slider__line')
const saySliderLine= document.getElementById('say__slider__line')
let offset=0
let itemsSlider=0
dot1.addEventListener("click", function(){
    sliderLine.style.left=0
    dot1.classList.toggle("active")
    dot2.classList.remove("active")
    dot3.classList.remove("active")
    dot4.classList.remove("active")
})
dot2.addEventListener("click", function(){
    sliderLine.style.left=-442+"px"
    dot2.classList.toggle("active")
    dot1.classList.remove("active")
    dot3.classList.remove("active")
    dot4.classList.remove("active")
})
dot3.addEventListener("click", function(){
    sliderLine.style.left=-884+"px"
    dot3.classList.toggle("active")
    dot1.classList.remove("active")
    dot2.classList.remove("active")
    dot4.classList.remove("active")
})
dot4.addEventListener("click", function(){
    sliderLine.style.left=-1362+"px"
    dot4.classList.toggle("active")
    dot1.classList.remove("active")
    dot3.classList.remove("active")
    dot2.classList.remove("active")
})
sayDot1.addEventListener("click", function(){
    saySliderLine.style.left=0
    saySliderLine2.style.left=0+"px"

})
sayDot2.addEventListener("click", function(){
    saySliderLine.style.left=-362+"px"
    saySliderLine2.style.left=-600+"px"
})
sayDot3.addEventListener("click", function(){
    saySliderLine.style.left=-724+"px"
    saySliderLine2.style.left=-1200+"px"
})
sayDot4.addEventListener("click", function(){
    saySliderLine.style.left=-1086+"px"
    saySliderLine2.style.left=-1800+"px"
})
const descr = document.getElementById("descr")
const serviseButton = document.getElementsByClassName("servise__item__button")
const serviseButtonClose = document.getElementsByClassName("servise__item__descr__button1__img")
const serviseText = document.getElementsByClassName("servise__item__text")
for(i=0;i<serviseButton.length;i++){serviseButton[i].addEventListener("click", function(){
 this.parentNode.nextElementSibling.style.display="block"
})}
for(i=0;i<serviseButtonClose.length;i++){serviseButtonClose[i].addEventListener("click", function(){
    this.parentNode.parentNode.style.display="none"
   })}


//    slider2
const sliderButton2=document.getElementById("say__slider2__button1")
const sliderButton1=document.getElementById("say__slider2__button")
const saySliderLine2=document.getElementById("say__sliderLine")
sliderButton2.addEventListener("click",function(){
    itemsSlider=itemsSlider+362;
   offset=offset+600;
   if(offset>1800){
       offset=0
   }  
   if(itemsSlider>1086){
        itemsSlider=0
    }
   saySliderLine2.style.left=-offset+"px" 
   saySliderLine.style.left=-itemsSlider+"px"
})
sliderButton1.addEventListener("click",function(){
    itemsSlider=itemsSlider-362;
    offset=offset-600;
    if(offset<0){
        offset=1800
    }
    if(itemsSlider<0){
        itemsSlider=1086;
    }
  
    saySliderLine2.style.left=-offset+"px"
    saySliderLine.style.left=-itemsSlider+"px"
   
 })