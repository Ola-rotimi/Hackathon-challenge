let mtn = [
  "0803",
  "0806",
  "0810",
  "0813",
  "0816",
  "07025",
  "07026",
  "0703",
  "0704",
  "0706",
  "0903",
  "0906",
  "0814",
];

let airtel = [
  "0802",
  "0808",
  "0808",
  "0708",
  "0701",
  "0812",
  "0902",
  "0907",
  "0901",
];

let glo = ["0805", "0807", "0811", "0815", "0905"];

let etisalat = ["0809", "0817", "0718", "0908", "0909"];

let countryCode = document.querySelector(`#country-code`);

countryCode.addEventListener(`change`, selectCountryCode);

let phoneNumber = document.querySelector(`#phoneNumber`);

phoneNumber.addEventListener(`input`, validatePhoneNumber);

function selectCountryCode() {
  if (countryCode.value == "Nigeria") {
    return (
      document.querySelector("#nigeria-logo").removeAttribute("hidden"),
      document.querySelector("#kenya-logo").setAttribute("hidden", "true")
    );
  } else if (countryCode.value == "Kenya") {
    return (
      document.querySelector("#kenya-logo").removeAttribute("hidden"),
      document.querySelector("#nigeria-logo").setAttribute("hidden", "true")
    );
  } else {
    return (
      document.querySelector("#kenya-logo").setAttribute("hidden", "true"),
      document.querySelector("#nigeria-logo").setAttribute("hidden", "true")
    );
  }
}

function validatePhoneNumber() {
  if (phoneNumber.value === "") {
    return;
  } else {
    if (
      mtn.includes(phoneNumber.value.slice(0, 4)) ||
      mtn.includes(phoneNumber.value.slice(0, 5))
    ) {
      return (
        document.querySelector("#nigeria-logo").removeAttribute("hidden"),
        (document.querySelectorAll(".nigeriaLogo")[3].style.border =
          "thick solid green")
      );
    } else if (airtel.includes(phoneNumber.value.slice(0, 4))) {
      return (
        document.querySelector("#nigeria-logo").removeAttribute("hidden"),
        (document.querySelectorAll(".nigeriaLogo")[1].style.border =
          "thick solid green")
      );
    } else if (glo.includes(phoneNumber.value.slice(0, 4))) {
      return (
        document.querySelector("#nigeria-logo").removeAttribute("hidden"),
        (document.querySelectorAll(".nigeriaLogo")[2].style.border =
          "thick solid green")
      );
    } else if (etisalat.includes(phoneNumber.value.slice(0, 4))) {
      return (
        document.querySelector("#nigeria-logo").removeAttribute("hidden"),
        (document.querySelectorAll(".nigeriaLogo")[0].style.border =
          "thick solid green")
      );
    } else {
      return (
        (document.querySelectorAll(".nigeriaLogo")[0].style.border = "none"),
        (document.querySelectorAll(".nigeriaLogo")[1].style.border = "none"),
        (document.querySelectorAll(".nigeriaLogo")[2].style.border = "none"),
        (document.querySelectorAll(".nigeriaLogo")[3].style.border = "none")
      );
    }
  }
}
