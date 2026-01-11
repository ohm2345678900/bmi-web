feature/html-form
function calculateBMI() {
  const height = document.getElementById("height").value;
  const weight = document.getElementById("weight").value;

  if (height === "" || weight === "") {
    document.getElementById("result").innerText = "กรุณากรอกข้อมูลให้ครบ";
    return;
  }

  const heightM = height / 100;
  const bmi = weight / (heightM * heightM);

  let status = "";
  if (bmi < 18.5) status = "ผอม";
  else if (bmi < 25) status = "ปกติ";
  else status = "อ้วน";

  document.getElementById("result").innerText =
    `BMI = ${bmi.toFixed(2)} (${status})`;
}
console.log("BMI Web Loaded");
document.getElementById("bmiForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;

  if (weight === "" || height === "") {
    alert("กรุณากรอกข้อมูลให้ครบ");
    return;
  }

  height = height / 100; // แปลง cm → m
  let bmi = weight / (height * height);
  bmi = bmi.toFixed(2);

  let result = "";
  if (bmi < 18.5) {
    result = "ผอม";
  } else if (bmi < 25) {
    result = "ปกติ";
  } else if (bmi < 30) {
    result = "อ้วน";
  } else {
    result = "อ้วนมาก";
  }

  document.getElementById("result").innerHTML =
    "BMI = " + bmi + "<br>สถานะ: " + result;
});
dev
