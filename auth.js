// Password gate
const SECRET = "frenchtoast";
function authorize(){
  const val = document.getElementById("pw-input").value.trim();
  if(val===SECRET){
    document.getElementById("pw-overlay").style.display="none";
  }else{
    document.getElementById("pw-error").textContent="Wrong password 🙃";
    document.getElementById("pw-input").value="";
  }
}
