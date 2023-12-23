//javascript for contact form
let submit = document.getElementById("submit_contact");
submit.addEventListener("click", function() {
  // Show a debugging statement
  console.log("Button clicked. Submit event prevented.");
  
  // Show an alert when the submit button is clicked
  alert("Your contact form has been submitted");
});

