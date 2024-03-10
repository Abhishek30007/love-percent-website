
// function clickfunction(){
//     let win = window.open('signup.html' , 'hii eveeryone','popup,width=400px,height=400px,left=200px,top=60px');
// }
function openwin(ev){
    let win = window.open('signup.html',null,'popup,with=400px,left=400px,top=50px,left=100px');
    alert('hello everyone');
}
var counting = 0
var adding_event = document.querySelector("#count")
var container = document.querySelector("#box1")
var icon = document.querySelector("#imogi")
icon.addEventListener("click" , function(){
    icon.style.transform = 'translate(-100px,-100px)scale(6)'
    icon.style.opacity=1
    setTimeout(function(){
        icon.style.transform = 'translate(-1px,-1px) scale(1)'
        icon.style.opacity=1
        
    },1000)
    counting = counting +1 ;
    adding_event.innerHTML = counting



})
var counting2 = 0
var adding_event = document.querySelector("#count")
var container = document.querySelector("#box1")
var icon = document.querySelector("#imogi2")
icon.addEventListener("click" , function(){
    icon.style.transform = 'translate(-100px,-100px)scale(6)'
    icon.style.opacity=1
    setTimeout(function(){
        icon.style.transform = 'translate(-1px,-1px) scale(1)'
        icon.style.opacity=1
        
    },1000)
    counting2 = counting2 +1 ;
    adding_event.innerHTML = counting2



})




// var container = document.querySelector("#container")
// var icon = document.querySelector("i")
  
// container.addEventListener("dblclick" , function(){
//     icon.style.transform = ' translate(-50%,-50%) scale(3)'
//     icon.style.color="red "
//     icon.style.opacity=0.8
//     setTimeout(function(){
//         icon.style.transform = 'translate(70px,90px) scale(0.7)'
//         icon.style.opacity=0.4 
        
//     },2000)
// })