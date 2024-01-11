document.querySelectorAll('input[type="number"]').forEach((input) => {
  input.oninput = () => {
    if (input.value.length > input.maxLength)
      input.value = input.value.slice(0, input.maxLength);
  };
});

let inputs = document.querySelectorAll('input[type="number"]');

inputs.forEach((num, index) => {
  num.dataset.id = index;
  // console.log(num.dataset.id);

  num.addEventListener("keypress", () => {
    if (event.key === "Enter") {
      inputs[parseInt(num.dataset.id) + 1].focus();
    }
  });
});

let fild1 = document.getElementById("SysTd");
window.onload = function () {
  fild1.focus();
};

let loader = document.querySelector(".loader");
let body = document.querySelector(".html");

// inputs.forEach((inputElement, index) => {
//   inputElement.addEventListener("input", () => {
//     inputElement.value = inputElement.value.replace(/[^0-9]/g, "");
//   });
// });

let Final = (document.getElementById("BtnDone").onclick = function () {
  let first, secound, result, tp;

  loader.style.display = "inline";
  body.style.opacity = "0.2";

  setTimeout(() => {
    loader.style.display = "none";
    body.style.opacity = "1";
  }, 1000);

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
  // td2Apprentissage = document.getElementById("ApprenTd2").value;

  /// Secound Exam

  let examJava = document.getElementById("JavaExam").value,
    examAnalyse = document.getElementById("AnalExam").value,
    examApprentissage = document.getElementById("ApprenExam").value;

  // les tp

  let tpRéseaux = document.getElementById("ResTp").value,
    tpAnalyse = document.getElementById("AnalTp").value,
    tpApprentissage = document.getElementById("ApprenTp").value;

  // Other modules

  let Imagerie = document.getElementById("ImageExam").value,
    Management = document.getElementById("ManageExam").value;

  // first calc

  let Systèmes = (tdSystèmes * 0.4 + examSystèmes * 0.6) * 2;
  let Réseaux = (tdRéseaux * 0.4 + examRéseaux * 0.6) * 2;
  let web = tdWeb * 0.4 + examWeb * 0.6;

  // secound calc

  let Java = (tdJava * 0.4 + examJava * 0.6) * 2;
  let Analyse = tdAnalyse * 0.4 + examAnalyse * 0.6;
  let Apprentissage = tdApprentissage * 0.4 + examApprentissage * 0.6;

  // my Array

  let inputsvalue = [
    tdSystèmes,
    tdRéseaux,
    tdWeb,
    examSystèmes,
    examRéseaux,
    examWeb,
    tdJava,
    tdAnalyse,
    tdApprentissage,
    examJava,
    examAnalyse,
    examApprentissage,
    tpRéseaux,
    tpAnalyse,
    tpApprentissage,
    Imagerie,
    Management,
  ];

  var otherresult = inputsvalue.every(function (value) {
    return (value != "") & (value <= 20) & (value >= 0);
  });

  // {
  //   console.log("yes");
  // } else {
  //   console.log("no");
  // }

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

  let erreur = document.getElementById("erreur");

  // inputvalues = document.querySelectorAll('input[type="number"]');

  // inputs.forEach(something =>{
  //   if(something.current)
  // })

  if (otherresult) {
    erreur.style.display = "none";

    setTimeout(() => {
      document.getElementById("Hresult").textContent = `${result.toFixed(2)}`;
      // if (result < 10) {
      //   document.getElementById("Hresult").style.color = "red";
      // } else {
      //   document.getElementById("Hresult").style.color = "green";
      // }
      document.getElementById("Hresult1").textContent = `${first.toFixed(2)}`;
      // if (first < 10) {
      //   document.getElementById("Hresult1").style.color = "red";
      // }
      document.getElementById("Hresult2").textContent = `${secound.toFixed(2)}`;
      // if (secound < 10) {
      //   document.getElementById("Hresult2").style.color = "red";
      // }
      document.getElementById("Hresult3").textContent = `${tp.toFixed(2)}`;
      // if (tp < 10) {
      //   document.getElementById("Hresult3").style.color = "red";
      // }

      document.getElementById("spansys").textContent = `${(
        Systèmes / 2
      ).toFixed(2)}`;
      document.getElementById("spanres").textContent = `${(Réseaux / 2).toFixed(
        2
      )}`;

      document.getElementById("spanweb").textContent = `${web.toFixed(2)}`;
      document.getElementById("spanjava").textContent = `${(Java / 2).toFixed(
        2
      )}`;
      document.getElementById("spanana").textContent = `${Analyse.toFixed(2)}`;
      document.getElementById(
        "spanappren"
      ).textContent = `${Apprentissage.toFixed(2)}`;

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
    }, 1000);
  } else {
    erreur.style.display = "block";
    ul1.style.display = "none";
    ul2.style.display = "none";

    document.getElementById("Hresult").textContent = "...";
    document.getElementById("Hresult1").textContent = "...";
    document.getElementById("Hresult2").textContent = "...";
    document.getElementById("Hresult3").textContent = "...";
  }
});

// console.log(` Moyen de Web, réseaux et SIH : ${first.toFixed(2)} `);
// console.log(` Moyen de BDD Médicales : ${secound.toFixed(2)}`);
// console.log(` Moyen des tp : ${tp.toFixed(2)}`);
// console.log(` The result is : ${result}`);
// let move = document.querySelector(".card").getElementsByTagNameNS("input").onclick=function(){
//
// }
