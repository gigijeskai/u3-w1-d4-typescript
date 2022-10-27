// // let api = fetch("../Abbigliamento.json").then((response) => response.json());

// // console.log(api);

// // document.addEventListener("DOMContentLoaded", function () {
// //   mostraAbbigliamento();
// // });

// class Abbigliamento {
//   // id: number;
//   // codprod: number;
//   // collezione: string;
//   // capo: string;
//   // modello: number;
//   // quantita: number;
//   // colore: string;
//   // prezzoivaesclusa: number;
//   // prezzoivainclusa: number;
//   // disponibile: string;
//   // saldo: number;
//   constructor(
//     public id: number,
//     public codprod: number,
//     public collezione: string,
//     public capo: string,
//     public modello: number,
//     public quantita: number,
//     public colore: string,
//     public prezzoivaesclusa: number,
//     public prezzoivainclusa: number,
//     public disponibile: string,
//     public saldo: number //^ rendendo public i valori del costruttore posso omettere la definizione dei valori prima del costruttore
//   ) {
//     this.id = id;
//     this.codprod = codprod;
//     this.collezione = collezione;
//     this.capo = capo;
//     this.modello = modello;
//     this.quantita = quantita;
//     this.colore = colore;
//     this.prezzoivaesclusa = prezzoivaesclusa;
//     this.prezzoivainclusa = prezzoivainclusa;
//     this.disponibile = disponibile;
//     this.saldo = saldo;
//   }
//   getSaldoCapo(): number {
//     return (this.prezzoivainclusa * this.saldo) / 100;
//   }
//   getAcquistoCapo(): number {
//     return this.prezzoivainclusa - this.getSaldoCapo();
//   }
// }
// //^ creo una classe con 2 metodi

// let capiAbbigliamento: Abbigliamento[] = [];
// //^ creo un array di tipo abbigliamento che è la classe che ho creato dove pushero gli oggetti creati con quella classe
// fetch("./Abbigliamento.json")
//   .then((response) => response.json())
//   //^chiamata ajax prendo la risposta e la converto in json
//   // .then((json) => console.log(json));
//   //^ console.log per vedere se è stata presa la fetch
//   .then((json) => getCapi(json))
//   .catch((err) => console.log(err));

// function getCapi(dati: any[]) {
//   //^questa funzione passo come parametro un array vuoto e la passo al then json che verr passato a questa funzione che lo itererà in  questo modo da un array di oggetti
//   // avro singoli oggetti nell'array
//   dati.forEach((element) => {
//     let { id, codprod, collezione, capo, modello, quantita, colore, prezzoivaesclusa, prezzoivainclusa, disponibile, saldo } = element;
//     //^dopodichè farò la destrutturazione per avere i valori di un oggetto e creare un oggetto con questi valori
//     capiAbbigliamento.push(new Abbigliamento(id, codprod, collezione, capo, modello, quantita, colore, prezzoivaesclusa, prezzoivainclusa, disponibile, saldo));
//     //^creo un nuovo oggetto pushandolo nell'array che ho creato prima richiamando i valori che ho destrutturato
//   });
//   display(capiAbbigliamento);
// }
// function display(arr: Abbigliamento[]) {
//   let overview = document.querySelector("#overview");
//   arr.forEach((prodotto) => {
//     let card = document.createElement("div");
//     card.className = "card";
//     card.innerHTML = ` <h1>${prodotto.capo}</h1>
//     <h2>${prodotto.collezione}</h2>
//     <h3>${prodotto.getSaldoCapo()}</h3>
//    <h4>${prodotto.getAcquistoCapo()}</h4>`;
//     overview?.appendChild(card);
//   });
// }
//^creo una funzione che stampa a schermo delle card con gli oggetti della classe abbigliamento selezionando come parametro l'array di tipo
//abbigliamento, selezionando un tag html, per ogni elemento dell'array di oggetti creo una div classe card con dei valori selezionati, attacco le
//card all'html e richiamo la funzione nella funzione che crea l'arry di oggetti classe abbigliamento

//--------------------------------------------------------------------------------------------------------------------------------------------------

//interfaccia

interface IAbbigliamento {
  id: number;
  codprod: number;
  collezione: string;
  capo: string;
  modello: number;
  quantita: number;
  colore: string;
  prezzoivaesclusa: number;
  prezzoivainclusa: number;
  disponibile: string;
  saldo: number;
}
//^prendo dei valori tipizzati

let IcapiAbbigliamento: IAbbigliamento[] = [];
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

function Idisplay(arr: IAbbigliamento[]) {
  let overview = document.querySelector("#overview");
  arr.forEach((prodotto) => {
    let card = document.createElement("div");
    card.className = "card";
    card.innerHTML = ` <h1>${prodotto.capo}</h1>
      <h2>${prodotto.collezione}</h2>`;

    overview?.appendChild(card);
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
