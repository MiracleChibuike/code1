
const btn1 = document.querySelector('#l1');
const btn2 = document.querySelector('#l2');
const btn3 = document.querySelector('#l3');
const btn4 = document.querySelector('#l4');

console.log(btn1);

btn1.addEventListener('click', function(){
  changeColor(btn1);
})

btn2.addEventListener('click', function(){
  changeColor(btn2);
})

btn3.addEventListener('click', function(){
  changeColor(btn3);
})

btn4.addEventListener('click', function(){
  changeColor(btn4);
})

function changeColor(btnx){
  if(btnx.parentElement.style.backgroundColor == 'red'){
  btnx.parentElement.style.backgroundColor = 'green';
  }
  else{
btnx.parentElement.style.backgroundColor = 'red';
  }
}
