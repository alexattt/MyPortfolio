var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  const slide_arr = []; 

  for (var j=1; j<7;j++) {
    var slides = document.getElementsByClassName(`mySlides${j}`);
    slide_arr.push(slides);
  }

  for (var k=0; k<6;k++) {
    if (n > slide_arr[k].length) {
      slideIndex = 1
    }
    if (n < 1) {
      slideIndex = slide_arr[k].length
    };
    for (i = 0; i < slide_arr[k].length; i++) {
      slide_arr[k][i].style.display = "none";
    }
    slide_arr[k][slideIndex-1].style.display = "block";
  }
}