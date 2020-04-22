function init(){
 
 var entry = document.getElementById('entryinput');
 var enbutton = document.getElementById('entrybutton');
 var txoutput = document.getElementById('textoutput');
 var name = document.getElementByClassName('center') [1];

 function alert(){
  alert(name.textContent + ': ' + entry.value);}
 
 function output(){
  txoutput.innerHTML = entry.value;}

 enbutton.addEventListener('click', alert);
 enbutton.addEventListener('click', output);
}

window.addEventListener('load', init);
