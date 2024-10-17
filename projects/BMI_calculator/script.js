const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault(); //ensures that the page won't reload when the user submits the form, allowing you to calculate and display the BMI directly on the page.

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#result");
  //isNaN checks whether value is convertable to number or not
  if (height === "" || height <= 0 || isNaN(height)) {
    result.innerHTML = "Please enter valid height";
  } else if (weight === "" || weight <= 0 || isNaN(weight)) {
    result.innerHTML = "Please enter valid weight";
  } else {
    const bmiResult = (weight / ((height * height) / 10000)).toFixed(2);
    const resultMsg =
      bmiResult < 18.6
        ? "Under weight"
        : bmiResult > 18.6 && bmiResult < 24.9
        ? "Normal Range"
        : "Over weight";
    result.innerHTML = `Your BMI score is ${bmiResult} <br>${resultMsg}`;
  }
});
