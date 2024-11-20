// Function to handle conversion
document.getElementById("convertBtn").addEventListener("click", function () {
  const conversionType = document.getElementById("conversionType").value;
  const inputField = document.getElementById("temperatureInput");
  const temperature = Number(inputField.value);
  const resultField = document.getElementById("result");
  const thermometerImg = document.getElementById("thermometer");
  const button = document.getElementById("convertBtn");

  if (isNaN(temperature)) {
    resultField.innerText = "Please enter a valid number!";
    return;
  }

  let result;
  if (conversionType === "ftoc") {
    // Fahrenheit to Celsius
    result = Math.round(((temperature - 32) * 5) / 9);
    resultField.innerText = `Result: ${result} °C`;
  } else if (conversionType === "ctof") {
    // Celsius to Fahrenheit
    result = Math.round((temperature * 9) / 5 + 32);
    resultField.innerText = `Result: ${result} °F`;
  }

  // Clear the input field
  inputField.value = "";

  // Change the button background color
  button.style.backgroundColor = "#26d978";

  // Display thermometer image

  thermometerImg.style.display = "block";
});
