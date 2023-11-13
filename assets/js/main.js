// =========================
//    Objects_2-Level_1_1
// =========================
console.log("%c======Objects_2-Level_1_1======", "color:yellowgreen");

let person1 = {
  vorname: "Anton",
  nachname: "Fish",
  fullName: function () {
    return this.vorname + " " + this.nachname;
  },
};
console.log(person1.fullName());

// =========================
//    Objects_2-Level_1_2
// =========================
console.log("%c======Objects_2-Level_1_2======", "color:yellowgreen");

let person2 = {
  vorname: "Anton",
  nachname: "Fish",
  alter: 34,
  familienstand: "ledig",
  groesse: "178cm",
  profil: function () {
    return `Name: ${this.vorname}<br>Alter: ${this.alter}<br>Körpergröße: ${this.groesse}<br> Familienstand: ${this.familienstand}`;
  },
};
//gib das Profil von Anton mit diesem Code im Element mit der "person" aus.
// console.log(person2.profil());
document.getElementById("person_lvl2").innerHTML = person2.profil();

// =========================
//    Objects_2-Level_1_3
// =========================
console.log("%c======Objects_2-Level_1_3======", "color:yellowgreen");

let personFunction = {
  fullName: function () {
    return this.vorname + " " + this.nachname;
  },
};
let personObjekt = {
  vorname: "Anton",
  nachname: "Nüssler",
};

let anzeigeImHTMLDokument = `<p>${personFunction.fullName.call(
  personObjekt
)}</p>`;
document.getElementById("person_lvl3").innerHTML = anzeigeImHTMLDokument;

// =========================
//    Objects_2-Level_1_4
// =========================
console.log("%c======Objects_2-Level_1_4======", "color:yellowgreen");

function fahrrad() {
  console.log(this.name);
}

let name = "Canyon";
let obj1 = { name: "Merida", fahrrad: fahrrad };
let obj2 = { name: "Scott", fahrrad: fahrrad };

fahrrad();
obj1.fahrrad();
obj2.fahrrad();
