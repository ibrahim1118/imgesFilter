let saturate = document.getElementById("saturate"); 
let contrast = document.getElementById("contrast"); 
let brightness = document.getElementById("brightness"); 
let sepia = document.getElementById("sepia"); 
let grayscale = document.getElementById("grayscale"); 
let blur = document.getElementById("blur"); 
let hueRotat = document.getElementById("hue-rotate");


let upload = document.getElementById("Upload")
let dowload = document.getElementById("dow")
let img = document.getElementById("img")

let res = document.querySelector("span")

let imgBox =document.querySelector(".imge-box") 

let conv = document.getElementById("canv");
const ctx = conv.getContext('2d');

window.onload  = function ()
{
    dowload.style.display ="none";
    res.style.display ="none";
    imgBox.style.display = 'none'

}
res.onclick = function(){
    saturate.value = '100'; 
    contrast.value = '100';
    brightness.value='100'; 
    sepia.value = '0'; 
    grayscale.value = '0'; 
    blur.value= '0'; 
    hueRotat.value= '0'; 
    ctx.filter =`
            saturate(${saturate.value}%)
            contrast(${contrast.value}%)
            brightness(${brightness.value}%)
            sepia(${sepia.value}%)
            grayscale(${grayscale.value})
            blur(${blur.value}px)
            hue-rotate(${hueRotat.value}deg)
        `
      ctx.drawImage(img,0,0,conv.width,conv.height)
}
function resat() {
    ctx.filter = 'none';
        saturate.value = '100'; 
        contrast.value = '100';
        brightness.value='100'; 
        sepia.value = '0'; 
        grayscale.value = '0'; 
        blur.value= '0'; 
        hueRotat.value= '0';
        ctx.drawImage(img,0,0,conv.width,conv.height) 
}
upload.onchange = function(){
    resat(); 
    dowload.style.display ="block";
    res.style.display ="block";
    imgBox.style.display = 'block'; 
    let file = new FileReader(); 
    file.readAsDataURL(upload.files[0]);
    file.onload = function () {
        img.src = file.result; 
    }
    img.onload = function(){
        conv.width = img.width; 
        conv.height = img.height; 
        ctx.drawImage(img,0,0,conv.width,conv.height)
        img.style.display = "none"; 
    }

}

let filters = document.querySelectorAll("ul li input");
filters.forEach(filter => {
    filter.addEventListener("input",function(){
        ctx.filter =`
            saturate(${saturate.value}%)
            contrast(${contrast.value}%)
            brightness(${brightness.value}%)
            sepia(${sepia.value}%)
            grayscale(${grayscale.value})
            blur(${blur.value}px)
            hue-rotate(${hueRotat.value}deg)
        `
        ctx.drawImage(img,0,0,conv.width,conv.height)
    })
})

dowload.onclick = function (){
    dowload.href = conv.toDataURL(); 
}

