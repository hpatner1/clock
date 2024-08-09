const hour = document.querySelector('.hour');
const min = document.querySelector('.min');
const sec = document.querySelector('.sec');
const day = document.querySelector('.date');

function clock_update() {
  let  corrdate = new Date();

  let corrhour = corrdate.getHours();
  let corrmin = corrdate.getMinutes();
  let corrsec = corrdate.getSeconds();
  let corrday = corrdate.getDay();
  let corrmonth = corrdate.getMonth();
  let corryer = corrdate.getFullYear();

  let formattedDate = corrdate.toLocaleDateString('en-US'); 

  //let alldate = corrday + ' / '+ corrmonth +' / '+ corryer;


  hour.style.transform = `rotate(${30 * corrhour + 90}deg)`;
  min.style.transform = `rotate(${6 * corrmin + 90}deg)`;
  sec.style.transform = `rotate(${6 * corrsec + 90}deg)`;
  //day.innerHTML = alldate;
  day.innerHTML = formattedDate;

  

  
}

setInterval(function() {
    clock_update()
  },1000)