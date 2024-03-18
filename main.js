document.addEventListener("DOMContentLoaded", function() {
    const displayedImg = document.querySelector(".displayed-img");
    const overlay = document.querySelector(".overlay");
    const darkBtn = document.querySelector(".dark");
    const thumbBar = document.querySelector(".thumb-bar");
  

    const images = [
      "images/img1.jpeg",
      "images/img2.jpeg",
      "images/img3.jpeg",
      "images/img4.jpeg",
      "images/img5.jpeg"
    ];
    const alts = {
        'img1.jpeg' : 'img1.',
        'img2.jpeg' : 'img2',
        'img3.jpeg' : 'img3',
        'img4.jpeg' : 'img4',
        'img5.jpeg' : 'img5'
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
