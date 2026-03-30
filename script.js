const pages = ['home', 'workouts', 'bmi', 'classes'];

function showPage(id) {
  pages.forEach(p => document.getElementById(p).classList.remove('active'));
  document.getElementById(id).classList.add('active');

  document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
  document.querySelectorAll('nav a')[pages.indexOf(id)].classList.add('active');
}

function calcBMI() {
  const weight = parseFloat(document.getElementById('weight').value);
  const height = parseFloat(document.getElementById('height').value);

  if (!weight || !height) return;

  const bmi = weight / ((height / 100) ** 2);

  document.getElementById('bmi-num').textContent = bmi.toFixed(1);

  let category;

  if (bmi < 18.5) category = "Underweight";
  else if (bmi < 25) category = "Normal weight";
  else if (bmi < 30) category = "Overweight";
  else category = "Obese";

  document.getElementById('bmi-cat').textContent = category;
}
