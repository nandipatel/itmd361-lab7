function init(){
 
  var entry = document.getElementById('entryinput');
  var button = document.getElementById('entrybutton');
  var txoutput = document.getElementById('textoutput');

  button.addEventListener('click', function(){
    alert('Nandi Patel: ' + entry.value);
    txoutput.innerHTML = entry.value;
  });
}
window.addEventListener('load', init);
