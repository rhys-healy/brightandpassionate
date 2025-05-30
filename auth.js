const SECRET="youknowme";
function authorize(){
 const entered=document.getElementById("pw-input").value.trim();
 if(entered===SECRET){document.getElementById("pw-overlay").style.display="none";}
 else{document.getElementById("pw-error").textContent="Wrong password 🙃";
      document.getElementById("pw-input").value="";}
}