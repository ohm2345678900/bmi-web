function calculateBMI() {
  console.log("ปุ่มถูกกดแล้ว");
  
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
  else if (bmi < 30) status = "อ้วน";
  else status = "อ้วนมาก";

  document.getElementById("result").innerText =
    `BMI = ${bmi.toFixed(2)} (${status})`;
}


