const lengh = document.querySelector('.lengh');

function upadete() {
    let  corrdate = new Date();
    let corrsec = corrdate.getSeconds();
    let cycle = -1000;

    //lengh.style.trensform = `rote`
    lengh.style.transform = `rotate(${cycle * corrsec + 90}deg)`;
    
}

setInterval(function() {
   // upadete()
    //requestAnimationFrame(upadete());
  },6)


