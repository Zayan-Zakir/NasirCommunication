function BuyNow()
{

Swal.fire({
title: 'Coming Soon',
imageUrl: 'marqee-1/comingsoon.gif',
imageWidth: 320,
imageHeight: 210,
imageAlt: 'Buy Now Option, Will Be Available Soon.',})

}



function Explore()
{

Swal.fire({
text: 'SPECIFICATIONS',
imageUrl: 'marqee-1/specifications.png',
imageWidth: 420,
imageHeight: 420,
imageAlt: 'Specifications'})


}




mybutton = document.getElementById("myBtn");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0; 
}
