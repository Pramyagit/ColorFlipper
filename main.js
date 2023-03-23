const btn=document.getElementById("btn");
const color=document.querySelector("#color");
const container=document.querySelector(".container");
btn.addEventListener("click",()=>{
    // alert("hi")
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor= "#"+randomColor;
    let a=btn.previousElementSibling;
    a.style.fontSize=30;
    let b=a.children[1];
    b.style.backgroundColor="white";
    console.log(b.style.backgroundColor="white");
    color.innerHTML="#"+ randomColor;

})