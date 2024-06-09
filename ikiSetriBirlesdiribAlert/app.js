// Iki setri birlesdiren funksiya yaziriq
function ikiSetriBirlesdiren(str1, str2) {
  // Daha sonra bu iki setri birlesdiririk və arada da boşluq qoyuruq
  let setrilerinBirlesmesi = str1 + " " + str2;

  //  indi ise alerte yazaq
  alert(setrilerinBirlesmesi);
}

let setr1 = "Hello";
let setr2 = "World";
ikiSetriBirlesdiren(setr1, setr2);

let string1 = prompt("1ci setri daxil edin");
let string2 = prompt("2ci setri daxil edin");
ikiSetriBirlesdiren(string1, string2);

