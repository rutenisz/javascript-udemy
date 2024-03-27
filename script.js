// function how many left to live

function lifeInWeeks(age) {
  const finalAge = 90;
  const months = (finalAge - age) * 12;
  const weeks = (finalAge - age) * 52;
  const days = (finalAge - age) * 365;

  console.log(
    "You have " +
      days +
      " days, " +
      weeks +
      " weeks, " +
      months +
      " months left to live."
  );
}

console.log(lifeInWeeks(56));

//Create your function below this line.
//The first parameter should be the weight and the second should be the height.

function BMI(weight, height) {
  const bmiCalculator = weight / (height * height);
  return Math.round(bmiCalculator);
}

console.log(BMI(65, 1.8));
/* If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:

var bmi = bmiCalculator(65, 1.8); 

bmi should equal 20 when it's rounded to the nearest whole number.

*/
