//slide show code starts//
var counter = 1;
setInterval(function () {
  document.getElementById("radio" + counter).checked = true;
  counter++;
  if (counter > 4) {
    counter = 1;
  }
}, 3000);

// slide show code ends//


//About Us section starts
// Creat element,  title and about us text will appear on the about us section//
const aboutText = document.createElement("p");
const aboutTitle = document.createElement("h1");
aboutTitle.innerHTML = "About Us";
document.getElementById("about").appendChild(aboutTitle);

aboutText.innerHTML = "We welcome you with modern and authentic Indian, Philippines and Korean dishes. Our restaurant is an intimate place designed to gather and share our passion for quality time, food and culture.";
document.getElementById("about").appendChild(aboutText);

// Showing chart
let divID = document.getElementById("div-id");
let aboutSection = document.getElementById("about-us");
function showForm() {
  divID.style.display = "block";
  aboutSection.style.height = "135vh";
}


//Chart script
const myChart = document.getElementById("myChart").getContext("2d");
let barChart = new Chart(myChart, {
  type: "bar",
  data: {
    labels: ["2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022"],
    datasets: [
      {
        label: "customers",
        data: [
          100000, 500000, 400000, 600000, 1000000, 800000, 1500000, 2000000,
        ],
        backgroundColor: [
          "green",
          "pink",
          "blue",
          "yellow",
          "purple",
          "rgb(255, 99, 132)",
          "rgb(255, 205, 86)",
          "rgb(54, 162, 235)",
        ],
        borderWidth: 1,
        borderColor: "grey",
        hoverBorderWidth: 2,
        hoverBorderColor: "black",
      },
    ],
  },
  options: {},
  layout: {
    left: 50,
    right: 0,
    bottom: 0,
    top: 0,
  },
});
//About Us section ends
//Contact section
// Finding area through fetch from API

const selectDrop = document.querySelector("#countries");
fetch("https://avancera.app/cities/")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    let output = "";
    data.forEach((country) => {
      console.log(country.name);
      output += `<option>${country.name}  </option> `;
    });
    selectDrop.innerHTML = output;
  });

//footer script//

// Send Email
function sendEmail() {
  window.location = "mailto:trio.jacgitsar@yahoo.com";
}

/*Customer review section*/

let rate = 0;

function submitRate() {
  let user = document.getElementById("user").value;

  let review = document.getElementById("review").value;

  if (rate != 0 && user != "" && review != "") {
    let html =
      "<h4>User: <label class='text-primary'>" +
      user +
      "</label></h4>" +
      "<h4>Rating: <label class='text-primary'>" +
      rate +
      "</label></h4>" +
      "<h4>Review</h4>" +
      "<p>" +
      review +
      "</p>" +
      "<hr style='border-top:1px solid #000;'/>";

    document.getElementById("result").innerHTML += html;

    document.getElementById("user").value = "";

    document.getElementById("review").value = "";
  }
}

function startRating(item) {
  rate = item.id[0];

  sessionStorage.star = rate;

  for (var i = 0; i < 5; i++) {
    if (i < rate) {
      document.getElementById(i + 1).style.color = "green";
    } else {
      document.getElementById(i + 1).style.color = "black";
    }
  }
}
