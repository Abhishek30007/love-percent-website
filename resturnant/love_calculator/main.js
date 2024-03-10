// var n = Math.random();

// n = n * 100 ;
// n = Math.floor(n) ;
// var h1 = document.querySelector("h1");
// h1.innerHTML = n + "%";
// var naam = document.querySelector("name");
// document.querySelector(".final_button").addEventListener("click",function(){
//     const fixed_num = n ;
//     // h1.innerHTML = n + "%";
//     // h1.style.display(2000);
// })
// var test = document.querySelector("#signup") 
// var rotate_deg = 0
// var color_fill = document.querySelector("#calculator_fill")
// document.querySelector("#calculator").addEventListener("mouseenter",function(){
   
// })
// console.log(n)




function a(event){
    var char = event.which ;
    if( char > 31 && char != 32 && (char < 65 || char > 90 ) && (char < 97 || char > 127)) {
        return false ;
    }
}

function myFunction2(){
    document.getElementById("calc_button").style.opacity = "1" ;
    document.getElementById("landing_page").style.cursor = "pointer" ;
    document.getElementById("love_image").style.opacity = "1";
    document.getElementById("calculator_body").style.opacity = "0" ;
    
}
function myFunction() {

    var data1 = document.getElementById("name_male").value ;
    var data2 = document.getElementById("name").value ;
   var l1 = data1.length ;
   var l2 = data2.length ;
   if( l1 > 0){


    document.getElementById("love_image").style.opacity = "0";
    document.getElementById("calculator_body").style.opacity = "1" ;
    var n = Math.random();

    n = n * 100 ;
    n = Math.floor(n) ;
    var h1 = document.querySelector("h1");
    h1.innerHTML = n + "%";
    var naam = document.querySelector("name");
       rotate_deg = 1.8*n
        document.getElementById("calculator_fill").style.transform = "rotate("+rotate_deg+"deg)"
       
    
    var rotate_deg = 0
    rotate_deg = 1.8*n
    document.getElementById("calculator_fill").style.transform = "rotate("+rotate_deg+"deg)"
    document.getElementById("calculator_body").style.transitionDuration = "3s";
    document.getElementById("calc_button").style.opacity = "0" ;
    document.getElementById("calc_button").style.cursor = "default" ;


    //now to not re-enter the given name
    var data1 = document.getElementById("name_male").value ;
   var data2 = document.getElementById("name").value ;
   
   
   }
   else{
    alert("enter the text please")
   }
    
     
    // document.querySelector("#name").addEventListener("mouseenter",function(){
    //     document.getElementById("love_image").style.opacity = "1";
    //     document.getElementById("calculator_body").style.opacity = "0" ;
    //     document.getElementById("calculator_body").style.transitionDuration = "2s";
   
    //  })
     

}


