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

// let inputs = document.querySelectorAll("input");
// inputs.forEach(function (input) {
//   input.addEventListener("input", function () {
//     if (this.value && this.nextElementSibling) {
//       this.nextElementSibling.focus();
//       return;
//     }
//     if (!this.value && this.previousElementSibling) {
//       this.previousElementSibling.focus();
//       return;
//     }
//   });
// });

let fild1 = document.getElementById("CapTd");
window.onload = function () {
  fild1.focus();
};
let Final = (document.getElementById("BtnDone").onclick = function () {
  let first, secound, result, tp, Last;

  // first td
  let CapTd = document.getElementById("CapTd").value,
    AnaTD = document.getElementById("AnaTD").value,
    TraitTd = document.getElementById("TraitTd").value;

  // first Exam

  let CapExam = document.getElementById("CapExam").value,
    AnaExam = document.getElementById("AnaExam").value,
    TraitExam = document.getElementById("TraitExam").value;

  // Secound td

  let AsserTd = document.getElementById("AsserTd").value,
    MesurTd = document.getElementById("MesurTd").value;

  /// Secound Exam

  let AsserExam = document.getElementById("AsserExam").value,
    MesurExam = document.getElementById("MesurExam").value;

  // les tp

  let CapTp = document.getElementById("CapTp").value,
    AnaTp = document.getElementById("AnaTp").value,
    TraitTp = document.getElementById("TraitTp").value,
    CAOTp = document.getElementById("CAOTp").value;
  // MesurTp = document.getElementById("MesurTp").value;

  // Other modules

  let Imagerie = document.getElementById("ImageExam").value,
    PlateauExam = document.getElementById("PlateauExam").value,
    Management = document.getElementById("ManageExam").value;

  // first calc

  let Capteur = (CapTd * 0.4 + CapExam * 0.6) * 2;
  let Analogique = (AnaTD * 0.4 + AnaExam * 0.6) * 2;
  let Traitemenet = (TraitTd * 0.4 + TraitExam * 0.6) * 2;
  // secoun calc

  let Asservissemenet = (AsserTd * 0.4 + AsserExam * 0.6) * 2;
  let Mesure = (MesurTd * 0.4 + MesurExam * 0.6) * 2;

  // tp calc

  let tpCapteur = CapTp,
    tpAnalogique = AnaTp,
    tpTraitemenet = TraitTp,
    tpCOA = CAOTp;

  // General First calc

  first = (Capteur * 1 + Analogique * 1 + Traitemenet * 1) / 6;
  // General secound calc

  secound = (Asservissemenet * 1 + Mesure * 1) / 4;

  //General tp calc

  tp = (tpCOA * 1 + tpTraitemenet * 1 + tpAnalogique * 1 + tpCapteur * 1) / 4;

  //  Last :
  Last = (PlateauExam * 1 + Imagerie * 1) / 2;

  result = (first * 6 + secound * 4 + tp * 4 + Last * 2 + Management * 1) / 17;

  document.getElementById("Hresult").textContent = `${result.toFixed(2)}`;
  document.getElementById("Hresult1").textContent = `${first.toFixed(2)}`;
  document.getElementById("Hresult2").textContent = `${secound.toFixed(2)}`;
  document.getElementById("Hresult4").textContent = `${Last.toFixed(2)}`;
  document.getElementById("Hresult3").textContent = `${tp.toFixed(2)}`;
});
