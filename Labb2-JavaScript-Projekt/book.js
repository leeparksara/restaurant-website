// Form validation script
let form = document.getElementById('myForm');
let userName = document.getElementById("name");
let userNum = document.getElementById("phone");
let userEmail = document.getElementById("email");


let nameError = document.getElementById('nameError');
let emailError = document.getElementById('emailError');
let phoneError = document.getElementById('phoneError');
let reserveBtn = document.getElementById('reseve-btn');

form.addEventListener("submit", function (e){

e.preventDefault();
  nameError.style.display = "none";
  emailError.style.display = "none";
  phoneError.style.display = "none";



  if (userName.value == "") {
    nameError.innerHTML = "Username is required";
  nameError.style.display = "block";
  nameError.style.color = '#de0000';

    return false;
  }

  if (userEmail.value == "") {
    emailError.innerHTML = "Email is required";
    emailError.style.display = "block";
    emailError.style.color = '#de0000';

    return false;
  }
  if (userNum.value == "") {
    phoneError.innerHTML = "Phone Number is required";
    phoneError.style.display = "block";
    phoneError.style.color = '#de0000';

    return false;
  } else {
    alert(" Your table is reserved, Thanks for booking!");
   myForm.style.display = "none";
   userInput();
  }
});



function showForm() {
  form.style.display = "block";


}






// Menu section script
// Menu section script
const searchBtn = document.getElementById("search-btn");
const menuList = document.getElementById("menu");
// event listeners
searchBtn.addEventListener("click", getMenuList);
// get meal list
function getMenuList() {
  let searchInputTxt = document.getElementById("search-input").value.trim();
  fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputTxt}`
  )
    .then((response) => response.json())
    .then((data) => {
      let html = "";
      if (data.meals) {
        data.meals.forEach((menu) => {
          html += `
                    <div class = "menu-item" data-id = "${menu.idMeal}">
                        <div class = "menu-img">
                            <img src = "${menu.strMealThumb}" alt = "food-image">
                        </div>
                        <div class = "menu-name">
                            <h3>${menu.strMeal}</h3>
                        </div>
                        <div class = "menu-price">
                            <h3>100 Sek</h3>
                        </div>
                    </div>
                `;
        });
        menuList.classList.remove("notFound");
      } else {
        html = "Sorry, we didn't find any menu!";
        menuList.classList.add("notFound");
      }

      menuList.innerHTML = html;
    });
}

//Contact section
// Finding area through fetch from Json
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





// Local web storage, This function will save the user input information after submitting the form
// Creat an empty array
let userData = [];

// Creat a function to show the objects inside the array
const userInput = (e) => {
  let userName = document.getElementById("name").value;
  let userPhone = document.getElementById("phone").value;
  let userEmail = document.getElementById("email").value;

  // Creat our object, We want to save the user name, email and phone number after submitting the form temporary

  // It will show us the user input value after submitting
  let dataObject = {
    name: userName,
    email: userEmail,
    number: userPhone,
  };

  userData.push(dataObject); // Array with objects will appear , ex. [{ "name": "Sara", "email": "saraleepark1994@gmail.com", "number": "010-44-555"}]//

  // We wanna display the data on the console as warning with yellow
  console.log("added >>>> " + userData[0].name + ", " + userData[0].email);
  ("save >>>> ");
  // "Important step", to save the user inputs we use JSON stringify
  localStorage.setItem("UserInformation", JSON.stringify(userData));

  document.forms[0].reset(); // This method will clear the form  when the user reload the page and make it ready for new inputs
};
