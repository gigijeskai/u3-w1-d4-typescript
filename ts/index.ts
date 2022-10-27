let api = fetch("../Abbigliamento.json").then((response) => response.json());

console.log(api);

document.addEventListener("DOMContentLoaded", function () {
  mostraAbbigliamento();
});

class Abbigliamento {
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
  constructor(
    id: number,
    codprod: number,
    collezione: string,
    capo: string,
    modello: number,
    quantita: number,
    colore: string,
    prezzoivaesclusa: number,
    prezzoivainclusa: number,
    disponibile: string,
    saldo: number
  ) {
    this.id = id;
    this.codprod = codprod;
    this.collezione = collezione;
    this.capo = capo;
    this.modello = modello;
    this.quantita = quantita;
    this.colore = colore;
    this.prezzoivaesclusa = prezzoivaesclusa;
    this.prezzoivainclusa = prezzoivainclusa;
    this.disponibile = disponibile;
    this.saldo = saldo;
  }
  getSaldoCapo() {}
  getAcquistoCapo() {}
}

function mostraAbbigliamento() {
  let capo = api.then((capo) => {
    let scaffale = new Abbigliamento(
      capo.id,
      capo.codprod,
      capo.collezione,
      capo.capo,
      capo.modello,
      capo.quantita,
      capo.colore,
      capo.prezzoivaesclusa,
      capo.prezzoivainclusa,
      capo.disponibile,
      capo.saldo
    );
    console.log(capo[0]);
  });
}
