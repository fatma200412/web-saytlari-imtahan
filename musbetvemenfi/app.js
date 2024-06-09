function isareniTapanFunction(eded) {
  if (eded == 0) {
    alert(`${eded} eded 0-a beraberdir`);
  } else if (eded > 0) {
    alert(`${eded} ededi musbetdir`);
  } else {
    alert(`${eded} ededi menfidir`);
  }
}

let x = prompt("x-i daxil edin");
x = Number(x);
isareniTapanFunction(x);
