// Ededin kubunu hesablayaraq paramerta yazan funksiya yaziriq
function ededinKubunuHesablayan(eded) {
  // ededin kubunu hesablayiriq
  let ededinKubu = eded * eded * eded;

  //   Burada kubu p elementinin icinde yaziriq
  let paragraf = `<p>${eded}-in kubu - ${ededinKubu}</p>`;

  //   yazdığımız paragrafi body-in içərisinə yazırıq
  document.body.innerHTML += paragraf;
}

let x = prompt("X-i daxil edin");
x = Number(x);
ededinKubunuHesablayan(x);
