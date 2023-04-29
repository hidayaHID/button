let img = document.querySelector('img')

let btn = document.querySelector('button')

btn.addEventListener('mouseover', function(){
      img.style.transform = "translateX";
})
btn.addEventListener('click', function(){
      img.style.transform = "translateX(200px)";
})
 

//console.log(img,btn)

let name = document.getElementsById('HIDAYA')

let btnx = document.getElementById('btn')


btnx.addEventListener("mouseover", function() {
let name = document.getElementsById('HIDAYA')
.style.color = 'green' 
})

btnx.addEventListener("mouseover", function() {
let name = document.getElementsById('HIDAYA')
.style.color = 'red' 
})

btnx.addEventListener("mouseover", function() {
let name = document.getElementsById('HIDAYA')
.style.color = 'yelllow' 
})