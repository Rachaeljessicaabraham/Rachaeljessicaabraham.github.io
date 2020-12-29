

  // Modal

  // Get the modal
var modal = document.getElementById("ImageModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("gia-image");
var modalImg = document.getElementById("image-gia");
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

// Footer


// $(".footer-btn1").click(function() {
//   if($(".invisible-span1").is(":visible")){
//     $(".invisible-span1").css("display", "none");
//     $(this).html("<i class='fas fa-plus'></i>");
//   }else{
//     $(".invisible-span1").css("display", "block");
//     $(this).html("<i class='fas fa-minus'></i>");
//   }
//   });

//   $(".footer-btn2").click(function() {
//     if($(".invisible-span2").is(":visible")){
//       $(".invisible-span2").css("display", "none");
//       $(this).html("<i class='fas fa-plus'></i>");
//     }else{
//       $(".invisible-span2").css("display", "block");
//       $(this).html("<i class='fas fa-minus'></i>");
//     }
//     });

//     $(".footer-btn3").click(function() {
//       if($(".invisible-span3").is(":visible")){
//         $(".invisible-span3").css("display", "none");
//         $(this).html("<i class='fas fa-plus'></i>");
//       }else{
//         $(".invisible-span3").css("display", "block");
//         $(this).html("<i class='fas fa-minus'></i>");
//       }
//       });
  