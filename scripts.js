// Script 1
const text = [
  "Web Developer",
  "Front-end Developer",
  "Back-end Developer",
  "Full Stack Developer",
];
let index = 0;
let letterIndex = 0;
let typingInterval = setInterval(type, 100);

function type() {
  const span = document.getElementById("typewriter");
  const currentText = text[index];
  span.textContent += currentText[letterIndex];
  letterIndex++;
  if (letterIndex === currentText.length) {
    index++;
    if (index === text.length) {
      index = 0;
    }
    clearInterval(typingInterval);
    setTimeout(() => {
      span.textContent = "";
      letterIndex = 0;
      typingInterval = setInterval(type, 100);
    }, 2000);
  }
}

// Script 2
$(window).on("load", function () {
  $(".loader-wrapper").fadeOut("slow");
});

// Script 3
document.addEventListener("DOMContentLoaded", function () {
  // Function to scroll to the target section
  function scrollToTarget() {
    const targetSection = document.getElementById("mes-traveaux");
    targetSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "start",
      duration: 3000,
    });
  }

  const mesProjetsLink = document.getElementById("mes-projets-link");
  mesProjetsLink.addEventListener("click", function (event) {
    event.preventDefault();
    scrollToTarget();
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Function to scroll to the target section
  function scrollToTarget() {
    const targetSection = document.getElementById("pre");
    targetSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "start",
      duration: 3000,
    });
  }

  const mesProjetsLink = document.getElementById("Presentation-link");
  mesProjetsLink.addEventListener("click", function (event) {
    event.preventDefault();
    scrollToTarget();
  });
});

// Script 4
document.addEventListener("DOMContentLoaded", function () {
  const paragraphs = document.querySelectorAll(".hoverable");

  paragraphs.forEach(function (paragraph) {
    const words = paragraph.innerText.split(" ");
    paragraph.innerHTML = "";

    words.forEach(function (word) {
      const span = document.createElement("span");
      span.innerText = word + " ";

      span.addEventListener("mouseover", function () {
        this.classList.add("hovered");
      });

      span.addEventListener("mouseout", function () {
        this.classList.remove("hovered");
      });

      paragraph.appendChild(span);
    });
  });
});

// Script 5
$(document).ready(function () {
  $(window).scroll(function () {
    var scrollHeight = $(this).scrollTop();
    var elementOffset = $(".about-dev").offset().top;
    var elementHeight = $(".about-dev").outerHeight();
    var windowHeight = $(window).height();
    var documentHeight = $(document).height();

    // Calcule la position du bas de l'élément ".about-dev"
    var elementBottom = elementOffset + elementHeight;

    // Ajoute la classe "fade-in" lorsque le bas de l'élément ".about-dev" atteint le bas de la fenêtre
    if (elementBottom <= scrollHeight + windowHeight) {
      $(".about-dev").addClass("fade-in");
    }
  });
});

//script 6
$(document).ready(function () {
  $(window).scroll(function () {
    var scrollHeight = $(this).scrollTop();
    var elementOffset = $(".h1-text-center").offset().top;
    var elementHeight = $(".h1-text-center").outerHeight();
    var windowHeight = $(window).height();
    var documentHeight = $(document).height();

    // Calcule la position du bas de l'élément ".h1-text-center"
    var elementBottom = elementOffset + elementHeight;

    // Ajoute la classe "fade-in" lorsque le bas de l'élément ".h1-text-center" atteint le bas de la fenêtre
    if (elementBottom <= scrollHeight + windowHeight) {
      $(".h1-text-center").addClass("fade-in");
    }

    // Ajoute une autre classe d'animation lorsque l'élément devient visible
    if (elementOffset <= scrollHeight + windowHeight) {
      $(".h1-text-center").addClass("other-animation");
    } else {
      // Supprimer la classe d'animation si l'élément n'est pas visible
      $(".h1-text-center").removeClass("other-animation");
    }
  });
});
//7
$(document).ready(function () {
  var lastScrollTop = 0;
  $(window).scroll(function () {
    var scrollHeight = $(this).scrollTop();
    var elementOffset = $(".postcard.dark.red").offset().top;
    var elementHeight = $(".postcard.dark.red").outerHeight();
    var windowHeight = $(window).height();
    var documentHeight = $(document).height();

    // Check scroll direction
    var scrollDirection = scrollHeight > lastScrollTop ? "down" : "up";
    lastScrollTop = scrollHeight;

    // Calcule la position du bas de l'élément ".postcard.dark.red"
    var elementBottom = elementOffset + elementHeight;

    // Ajoute la classe "fade-in" lorsque le bas de l'élément ".postcard.dark.red" atteint le bas de la fenêtre
    if (elementBottom <= scrollHeight + windowHeight) {
      $(".postcard.dark.red").addClass("fade-in");
    } else {
      $(".postcard.dark.red").removeClass("fade-in");
    }

    // Ajoute une autre classe d'animation lorsque l'élément devient visible
    if (elementOffset <= scrollHeight + windowHeight) {
      $(".postcard.dark.red").addClass("other-animation");
    } else {
      // Supprimer la classe d'animation si l'élément n'est pas visible
      $(".postcard.dark.red").removeClass("other-animation");
    }

    // Add class for scroll direction
    if (scrollDirection === "down") {
      $(".postcard.dark.red").addClass("move-up");
    } else {
      $(".postcard.dark.red").removeClass("move-up");
    }
  });
});

//8$(document).ready(function () {
var lastScrollTop = 0;
$(window).scroll(function () {
  var scrollHeight = $(this).scrollTop();
  var elementOffset = $(".form-container").offset().top;
  var elementHeight = $(".form-container").outerHeight();
  var windowHeight = $(window).height();
  var documentHeight = $(document).height();

  // Check scroll direction
  var scrollDirection = scrollHeight > lastScrollTop ? "down" : "up";
  lastScrollTop = scrollHeight;

  // Calculate the bottom position of the ".form-container" element
  var elementBottom = elementOffset + elementHeight;

  // Add the "show" class when the bottom of the ".form-container" element reaches the bottom of the window
  if (elementBottom <= scrollHeight + windowHeight) {
    $(".form-container").addClass("show");
  } else {
    $(".form-container").removeClass("show");
  }
});
