const navbar=document.getElementById("navbar");
let scrollTimeout;

window.addEventListener("scroll",()=>{
   navbar.style.opacity="0.5";

   clearTimeout(scrollTimeout);

   scrollTimeout=setTimeout(()=>
   {
    navbar.style.opacity="1";
   },200);

});


