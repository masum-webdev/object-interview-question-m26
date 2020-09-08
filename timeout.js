function doSomething(){
  console.log(55);
}
function doRepeat(){
  console.log("I am a lopper");
}
console.log(22);
console.log(33);
setTimeout(()=>{
  console.log(55);
},4000);
setInterval(doRepeat,1000);
console.log(44);