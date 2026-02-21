const hour = document.querySelector('.hour');
const min = document.querySelector('.min');
const sec = document.querySelector('.sec');
const day = document.querySelector('.date');

function clockUpdate() {
  const currentDate = new Date();

  const currentHour = currentDate.getHours();
  const currentMin = currentDate.getMinutes();
  const currentSec = currentDate.getSeconds();

  const hourRotation = (30 * (currentHour % 12)) + (currentMin * 0.5) + 90;
  const minuteRotation = (6 * currentMin) + (currentSec * 0.1) + 90;
  const secondRotation = (6 * currentSec) + 90;

  hour.style.transform = `rotate(${hourRotation}deg)`;
  min.style.transform = `rotate(${minuteRotation}deg)`;
  sec.style.transform = `rotate(${secondRotation}deg)`;

  day.textContent = currentDate.toLocaleDateString('en-US', {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
}

clockUpdate();
setInterval(clockUpdate, 1000);
