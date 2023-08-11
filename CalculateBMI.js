// DESCRIPTION:
// Write function bmi that calculates body mass index (bmi = weight / height2).

//Examples:
// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

function bmi(weight, height) {
  const bmiNum = weight / (height * height);
  if (bmiNum <= 18.5) return "Underweight";
  else if (bmiNum <= 25.0) return "Normal";
  else if (bmiNum <= 30.0) return "Overweight";
  else return "Obese";
}

//good
const bmi = (w, h, bmi = w / h / h) =>
  bmi <= 18.5
    ? "Underweight"
    : bmi <= 25
    ? "Normal"
    : bmi <= 30
    ? "Overweight"
    : "Obese";

function bmi(weight, height) {
  var formula = weight / Math.pow(height, 2);
  switch (true) {
    case formula <= 18.5:
      return "Underweight";
    case formula <= 25.0:
      return "Normal";
    case formula <= 30:
      return "Overweight";
    default:
      return "Obese";
  }
}
