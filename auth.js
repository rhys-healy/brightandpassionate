// auth.js  – controls the one-word gate on the Home page

// Case-sensitive secret word
const SECRET = "frenchtoast";

function authorize() {
  const entered = document.getElementById("pw-input").value.trim();
  if (entered === SECRET) {
    // Unlock the page
    document.getElementById("pw-overlay").style.display = "none";
  } else {
    // Wrong word ⇒ clear box and show error
    document.getElementById("pw-error").textContent = "Wrong password 🙃";
    document.getElementById("pw-input").value = "";
  }
}
