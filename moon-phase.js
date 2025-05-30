(function(){
  const phases=["New Moon","Waxing Crescent","First Quarter","Waxing Gibbous","Full Moon","Waning Gibbous","Last Quarter","Waning Crescent"];
  function getPhase(d){const lp=2551443,newMoon=new Date(Date.UTC(1970,0,7,20,35,0));return Math.floor((((d-newMoon)/1000)%lp)/(lp/8)+.5)%8;}
  const idx=getPhase(new Date()),el=document.getElementById("moon-phase");
  if(el)el.textContent="Current Moon Phase: "+phases[idx];
})();