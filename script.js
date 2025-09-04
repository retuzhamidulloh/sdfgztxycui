let num1 = prompt("1-sonni kiriting:");
num1 = Number(num1);

let amal = prompt("Amalni tanlang:\n1 -> +\n2 -> -\n3 -> *\n4 -> /");

let num2 = prompt("2-sonni kiriting:");
num2 = Number(num2);

let kattaBox = document.createElement("div");
kattaBox.style.width = "800px";
kattaBox.style.height = "400px";
kattaBox.style.backgroundColor = "orange";
kattaBox.style.display = "flex";
kattaBox.style.justifyContent = "space-around";
kattaBox.style.alignItems = "center";
kattaBox.style.margin = "20px auto";
document.body.appendChild(kattaBox);

let amalBelgisi = "";
if (amal === "1") amalBelgisi = "+";
else if (amal === "2") amalBelgisi = "-";
else if (amal === "3") amalBelgisi = "*";
else if (amal === "4") amalBelgisi = "/";

function createSmallBox(text) {
  let box = document.createElement("div");
  box.style.width = "100px";
  box.style.height = "100px";
  box.style.border = "2px solid black";
  box.style.display = "flex";
  box.style.alignItems = "center";
  box.style.justifyContent = "center";
  box.style.fontSize = "22px";
  box.style.fontWeight = "bold";
  box.innerText = text;
  return box;
}

kattaBox.appendChild(createSmallBox(num1));
kattaBox.appendChild(createSmallBox(amalBelgisi));
kattaBox.appendChild(createSmallBox(num2));

let checkBtn = document.createElement("button");
checkBtn.innerText = "check";
checkBtn.style.width = "200px";
checkBtn.style.height = "70px";
checkBtn.style.backgroundColor = "green";
checkBtn.style.color = "white";
checkBtn.style.fontSize = "20px";
checkBtn.style.display = "block";
checkBtn.style.margin = "20px auto";
document.body.appendChild(checkBtn);

let redBtn = document.createElement("button");
redBtn.style.width = "200px";
redBtn.style.height = "70px";
redBtn.style.backgroundColor = "red";
redBtn.style.color = "white";
redBtn.style.fontSize = "28px";
redBtn.style.display = "block";
redBtn.style.margin = "20px auto";
document.body.appendChild(redBtn);

checkBtn.onclick = function () {
  let natija = 0;
  if (amal === "1") natija = num1 + num2;
  else if (amal === "2") natija = num1 - num2;
  else if (amal === "3") natija = num1 * num2;
  else if (amal === "4") natija = num1 / num2;
  redBtn.innerText = natija;
};
