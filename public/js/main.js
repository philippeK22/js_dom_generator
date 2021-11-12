
// button first div

let button1 = document.querySelector(".butt-w");
console.log(button1);
let carreVide = document.querySelector(".rect-div");
console.log(carreVide);

button1.addEventListener("click",()=>{
    
    carreVide.classList.toggle("bg-secondary")
})

let button2 = document.querySelector(".butt-r");
console.log(button2);

button2.addEventListener("click",()=>{
    carreVide.classList.toggle("bg-danger")
})

let button3 = document.querySelector(".butt-g");
console.log(button3);

button3.addEventListener("click",()=>{
    carreVide.classList.toggle("bg-success")
})

let button4 = document.querySelector(".butt-b");
console.log(button4);

 button4.addEventListener("click",()=>{
    carreVide.classList.toggle("bg-primary")
})

let button5 = document.querySelector(".butt-border");
console.log(button5);

button5.addEventListener("click",()=>{
    carreVide.classList.toggle("butt-border")
})

let button6 = document.querySelector(".butt-point");
console.log(button6);

button6.addEventListener('click',()=>{

    carreVide.classList.toggle("butt-point")


})

let button7 =document.querySelector(".point-butt");
console.log(button7);

button7.addEventListener("click",()=>{
    carreVide.classList.toggle("point-butt")
})

let button8 = document.querySelector(".bord-all");
console.log(button8);

button8.addEventListener("click",()=>{
    carreVide.classList.toggle("bord-all")
})

let button9 = document.querySelector(".top-bord");
console.log(button9);

button9.addEventListener("click",()=>{
    carreVide.classList.toggle("top-bord")
})

let button10 =document.querySelector(".bord-red");
console.log(button10);

button10.addEventListener("click",()=>{
    carreVide.classList.toggle("bord-red")
})

// second div des buttons

let button11 = document.querySelector(".bord-black");
console.log(button11);

button11.addEventListener("click",()=>{
    
    carreVide.style.borderColor = button11.value

  
})
    


let button12 = document.querySelector(".num-all");
console.log(button12);
// let slect1 = document.querySelector("#sele-1");
// slect1.innerHTML = "3"
// console.log(slect1);



button12.addEventListener("click",()=>{
    carreVide.style.borderWidth = `${button12.value}px`
  console.log(button12.value);
})


let button13 =document.querySelector(".num-top");
console.log(button13);

button13.addEventListener("click",()=>{

    carreVide.style.borderTopWidth = `${button13.value}px`
    


})

let button14 =document.querySelector(".num-right");
console.log(button14);

button14.addEventListener("click",()=>{
    carreVide.style.borderRightWidth = `${button14.value}px`
})

let button15 = document.querySelector(".num-down");
console.log(button15);

button15.addEventListener("click",()=>{
    carreVide.style.borderBottomWidth = `${button15.value}px`
})

let button16 = document.querySelector(".num-left");
console.log(button16);

button16.addEventListener("click",()=>{
    carreVide.style.borderLeftWidth = `${button16.value}px`

})

let button17 = document.querySelector(".bord-rad");
console.log(button17);
