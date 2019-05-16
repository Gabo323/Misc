
/*Not a good approach I know. I don't like the flickering effect either,
  and there are some problems if the user clicks multiple time.
  I will come to a better solution.*/

var posun = 0;
var vac = 0;
var cavo = 0;
var caba = 0;
var abastian = 1;
function carouselRight() {
  var x = document.getElementById('one').childElementCount;

  caba = caba + 1;
  var zmena = caba / (abastian * x);
  if (zmena == 1) {
    posun = 0;
    vac = 0;
    abastian = abastian + 1;
    caba = caba + 1;
  }
  if (cavo == 0) {
    var main = document.getElementById('main');
    var carousel = document.getElementById('one');
    var width = main.offsetWidth;
    var theEnd = 0 - ((x-1) * width);
    cavo = cavo + 1;
    if (vac == theEnd) {
      vac = 0 - width;
      posun = 0;
      var efe = vac.toString();
      carousel.style.left = efe + "px";
      console.log(vac);
    }
    else {
      vac = vac - width;
    }

    console.log(vac);

    var right = setInterval(function(){
      posun = posun - 5;
      var vysledok = posun.toString();
      carousel.style.left = vysledok + "px";

      if (posun == vac) {
        clearInterval(right);
        cavo = 0;
      }
    }, 1);
  }
}

//Skuska
function carouselLeft() {
  var x = document.getElementById('one').childElementCount;

  caba = caba - 1;
  var zmena = caba / (abastian * x);
  if (zmena == -1) {
    posun = 0;
    vac = 0;
    abastian = abastian + 1;
    caba = caba - 1;
  }
  if (cavo == 0) {
    var main = document.getElementById('main');
    var carousel = document.getElementById('one');
    var width = main.offsetWidth;

    cavo = cavo + 1;

    if (vac == 0) {
      vac = 0 - ((x - 2) * width);
      posun = (vac - width);
      var efe = vac.toString();
      carousel.style.left = efe + "px";
      console.log(vac);
    }
    else {
      vac = vac + width;
    }
    console.log(vac);
    var left = setInterval(function(){
      posun = posun + 5;
      var vysledok = posun.toString();
      carousel.style.left = vysledok + "px";

      if (posun == vac) {
        clearInterval(left);
        cavo = 0;
      }
    }, 1);
  }
}
