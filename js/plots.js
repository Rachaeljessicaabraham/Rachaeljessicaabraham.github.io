// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("plot-image");
var modalImg = document.getElementById("image-plot");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}

function showImage(imgPath, imgText) {
    var curImage = document.getElementById('plot-image');
    
    curImage.src = imgPath;
    curImage.alt = imgText;
    curImage.title = imgText;
 }