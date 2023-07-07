document.addEventListener("DOMContentLoaded", function() {
  const loginBtn = document.getElementById("loginbtn");
  loginBtn.addEventListener("click", login);
    function login() {
      const popup = document.getElementById("container");
      popup.classList.remove("hidden");
      loginBtn.removeEventListener("click", login);

    }
  });

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("explore-btn").addEventListener("click", function() {
      window.open("https://www.cardekho.com/mostpopularcars", "_blank");
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("search-btn").addEventListener("click", function() {
    const location = document.getElementById("location-input").value;
    const date = document.getElementById("date-input").value;
    const time = document.getElementById("time-input").value;
    const carType = document.getElementById("car-type").value;
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const viewButtons = document.querySelectorAll(".view-btn");
  const closeButtons = document.querySelectorAll("#close-btn");
  const popups = document.querySelectorAll(".popup");

  viewButtons.forEach((viewBtn, index) => {
    viewBtn.addEventListener("click", () => {
      openPopup(index);
    });
  });

  closeButtons.forEach((closeBtn, index) => {
    closeBtn.addEventListener("click", () => {
      closePopup(index);
    });
  });

  function openPopup(index) {
    popups[index].classList.remove("hidden");
  }

  function closePopup(index) {
    popups[index].classList.add("hidden");

  }
});



