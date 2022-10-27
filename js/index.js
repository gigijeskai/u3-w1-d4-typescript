"use strict";
// // let api = fetch("../Abbigliamento.json").then((response) => response.json());
//^prendo dei valori tipizzati
let IcapiAbbigliamento = [];
//ìcreo un array vuoto che conterra elementi dell'interfaccia
fetch("./Abbigliamento.json")
    .then((response) => response.json())
    .then((json) => {
    IcapiAbbigliamento = json;
    Idisplay(IcapiAbbigliamento);
    //^ posso mettere il json nell'array perche sono strutture uguali
})
    .catch((err) => console.log(err));
//^ faccio la fetch e una volta crata la funzione per stampare a schermo la richiamo nella fetch quando unisco i valori della fetch nell'array
function Idisplay(arr) {
    let overview = document.querySelector("#overview");
    arr.forEach((prodotto) => {
        let card = document.createElement("div");
        card.className = "card";
        card.innerHTML = ` <h1>${prodotto.capo}</h1>
      <h2>${prodotto.collezione}</h2>`;
        overview === null || overview === void 0 ? void 0 : overview.appendChild(card);
    });
}
//^ se non ho bisogno dei metodi di una classe posso tranquillamente creare un interfaccia che non utilizza i metodi
//--------------------------------------------------------------------------------------------------------------------------------------------------
// function mostraAbbigliamento() {
//   let capo = api.then((capo) => {
//     let scaffale = new Abbigliamento(
//       capo.id,
//       capo.codprod,
//       capo.collezione,
//       capo.capo,
//       capo.modello,
//       capo.quantita,
//       capo.colore,
//       capo.prezzoivaesclusa,
//       capo.prezzoivainclusa,
//       capo.disponibile,
//       capo.saldo
//     );
//     console.log(capo[0]);
//     console.log(capo[1]);
//     console.log(capo[2]);
//     console.log(capo[3]);
//     console.log(capo[4]);
//   });
// }
