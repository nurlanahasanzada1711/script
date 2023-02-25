const qiymet = 1
const ilk_faiz = 20
const ikinci_faiz = 50
const ucuncu_faiz = 75
let saat = 7
let umumi_mebleg
if (saat <= 3) {
    umumi_mebleg = vaxt * qiymet
}
else if (saat >= 3 && saat <= 5) {
    umumi_mebleg = 3 * qiymet + (qiymet - (qiymet * ilk_faiz) / 100) * (saat - 3);
}
else if (saat <= 8) {
    umumi_mebleg = 3 * qiymet + (qiymet - (qiymet * ilk_faiz) / 100) * (saat - 6) + (qiymet - (qiymet * ikinci_faiz) / 100) * (time - 5);
}
else if (time > 8) {
    umumi_mebleg = (qiymet - (qiymet * ucuncu_faiz) / 100) * saat;
}
console.log(umumi_mebleg);

