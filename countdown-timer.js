document.addEventListener('DOMContentLoaded',()=>{
 const target=new Date('2025-08-19T00:00:00');function tick(){
  const now=new Date(),diff=target-now,total=Math.max(diff,0);
  const sec=Math.floor(total/1000)%60,min=Math.floor(total/1e3/60)%60,
        hrs=Math.floor(total/1e3/60/60)%24,days=Math.floor(total/1e3/60/60/24);
  document.getElementById('main-timer').textContent=
   `${days} days, ${hrs} hours, ${min} minutes, ${sec} seconds`;
  document.getElementById('days').textContent=days;
  document.getElementById('hours').textContent=hrs;
  document.getElementById('minutes').textContent=min;
  document.getElementById('seconds').textContent=sec;
  if(diff>0)setTimeout(tick,1000);}
 tick();});
