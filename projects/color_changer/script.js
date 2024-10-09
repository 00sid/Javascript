const allButtons = document.querySelectorAll(".button");
document.body.style.alignContent = "center";
console.log(allButtons);
allButtons.forEach((button) => {
  button.style.backgroundColor = button.id;
});

allButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    console.log(e);
    document.body.style.backgroundColor = button.id;
  });
});

if (document.body.style.backgroundColor == "white") {
  document.querySelector(".hide").style.display = "none";
}
