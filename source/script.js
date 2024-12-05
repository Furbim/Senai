const languageInfo = {
    h1: {
      title: "HISTÓRIA 1",
      info: "lorem ipsum dolor sit amet, consectetur adipis occ tempor invidid aut fug incididunt ut labore et dolore magna aliqu",
      imgSrc: "img/img1.jfif" 
    },
    h2: {
      title: "HISTÓRIA 2",
      info: "lorem ipsum dolor sit amet, consectetur adipis occ tempor invidid aut fug incididunt ut labore et dolore magna aliqu",
      imgSrc: "img/img2.jfif"
    },
    h3: {
      title: "HISTÓRIA 3",
      info: "lorem ipsum dolor sit amet, consectetur adipis occ tempor invidid aut fug incididunt ut labore et dolore magna aliqu",
      imgSrc: "img/img3.jfif"
    },
    h4: {
      title: "HISTÓRIA 4",
      info: "lorem ipsum dolor sit amet, consectetur adipis occ tempor invidid aut fug incididunt ut labore et dolore magna aliqu",
      imgSrc: "img/img4.jfif"
    },
    h5: {
      title: "HISTÓRIA 5",
      info: "lorem ipsum dolor sit amet, consectetur adipis occ tempor invidid aut fug incididunt ut labore et dolore magna aliqu",
      imgSrc: "img/img5.jpg"
    },
    h6: {
      title: "HISTÓRIA 6",
      info: "lorem ipsum dolor sit amet, consectetur adipis occ tempor invidid aut fug incididunt ut labore et dolore magna aliqu",
      imgSrc: "img/img6.png"
    },
    h7: {
      title: "HISTÓRIA 7",
      info: "lorem ipsum dolor sit amet, consectetur adipis occ tempor invidid aut fug incididunt ut labore et dolore magna aliqu",
      imgSrc: "img/img7.png"
    },
    h8: {
      title: "HISTÓRIA 8",
      info: "lorem ipsum dolor sit amet, consectetur adipis occ tempor invidid aut fug incididunt ut labore et dolore magna aliqu",
      imgSrc: "img/img8.jfif"
    }
  };
  
  function openInfo(language) {
    const modal = document.getElementById("infoModal");
  
    document.getElementById("language-title").textContent = languageInfo[language].title;
    document.getElementById("language-info").textContent = languageInfo[language].info;
  
    document.getElementById("imgModal").src = languageInfo[language].imgSrc;
  
    modal.style.display = "flex";
  }
  
  function closeInfo() {
    document.getElementById("infoModal").style.display = "none";
  }
  
  document.getElementById('phone').addEventListener('input', function(e) {
      let value = e.target.value.replace(/\D/g, ''); 
      if (value.length <= 10) {
          e.target.value = value.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
      } else {
          e.target.value = value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
      }
  });
  
  
  
  function closeInfoOnOutsideClick(event) {
    const modalContent = document.querySelector(".modal-content");
    if (!modalContent.contains(event.target)) {
      closeInfo();
    }
  }
  
      $(document).ready(function () {
        $('.fancybox').fancybox({
          loop: true,
          buttons: [
            "slideShow",
            "thumbs",
            "close"
          ],
          animationEffect: "fade",
          transitionEffect: "slide",
          caption: function (instance, item) {
            return $(this).find('img').attr('alt');
          },
          thumbs: {
            autoStart: true
          },
          closeExisting: true
        });
  
        $(".zoom").hover(function () {
  
          $(this).addClass('transition');
        }, function () {
  
          $(this).removeClass('transition');
        });
      });
  