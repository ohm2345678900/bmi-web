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
