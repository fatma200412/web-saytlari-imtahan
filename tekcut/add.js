// burada x-i istifadeci ozu daxil edir, prompt kimi daxil olan
//  elementler string oldugu ucun number-e ceviririk
let x = prompt("X-in qiymetini daxil edin");
x = Number(x);

if (x == 0) {
  alert(`${x} ededi 0-a beraberdir`);
} else if (x % 2 == 0) {
  alert(`${x} ededi cutdur`);
} else {
  alert(`${x} ededi tekdir`);
}

