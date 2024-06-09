// Iki paramert götürən funksiya yaziriq
function ikiSetriBirlesdirenParagraf(str1, str2) {
  // Daha sonra bu iki setri birlesdiririk və arada da boşluq qoyuruq
  let ikiSetriBirlesdiren = str1 + " " + str2;

  //   Burada isə birlesdirdiyimiz sətrləri p elementinin icinde yaziriq
  let paragraf = `<p>${ikiSetriBirlesdiren}</p>`;

  //   yazdığımız paragrafi body-in içərisinə yazırıq
  document.body.innerHTML += paragraf;
}

let setr1 = "Hello";
let setr2 = "World";
ikiSetriBirlesdirenParagraf(setr1, setr2);

let setrA = prompt("1ci setri daxil et");
let setrB = prompt("2ci setri daxil et");
ikiSetriBirlesdirenParagraf(setr2, setrB);
