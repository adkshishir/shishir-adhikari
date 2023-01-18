const photoPlace = document.getElementById("item1");
const mainNav = document.getElementById("main-nav");
const toggle = document.getElementById("toggle");
let navActive = false;
const mql = window.matchMedia("(min-width: 600px)");

const changePhoto = () => {
  const photos = ["p1", "p2", "p3", "p4", "p5"];
  const index = Math.floor(Math.random() * photos.length);
  photoPlace.innerHTML = `<img src="img/${photos[index]}.jpeg" width="95%"/>`;
};
setInterval(() => {
  const photos = ["p1", "p2", "p3", "p4", "p5"];
  const index = Math.floor(Math.random() * photos.length);
  photoPlace.src = `img/${photos[index]}.jpeg`;
}, 5000);

function toggleFunction() {
  if (navActive) {
    toggle.innerHTML = ` <svg width="40" height="17" xmlns="http://www.w3.org/2000/svg">
    <g fill="#00001A" fill-rule="evenodd">
      <path d="M0 0h40v3H0zM0 7h40v3H0zM0 14h40v3H0z" />
      <path d="M0 0h40v3H0z" />
    </g>
  </svg>`;

    mainNav.style.transform = "translateX(100vw)";
    toggle.style.transform = "translateX(-100vw)";
  } else {
    toggle.innerHTML = `
    <svg width="32" height="31" xmlns="http://www.w3.org/2000/svg"><g fill="#00001A" fill-rule="evenodd"><path d="m2.919.297 28.284 28.284-2.122 2.122L.797 2.419z"/><path d="M.797 28.581 29.081.297l2.122 2.122L2.919 30.703z"/></g></svg>
    `;
    mainNav.style.transform = "translateX(0)";
    toggle.style.transform = "translateX(0)";
  }
  navActive = !navActive;
}

window.onresize = function () {
  if (window.innerWidth > 900) {
    mainNav.style.transform = "translateX(0)";
  } else {
    mainNav.style.transform = "translateX(100vw)";
    toggle.style.transform = "translateX(-100vw)";
    toggle.innerHTML = ` <svg width="40" height="17" xmlns="http://www.w3.org/2000/svg">
    <g fill="#00001A" fill-rule="evenodd">
      <path d="M0 0h40v3H0zM0 7h40v3H0zM0 14h40v3H0z" />
      <path d="M0 0h40v3H0z" />
    </g>
  </svg>`;

    navActive = false;
  }
};
toggle.onclick = toggleFunction;
function generatePDF() {
  // Assign the HTML content of the CV to a variable
  var cvContent = document.getElementById("cv").innerHTML;

  // Create a new jsPDF object
  var pdf = new jsPDF();

  // Add the CV content to the PDF
  pdf.fromHTML(cvContent);

  // Save the PDF
  pdf.save("CV.pdf");
}
