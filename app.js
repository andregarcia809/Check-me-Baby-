const checkBoxes = document.querySelectorAll('.inbox input[type="checkbox"]');


let lastChecked;

function handleCheck(e) {
  // Check to see if shift key is down
  // And Check that checkbox is checked
  let inBetween = false;
  if(e.shiftKey && this.checked) {
    // Go ahead and do what we want
    // Loop over every single checkbox
    checkBoxes.forEach(checkbox => {
      if(checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
        console.log(inBetween)
      }
      if(inBetween) {
        checkbox.checked = true;
      }
    })
  }
  lastChecked = this;
}

checkBoxes.forEach(checkBox => checkBox.addEventListener('click', handleCheck));