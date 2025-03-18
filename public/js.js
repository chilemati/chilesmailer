const copy = document.querySelector('#copy');
copy.addEventListener('click',(e)=> {
     // Get the text field
  var copyText = document.getElementById("myInput");


   // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.textContent);

  // Alert the copied text
  alert("Copied to clipboard!");
})