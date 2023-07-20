let divEle=document.getElementById("div-id");
let hideBtn=document.getElementById("hideBtn");
let showBtn=document.getElementById("showBtn");

hideBtn.addEventListener("click",function(){
    divEle.style.display="none";
    hideBtn.style.display="none";
    showBtn.style.display="inline";
});
showBtn.addEventListener("click",function(){
    divEle.style.display="block";
    hideBtn.style.display="block";
    showBtn.style.display="none";
});