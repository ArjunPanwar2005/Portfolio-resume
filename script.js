const form = document.getElementById("form");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
form.addEventListener("submit", function(event) {
  event.preventDefault();

  const usernameValue = usernameInput.value.trim();
  const passwordValue = passwordInput.value.trim();

  if(usernameValue!="panwar") {
    alert("Please enter the correct username");
    return;
  }
  if(passwordValue!="jurasik") {
    alert("Please enter the correct password");
    return;
  }

  window.location.href = "index1.html";

  // form.submit();
});
