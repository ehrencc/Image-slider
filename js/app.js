//set buttons as variable to be used on event
var btnRight= document.querySelector(".btn-right");
var btnLeft = document.querySelector(".btn-left");



//created array for the images
  var pictures = [
    "url('./img/contBcg-0.jpeg')",
    "url('./img/contBcg-1.jpeg')",
    "url('./img/contBcg-2.jpeg')",
    "url('./img/contBcg-3.jpeg')",
    "url('./img/contBcg-4.jpeg')"
  ]

//event listeners created on each buttons click
btnRight.addEventListener("click",rightImg);

btnLeft.addEventListener("click",leftImg);
//declared counter variables to be used for array number
var x=0;
var count;
//functions for right button event
  function rightImg(){
   var primaryImg = document.querySelector(".img-container");
  /* if statemnt , variable is greater or equal to 0 to add to the number 
     and assign count to the variable to be displayed as array number*/
   if (x >= 0){
    x++;
    count=x;
    primaryImg.style.backgroundImage= pictures[count];
   };
  // if the number is greater than 4 display picture 0 as it was missing then clear x
  //x is cleared so that if right button clicked again will work from beginning
   if (x > 4){
    primaryImg.style.backgroundImage= pictures[0];
    
    x=0;
    };
   
   
  };
//function for left button event
  function leftImg(){
    var primaryImg = document.querySelector(".img-container");
   
    if (x === 0){
     x=5;
     count=x;
     primaryImg.style.backgroundImage= pictures[count];
    };
 
    if (x <= 5){
     x--;
     count=x;
     primaryImg.style.backgroundImage= pictures[count];
     };
   };