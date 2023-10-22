document.querySelectorAll('input[type="number"]').forEach((input) => {
  input.oninput = () => {
    if (input.value.length > input.maxLength)
      input.value = input.value.slice(0, input.maxLength);
  };
});

let inputs = document.querySelectorAll('input[type="number"]');
inputs.forEach((num, index) => {
  num.dataset.id = index;

  num.addEventListener("keypress", () => {
    inputs[parseInt(num.dataset.id) + 1].focus();
  });
  num.addEventListener("keyup", () => {
    if (num.value.length == 5) {
      inputs[parseInt(num.dataset.id) + 1].focus();
    }
  });
});

let fild1 = document.getElementById("SysTd");
window.onload = function () {
  fild1.focus();
};

let Final = (document.getElementById("BtnDone").onclick = function () {
  let first, secound, result, tp;

  // first td
  let tdSystèmes = document.getElementById("SysTd").value,
    tdRéseaux = document.getElementById("ResTd").value,
    tdWeb = document.getElementById("WebTd").value;

  // first Exam

  let examSystèmes = document.getElementById("SysExam").value,
    examRéseaux = document.getElementById("ResExam").value,
    examWeb = document.getElementById("WebExam").value;

  // Secound td

  let tdJava = document.getElementById("JavaTd").value,
    tdAnalyse = document.getElementById("AnalTd").value,
    tdApprentissage = document.getElementById("ApprenTd").value;

  /// Secound Exam

  let examJava = document.getElementById("JavaExam").value,
    examAnalyse = document.getElementById("AnalExam").value,
    examApprentissage = document.getElementById("ApprenExam").value;

  // les tp

  let tpRéseaux = document.getElementById("ResTp").value,
    tpAnalyse = document.getElementById("AnalTp").value,
    tpApprentissage = document.getElementById("ApprenTp").value;
  let tpJava, tpweb;

  // Other modules

  let Imagerie = document.getElementById("ImageExam").value;
  Management = document.getElementById("ManageExam").value;

  // first calc

  let Systèmes = (tdSystèmes * 0.4 + examSystèmes * 0.6) * 2;
  let Réseaux = (tdRéseaux * 0.4 + examRéseaux * 0.6) * 2;
  let web = tdWeb * 0.4 + examWeb * 0.6;
  // secoun calc

  let Java = (tdJava * 0.4 + examJava * 0.6) * 2;
  let Analyse = tdAnalyse * 0.4 + examAnalyse * 0.6;
  let Apprentissage = tdApprentissage * 0.4 + examApprentissage * 0.6;

  // tp calc

  tpAnalyse *= 2;
  tpApprentissage *= 2;
  tpRéseaux *= 2;

  // General First calc

  first = (Systèmes + Réseaux + web) / 5;
  // General secound calc

  secound = (Java + Analyse + Apprentissage) / 4;

  //General tp calc

  tp = (tpAnalyse + tpApprentissage + tpRéseaux) / 6;

  result =
    (first * 5 + secound * 4 + tp * 6 + Imagerie * 1 + Management * 1) / 17;

  document.getElementById("Hresult").textContent = `${result.toFixed(2)}`;
  document.getElementById("Hresult1").textContent = `${first.toFixed(2)}`;
  document.getElementById("Hresult2").textContent = `${secound.toFixed(2)}`;
  document.getElementById("Hresult3").textContent = `${tp.toFixed(2)}`;
});

// console.log(` Moyen de Web, réseaux et SIH : ${first.toFixed(2)} `);
// console.log(` Moyen de BDD Médicales : ${secound.toFixed(2)}`);
// console.log(` Moyen des tp : ${tp.toFixed(2)}`);
// console.log(` The result is : ${result}`);
// let move = document.querySelector(".card").getElementsByTagNameNS("input").onclick=function(){
//
// }
