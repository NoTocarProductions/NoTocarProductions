//SCROLL COORDS WHEN NEEDED HERE:
// ----------------------------------------------------------
// let elemRect = document.querySelector('div.spacer');
// let bodyRect = document.body.getBoundingClientRect();
//     elemRect = elemRect.getBoundingClientRect();
//     offset   = elemRect.top - bodyRect.top;
// console.log('Element is ' + offset + ' vertical pixels from <body>');
// ----------------------------------------------------------

// ADD PAINTBRUSH LINKS UPPER CORNER RIGHT
// ----------------------------------------------------------
// let navLink = document.querySelectorAll(".navLink");
// navLink.forEach((element) => {
//   element.onmouseover = function () {
//     element.classList.add("selected");
//   };
// });
// // REMOVE PAINTBRUSH LINKS UPPER CORNER RIGHT
// navLink.forEach((element) => {
//   element.onmouseout = function () {
//     element.classList.remove("selected");
//   };
// });
// ----------------------------------------------------------

function myFunction() {
  var myDropdown = document.getElementById("myDropdown");
  if (myDropdown.style.display === "block") {
    myDropdown.style.display = "none";
  } else {
    myDropdown.style.display = "block";
  }
}

//ROTATE THE READ MORE IMAGE
// ----------------------------------------------------------
let current_rotation = 0;
function rotateImage() {
  if (current_rotation >= 10000) {
    current_rotation = 10000;
  }
  let image = document.querySelector("#rotateImg");
  let imagePhone = document.querySelector("#rotateImgPhone");
  image.style.transition = "transform 500s";
  imagePhone.style.transition = "transform 500s";
  current_rotation += 10000;
  image.style.transform = "rotate(" + current_rotation + "deg)";
  imagePhone.style.transform = "rotate(" + current_rotation + "deg)";
}
setInterval(rotateImage, 100);
rotateImage();
// ----------------------------------------------------------

//SLIDESHOW PHONE
// ----------------------------------------------------------
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
// ----------------------------------------------------------
// SCROLL TO SKILLS:
// ----------------------------------------------------------
let linkSkills = document.getElementById("navLinkS");
linkSkills.onclick = function (e) {
  e.preventDefault();
  let element_to_scroll_to = document.querySelector(".mainSkillsArticle");
  element_to_scroll_to.scrollIntoView();
  document.querySelector(".slideshow-container").scrollIntoView();
};
// ----------------------------------------------------------
// SCROLL TO EDUCATION:
// ----------------------------------------------------------
let linkEducation = document.getElementById("navLinkE");
linkEducation.onclick = function (e) {
  e.preventDefault();
  let element_to_scroll_to = document.querySelector(".timelineBox");
  element_to_scroll_to.scrollIntoView();
};
// ----------------------------------------------------------
// SCROLL TO LET'S WORK TOGETHER :
// ----------------------------------------------------------
let linkTogether = document.getElementById("navLinkL");
linkTogether.onclick = function (e) {
  e.preventDefault();
  let element_to_scroll_to = document.querySelector(".footer");
  element_to_scroll_to.scrollIntoView();
};
// ----------------------------------------------------------

// SCROLL TO CASES :
// ----------------------------------------------------------
let linkCases = document.getElementById("navLinkCA");
linkCases.onclick = function (e) {





    
  e.preventDefault();
  let element_to_scroll_to = document.querySelector(".titleCase");
  element_to_scroll_to.scrollIntoView();
};
// ----------------------------------------------------------

// SCROLL TO CONTACT :
// ----------------------------------------------------------
let linkContact = document.getElementById("navLinkD");
linkContact.onclick = function (e) {
  e.preventDefault();
  let element_to_scroll_to = document.querySelector(".footer");
  element_to_scroll_to.scrollIntoView();
};
// ----------------------------------------------------------

// SKILLS SECTION
// ----------------------------------------------------------
// get the elements from the dom
let skillOne = document.getElementById("skillOne");
let skillTwo = document.getElementById("skillTwo");
let skillThree = document.getElementById("skillThree");
let skillFour = document.getElementById("skillFour");
let skillFive = document.getElementById("skillFive");
let skillSix = document.getElementById("skillSix");
let divRight = document.querySelector(".skillsRight");

// mouseover event listeners
skillOne.addEventListener("mouseover", () => {
  staticTelevision();
  createText(
    "PM",
    "Due to my experience in managing projects for a major content marketing office I can safely promise to hold a strict timing regiment for your project with all parties involved."
  );
});
skillTwo.addEventListener("mouseover", () => {
  staticTelevision();
  createText(
    "V",
    `‘ You don’t need eyes to see, you need vision’ – Maxi Jazz <br> Whether it is a website that needs to be created or code that needs to be written. I always try to work with a clear goal in sight where all parties are well informed and on board. To manifest vision it is paramount that the client and me are on the same page the entire length of the project.`
  );
});
skillThree.addEventListener("mouseover", () => {
  staticTelevision();
  createText(
    "PM",
    "Due to my broad interest in many subjects and a background in philosophy I always try to come up with new and exciting ideas that exhilarate potential visitors which will ensure to always leave an impression."
  );
});
skillFour.addEventListener("mouseover", () => {
  staticTelevision();
  createText(
    "V",
    "I don’t consider myself as ‘just a programmer’. I enjoy taking my time to think about design and functionality aspects as much as I do writing clean code. This – I believe – is where I stand out. To truly work together with graphic designers or other clients and actively think about the look and the feel of a website. The two roles are more intertwined than most dare to admit. I love thinking about aesthetics and I dare to make suggestions that might improve the feeling the user gets when visiting our creation."
  );
});
skillFive.addEventListener("mouseover", () => {
  staticTelevision();
  createText(
    "PM",
    "I will do everything I can to learn about new techniques and ways to create the best possible creation during our collaboration. <p> IMPORTANT - boring lines of text will follow, look away now you still can - IMPORTANT </p> At the time of writing I mainly use the following programming languages in my projects: Javascript, PhP, SQL, HTML, CSS."
  );
});
skillSix.addEventListener("mouseover", () => {
  staticTelevision();
  createTextCenter(
    "V",
    `If you have read the above it should be clear that I highly value partnership and involvement of all parties in my projects. Interested to work together? <p style="text-align: center;">Scroll down or click the link above!</p>`
  );
});

// mouseout event listeners
skillOne.addEventListener("mouseout", deleteText);
skillTwo.addEventListener("mouseout", deleteText);
skillThree.addEventListener("mouseout", deleteText);
skillFour.addEventListener("mouseout", deleteText);
skillFive.addEventListener("mouseout", deleteText);
skillSix.addEventListener("mouseout", deleteText);

// function to delete the welcome text at the skills section
function deleteDiv() {
  let newDivRight = document.querySelector(".newDivRight");
  if (newDivRight) {
    newDivRight.remove();
  }
}

// function to create a new text onmouseover
function createText(type, content) {
  deleteDiv();
  let skillsRightDiv = document.querySelector(".skillsRight");
  skillsRightDiv.style.cssText = "background-color: black";
  const newDiv = document.createElement("div");
  newDiv.innerHTML = content;
  newDiv.classList.add(
    "newDiv",
    type === "PM" ? "square" : "newDivLeft",
    "square"
  );
  divRight.appendChild(newDiv);
}

// function to create the center text
function createTextCenter(type, content) {
  deleteDiv();

  const newDiv = document.createElement("div");
  newDiv.innerHTML = content;
  newDiv.classList.add("newDiv", "newDivCenter", "square");
  divRight.appendChild(newDiv);
}

// function to delete thesame texts when mouse goes out
function deleteText() {
  const newDiv = divRight.querySelector(".newDiv, .newDivLeft");
  if (newDiv) {
    newDiv.remove();
  }
  let skillsRightDiv = document.querySelector(".skillsRight");
  skillsRightDiv.style.cssText = "background-color: ";
}

// ----------------------------------------------------------

// animation connected to the scroll; sliding in from the left
let observerTwo = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const squares = entry.target.querySelectorAll(".skillItemTwo");

    if (entry.isIntersecting) {
      squares.forEach((square) => {
        square.classList.add("slideLeft");
      });
      return; // if we added the class, exit the function
    }

    // We're not intersecting, so remove the class!
    squares.forEach((square) => {
      square.classList.remove("slideLeft");
    });
  });
});
observerTwo.observe(document.querySelector(".skillsLeft"));

// animation connected to the scroll; sliding in from the right
let observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const squares = entry.target.querySelectorAll(".skillItem");

    if (entry.isIntersecting) {
      squares.forEach((square) => {
        square.classList.add("slideRight");
      });

      return; // if we added the class, exit the function
    }

    // We're not intersecting, so remove the class!
    squares.forEach((square) => {
      square.classList.remove("slideRight");
    });
  });
});
observer.observe(document.querySelector(".skillsLeft"));

// animation connected to the scroll; static television
let eventTriggered = false;

window.addEventListener("scroll", function () {
  if (!eventTriggered && window.innerWidth > 1100 && window.scrollY >= 600) {
    let element = document.querySelector(".skillsRight");
    element.classList.add("static");

    setTimeout(() => {
      element.classList.remove("static");
      element.classList.add("fade-in");
      let newDivRight = document.createElement("div");
      newDivRight.innerHTML =
        "Play with me! choose a skill on your left to read more...";
      newDivRight.classList.add("newDivRight");
      element.appendChild(newDivRight);
    }, 1500);

    eventTriggered = true;
  }
});
// ----------------------------------------------------------

// animation connected to the scroll; static television for the phone
let eventPhoneTriggered = false;
let hideProject = document.querySelector("div.text");
hideProject.classList.add("hideMe");

window.addEventListener("scroll", function () {
  if (
    !eventPhoneTriggered &&
    window.innerWidth < 1100 &&
    window.scrollY >= 900
  ) {
    let hideProject = document.querySelector("div.text");
    hideProject.classList.remove("hideMe");
    StaticTelevisionPhone();
    let element = document.querySelector(".slideshow-container");
  }
});
// ----------------------------------------------------------

// static television function for the phone
// ----------------------------------------------------------
function StaticTelevisionPhone() {
  let element = document.querySelectorAll("div.text");
  let elementTitle = document.querySelectorAll(".text h2");
  let elementP = document.querySelectorAll(".text p");
  element.forEach((elementOf) => {
    elementOf.classList.add("static");
  });
  elementTitle.forEach((elementOf) => {
    elementOf.classList.add("hideMe");
  });
  elementP.forEach((elementOf) => {
    elementOf.classList.add("hideMe");
  });

  setTimeout(() => {
    element.forEach((elementOf) => {
      elementOf.classList.remove("static");
    });
    // element.classList.remove("static");
    elementTitle.forEach((elementOf) => {
      elementOf.classList.remove("hideMe");
    });
    elementP.forEach((elementOf) => {
      elementOf.classList.remove("hideMe");
    });
  }, 800);

  eventPhoneTriggered = true;
}
// ----------------------------------------------------------

function staticTelevision() {
  let element = document.querySelector(".skillsRight");
  element.classList.add("static");

  setTimeout(() => {
    element.classList.remove("static");
  }, 500);
}

const videoContainer = document.querySelector('.video-container');
const videoContainerTwo = document.querySelector('.scaleUp');
const video = document.getElementById('video');
const videoTwo = document.getElementById('videoTwo');
const videoOverlay = document.querySelector('.overlay');
const videoOverlayTwo = document.querySelector('.overlay');
video.playbackRate = 0.7;

video.pause();
videoTwo.pause();

  
videoContainer.addEventListener('mouseenter', () => {
  video.play(); // Start playing the video on mouseenter
});
videoContainerTwo.addEventListener('mouseenter', () => {
  videoTwo.play(); // Start playing the video on mouseenter
});

videoContainer.addEventListener('mouseleave', () => {
  video.pause(); // Pause the video on mouseleave
});
videoContainerTwo.addEventListener('mouseleave', () => {
  videoTwo.pause(); // Pause the video on mouseleave
});


let checkBox = document.querySelectorAll(".checker");

let objectOptions = {
  root: null,
  threshold: 0,
  rootMargin: "0px",
};


checkBox.forEach((element) => {
  let sectionObserver = new IntersectionObserver(
    titleDisappearFunction,
    objectOptions
  );
  sectionObserver.observe(element);
});

function titleDisappearFunction(entries) {
  entries.forEach((entry) => {
    let title = entry.target;
    if (entry.isIntersecting) {
      title.classList.add("disappear");
    } else {
      title.classList.remove("disappear");
    }
  });
}



let slider = document.querySelectorAll(".slider");

let objOptions = {
  root: null,
  threshold: 0.1,
  rootMargin: "-0px",
};

let triggered = false;

slider.forEach((slide) => {
  let sectionObserver = new IntersectionObserver(callbackFunction, objOptions);
  sectionObserver.observe(slide);
});

function callbackFunction(entries) {
  entries.forEach((entry) => {
    let slideThisRight = entry.target.querySelector(".slideThisRight");
    let slideThisLeft = entry.target.querySelector(".slideThisLeft");

    if (entry.isIntersecting && !slideThisLeft.classList.contains("alreadyDisplayed")) {
      slideThisLeft.classList.add("slideLeft", "alreadyDisplayed");
      slideThisRight.classList.add("slideRight");
    } else {
      slideThisLeft.classList.remove("slideLeft");
      slideThisRight.classList.remove("slideRight");
    }
  });
  triggered = true;
}
// --------------------------------------------
function copyToClipboard(elementId) {
  // Get the text content from the element
  var text = document.getElementById(elementId).textContent;

  // Create a temporary textarea element to hold the text to copy
  var textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.style.position = "fixed"; // Make it invisible
  document.body.appendChild(textarea);

  // Select and copy the text
  textarea.select();
  document.execCommand("copy");

  // Clean up and remove the temporary textarea
  document.body.removeChild(textarea);

  // Optionally, provide some visual feedback to the user
}
document.getElementById('copy').addEventListener("mouseover", function(e) {
  document.querySelector('.footerContainerCenterChild p').innerHTML = "click to copy";
  document.querySelector('.footerContainerCenterChild p').classList.add('slideInFromUpThree');
});
document.getElementById('copy').addEventListener("mouseout", function(e) {
  document.querySelector('.footerContainerCenterChild p').innerHTML = "LET's GET TO KNOW EACHOTHER";
  document.querySelector('.footerContainerCenterChild p').classList.remove('slideInFromUpThree');

});
