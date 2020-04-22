function init(){
 
 var entry = document.getElementById('entryinput');
 var enbutton = document.getElementById('entrybutton');
 var txoutput = document.getElementById('textoutput');

 function alert(){
  alert('Nandi Patel: ' + entry.value);
 }
 
 function output(){
  txoutput.innerHTML = entry.value;
 }

 enbutton.addEventListener('click', alert);
 enbutton.addEventListener('click', output);
}

window.addEventListener('load', init);
