// bikin funct
const myForm = document.getElementById("myForm");

myForm.addEventListener("submit", function (e) {
  e.preventDefault(); // untuk melihat apakah form diisi dengan benar

  const inputs = myForm.querySelectorAll(".input");
  const warnings = myForm.querySelectorAll(".warning");

  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].value.trim() === "") {
      warnings[i].classList.remove("hidden"); //warning message
      inputs[i].classList.add("error"); //svg error
    } else {
      //to hide the warning message and the svg error
      warnings[i].classList.add("hidden");
      inputs[i].classList.remove("error");
    }
  }
});
