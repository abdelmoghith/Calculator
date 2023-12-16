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
    if (event.key === "Enter") {
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

let loader = document.querySelector(".loader");
let body = document.querySelector(".html");

let Final = (document.getElementById("BtnDone").onclick = function () {
  let first, secound, result, tp, Last;

  loader.style.display = "inline";
  body.style.opacity = "0.2";

  setTimeout(() => {
    loader.style.display = "none";
    body.style.opacity = "1";
  }, 1000);

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

  // My Array

  let inputsvalue = [
    CapTd,
    AnaTD,
    TraitTd,
    CapExam,
    AnaExam,
    TraitExam,
    AsserTd,
    AsserExam,
    CapTp,
    MesurTd,
    MesurExam,
    AnaTp,
    TraitTp,
    CAOTp,
    Imagerie,
    PlateauExam,
    Management,
  ];
  console.log(inputsvalue);
  var otherresult = inputsvalue.every(function (value) {
    return (value != "") & (value <= 20) & (value >= 0);
  });
  // tp calc

  // let tpCapteur = CapTp,
  //   tpAnalogique = AnaTp,
  //   tpTraitemenet = TraitTp,
  //   tpCOA = CAOTp;

  // General First calc

  first = (Capteur * 1 + Analogique * 1 + Traitemenet * 1) / 6;
  // General secound calc

  secound = (Asservissemenet * 1 + Mesure * 1) / 4;

  //General tp calc

  tp = (CAOTp * 1 + TraitTp * 1 + AnaTp * 1 + CapTp * 1) / 4;

  //  Last :
  Last = (PlateauExam * 1 + Imagerie * 1) / 2;

  result = (first * 6 + secound * 4 + tp * 4 + Last * 2 + Management * 1) / 17;

  let erreur = document.getElementById("erreur");

  if (otherresult) {
    erreur.style.display = "none";
    setTimeout(() => {
      document.getElementById("Hresult").textContent = `${result.toFixed(2)}`;
      document.getElementById("Hresult1").textContent = `${first.toFixed(2)}`;
      document.getElementById("Hresult2").textContent = `${secound.toFixed(2)}`;
      document.getElementById("Hresult4").textContent = `${Last.toFixed(2)}`;
      document.getElementById("Hresult3").textContent = `${tp.toFixed(2)}`;
      document.getElementById("spcap").textContent = `  ${(Capteur / 2).toFixed(
        2
      )}`;
      // ############################################
      let span = document.querySelector(".card10m p:last-of-type");
      if (span.textContent < 10) {
        span.style.color = "red";
      } else {
        span.style.color = "green";
      }
      let span1 = document.querySelector(".card11m p:last-of-type");
      if (span1.textContent < 10) {
        span1.style.color = "red";
      } else {
        span1.style.color = "green";
      }

      let span2 = document.querySelector(".card12m p:last-of-type");
      if (span2.textContent < 10) {
        span2.style.color = "red";
      } else {
        span2.style.color = "green";
      }
      let span3 = document.querySelector(".card13m p:last-of-type");
      if (span3.textContent < 10) {
        span3.style.color = "red";
      } else {
        span3.style.color = "green";
      }
      let span4 = document.querySelector(".card14m p:last-of-type");
      if (span4.textContent < 10) {
        span4.style.color = "red";
      } else {
        span4.style.color = "green";
      }
      // ############################################
    }, 1000);

    document.getElementById("spea").textContent = ` ${(Analogique / 2).toFixed(
      2
    )}`;
    document.getElementById("sptr").textContent = ` ${(Traitemenet / 2).toFixed(
      2
    )}`;
    document.getElementById("spanasser").textContent = ` ${(
      Asservissemenet / 2
    ).toFixed(2)}`;
    document.getElementById("spanmesure").textContent = ` ${(
      Mesure / 2
    ).toFixed(2)}`;
    document.getElementById("spanplateau").textContent = ` ${(
      PlateauExam / 1
    ).toFixed(2)}`;
    document.getElementById("spanimage").textContent = ` ${(
      Imagerie / 1
    ).toFixed(2)}`;

    setTimeout(() => {
      let ue1 = document.getElementById("ue1");
      let ul1 = document.getElementById("ul1");

      ul1.style.display = "inline";
      ue1.style.paddingBottom = "5px";
      ue1.style.borderBottom = "2px solid #22c55e";

      let ue2 = document.getElementById("ue2");
      let ul2 = document.getElementById("ul2");

      ul2.style.display = "inline";
      ue2.style.paddingBottom = "5px";
      ue2.style.borderBottom = "2px solid #f59e0b";

      let ue3 = document.getElementById("ue3");
      let ul3 = document.getElementById("ul3");

      ul3.style.display = "inline";
      ue3.style.paddingBottom = "5px";
      ue3.style.borderBottom = "2px solid purple";
    }, 1000);
  } else {
    ul1.style.display = "none";
    ul2.style.display = "none";
    ul3.style.display = "none";
    erreur.style.display = "block";

    document.getElementById("Hresult").textContent = "...";
    document.getElementById("Hresult1").textContent = "...";
    document.getElementById("Hresult2").textContent = "...";
    document.getElementById("Hresult4").textContent = "...";
    document.getElementById("Hresult3").textContent = "...";
    document.getElementById("spcap").textContent = "...";
  }
});
