console.log('Hello World!');

function hist() {
  window.location.href = "/history"
}

function mein() {
  document.getElementById("otk").classList="dtk animate__bounceInUp animate__animated"
  
    document.getElementById("rod").style.display="none";

}

function cal() {
  document.getElementById("otk").classList="dkt animate__zoomOutDown animate__animated"
    document.getElementById("rod").style.display="block";
setTimeout(loadi,500)
}
function loadi(){
    document.getElementById("otk").classList="vcc"
}