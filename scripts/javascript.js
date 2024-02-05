// Header Background Change

window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("change", window.scrollY > 0);
});

// Responsive Menu

var menuMobile = document.querySelector(".menu-mobile");

const burger = document.querySelector(".burger");

burger.addEventListener("click", () => {
  menuMobile.classList.toggle("open");
  burger.classList.toggle("active");
});

//check if the menuMobile is opened

document.addEventListener("click", function (e) {
  if (
    e.target !== menuMobile &&
    e.target !== burger &&
    !burger.contains(e.target)
  ) {
    if (burger.classList.contains("active")) {
      //toggle class menu-active  //
      menuMobile.classList.toggle("open");

      //toggle class open //
      burger.classList.remove("active");
    }
  }
});

// stop propagation on menuMobile

menuMobile.onclick = function () {
  e.stopPropagation();
};

// **************************************************************************************

// Changing the right click default menu

// document.oncontextmenu = rightClick;

// function rightClick(e) {
//   e.preventDefault();// Canceling the default context menu

//   // Adding our customized context menu

//   if (document.getElementById("contextMenu")
//     .style.display == "block")
//     hideMenu();
//   else {
//     var menu = document.getElementById("contextMenu")
//     menu.style.display = 'block';
//     menu.style.left = e.pageX + "px";
//     menu.style.top = e.pageY + "px";
//   }
// }

// // Hiding the customized menu when we click any place in the document

// document.onclick = hideMenu;
// function hideMenu() {
//   document.getElementById("contextMenu")
//     .style.display = "none"
// }

// Animation paragraph

// const text = "Je suis un développeur Web Full Stack débutant. Très investi, j'ai acquis de solides connaissances théoriques et pratiques en développement lors de ma formation en licence, que j'ai pu approfondir au cours de la formation.";
// const typingText = document.getElementById('typing-text');

// let i = -1;
// function typeWriter() {
//   if (i < text.length - 1) {
//     i++;
//     typingText.innerHTML += text.charAt(i);
//     setTimeout(typeWriter, 100); /* adjust typing speed as needed */
//   }
// }

// setTimeout(typeWriter, 100);

function typeSentence() {
  const text =
    "Je suis un développeur Web Full Stack, très passionné et déterminé. Fort de mon engagement, j'ai développé une expertise solide, tant sur le plan théorique que pratique, dans le domaine du développement.";
  const typingText = document.getElementById("typing-text");
  let i = 0;

  const intervalId = setInterval(() => {
    if (i < text.length) {
      typingText.textContent += text.charAt(i);
      i++;
    } else {
      clearInterval(intervalId);
    }
  }, 50); // Adjust typing speed as needed (1 second = 1000 milliseconds)
}

typeSentence();

// List of competences animation

let list = document.querySelectorAll(".skills ol li");
if (window.innerWidth <= 1800 && window.innerWidth >= 992) {
  for (i = 1; i <= list.length; i++) {
    gsap.from(`.skills ol li:nth-child(${i})`, {
      scrollTrigger: {
        trigger: `.skills ol li:nth-child(${i})`,
        start: "-=800",
        end: "+=700",
        scrub: false,
        toggleActions: "play",
      },
      yPercent: 100,
      opacity: 0,
      color: "#ff4500",
      duration: 1.0,
      delay: i / 3,
    });
  }
}

// **************************************************************************************

// Animation projects paragraphs

var show_divs = document.querySelectorAll(".show-div");

show_divs.forEach(function (show_div) {
  show_div.addEventListener("click", function () {
    var parent = show_div.parentNode;
    if (parent && parent.parentNode) {
      var allDivs = document.querySelectorAll(".pro");

      var divContainer = parent.parentNode;

      allDivs.forEach((div) => {
        if (div.classList.contains("height") && div != divContainer) {
          div.classList.remove("height");
          
        }
      });
      divContainer.classList.toggle("height");
    
    }
  });
});

// **************************************************************************************


