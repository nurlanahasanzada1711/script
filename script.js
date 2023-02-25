let alisveris_meblegi = 2000
let endirim1 = (alisveris_meblegi * 95) / 100
let endirim2 = (alisveris_meblegi * 92) / 100
let endirim3 = (alisveris_meblegi * 90) / 100
if (alisveris_meblegi < 100) {
    console.log(endirim1);
}
else if (alisveris_meblegi >= 100 && alisveris_meblegi <= 1000) {
    console.log(endirim2);
}
else {
    console.log(endirim3);
}