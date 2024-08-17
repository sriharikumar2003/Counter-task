const incr = document.getElementById("inc");
const decr = document.getElementById("dec");
const reset = document.getElementById("res");
const result = document.getElementById("display");
let count = 0;
result.textContent = count;
incr.onclick = function(){
  count = count+1;
  result.textContent = count;
}
decr.onclick = function(){
  count = count-1;
  result.textContent = count;
}
reset.onclick = function(){
  count = 0;
  result.textContent = count;
}


