let heading=document.querySelector("h1");
heading.addEventListener("mouseenter",function(){
    heading.style.backgroundColor="yellow";
    heading.style.fontSize="50px";
    heading.style.width="300px";
});
heading.addEventListener("mouseleave",function(){
    heading.style.backgroundColor="white";
    heading.style.fontSize="36px";
})