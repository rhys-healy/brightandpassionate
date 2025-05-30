(function(){
  const phases = ["New Moon","Waxing Crescent","First Quarter","Waxing Gibbous","Full Moon","Waning Gibbous","Last Quarter","Waning Crescent"];
  function getMoonPhase(d){
    const lp=2551443;
    const new_moon=new Date(Date.UTC(1970,0,7,20,35,0));
    const phase=((d.getTime()-new_moon.getTime())/1000)%lp;
    return Math.floor((phase/(lp/8))+0.5)%8;
  }
  const idx=getMoonPhase(new Date());
  const el=document.getElementById("moon-phase");
  if(el){el.textContent="Current Moon Phase: "+phases[idx];}
})();