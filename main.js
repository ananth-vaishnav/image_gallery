document.addEventListener("DOMContentLoaded", function() {
    const displayedImg = document.querySelector(".displayed-img");
    const overlay = document.querySelector(".overlay");
    const darkBtn = document.querySelector(".dark");
    const thumbBar = document.querySelector(".thumb-bar");
  

    const images = [
      "images/img1.jpg",
      "images/img2.jpg",
      "images/img3.jpg",
      "images/img4.jpg",
      "images/img5.jpg"
    ];
    const alts = {
        'img1.jpg' : 'img1.',
        'img2.jpg' : 'img2',
        'img3.jpg' : 'img3',
        'img4.jpg' : 'img4',
        'img5.jpg' : 'img5'
    }
  

    images.forEach(image => {
      const thumbImg = document.createElement("img");
      thumbImg.setAttribute("src", image);
      thumbImg.setAttribute("alt", alts[image.split('/').pop()]);
      thumbImg.addEventListener("click", function() {
        displayedImg.setAttribute("src", image);
      });
      thumbBar.appendChild(thumbImg);
    });
  

    darkBtn.addEventListener("click", function() {
      if (overlay.style.display === "none" || overlay.style.display === "") {
        overlay.style.display = "block";
        darkBtn.textContent = "Undarken";
      } else {
        overlay.style.display = "none";
        darkBtn.textContent = "Darken";
      }
    });
});