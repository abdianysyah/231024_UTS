function myFunction(n) {
  var dots = document.getElementById("dots" + n);
  var moreText = document.getElementById("more" + n);
  var btnText = document.getElementById("myBtn" + n);

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

var typed = new Typed(".input",{
    strings:["Student","Beginner"], typeSpeed: 25, backSpeed: 70, loop:true
})