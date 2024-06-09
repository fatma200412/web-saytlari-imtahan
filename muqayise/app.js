let x = prompt("X-i daxil edin:");
x = Number(x);
let y = prompt("Y-i daxil edin");
y = Number(y);

if (x == y) {
  alert(`${x} ve ${y} ededleri Beraberdir`);
} else if (x > y) {
  alert(`${x} ve ${y} ededlerinden ${x} ededi Boyukdur`);
} else {
  alert(`${x} ve ${y} ededlerinden ${y} ededi Boyukdur`);
}

