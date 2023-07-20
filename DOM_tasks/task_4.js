
function load(){
    let data=document.getElementById("option").value;
    document.getElementById("imgToChange").src=data;
}




let textFam=document.getElementById("text-fam");
textFam.addEventListener("change",function(){
    document.getElementById("text").style.fontFamily=textFam.value;
});


let textSize=document.getElementById("text-size");
textSize.addEventListener("change",function(){
    document.getElementById("text").style.fontSize=textSize.value;
});


let itlcChk=document.getElementById("itl");
itlcChk.addEventListener("click",function(){
    if(itlcChk.checked===true){
        document.getElementById("text").style.fontStyle="italic";
    }
    else{
        document.getElementById("text").style.fontStyle="normal";
    }
});


let boldChk=document.getElementById("bld");
boldChk.addEventListener("click",function(){
    if(boldChk.checked===true){
    document.getElementById("text").style.fontWeight="bold";
}
else{
    document.getElementById("text").style.fontWeight="normal";
}
});


let lineChk=document.getElementById("udl");
lineChk.addEventListener("click",function(){
    if(lineChk.checked===true){
        document.getElementById("text").style.textDecoration="underline";
    }
    else{
        document.getElementById("text").style.textDecoration="none";
    }
});