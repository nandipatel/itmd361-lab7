function init(){
 
 var entry = document.getElementById('entryinput');
 var enbutton = document.getElementById('entrybutton');
 var txoutput = document.getElementById('textoutput');

 enbutton.addEventListener('click', function (){
  alert('Nandi Patel: ' + entry.value);
  txoutput.innerHTML = entry.value;
 });

window.addEventListener('load', init);
