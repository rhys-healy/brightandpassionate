// Counts DOWN to 19 Aug 2025 00:00:00 local time
document.addEventListener('DOMContentLoaded', () => {
  const target = new Date('2025-08-19T00:00:00');

  function tick () {
    const now = new Date();
    const diff = target - now;
    const total = Math.max(diff, 0);

    const sec  = Math.floor(total/1000) % 60;
    const min  = Math.floor(total/1000/60) % 60;
    const hrs  = Math.floor(total/1000/60/60) % 24;
    const days = Math.floor(total/1000/60/60/24);

    document.getElementById('main-timer').textContent =
      `${days} days, ${hrs} hours, ${min} minutes, ${sec} seconds`;

    document.getElementById('days').textContent    = days;
    document.getElementById('hours').textContent   = hrs;
    document.getElementById('minutes').textContent = min;
    document.getElementById('seconds').textContent = sec;

    if (diff > 0) setTimeout(tick, 1000);
  }
  tick();
});
