const SECRET="frenchtoast";
function authorize(){const v=document.getElementById("pw-input").value.trim();
 if(v===SECRET){document.getElementById("pw-overlay").style.display="none";}
 else{document.getElementById("pw-error").textContent="Wrong password 🙃";
      document.getElementById("pw-input").value="";}}