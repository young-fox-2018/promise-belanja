const beli = require('./beli');

let baju = {item: "baju", harga: 250000, waktu: 2};
let rok = {item: "rok", harga: 85000, waktu: 2};
let jilbab = {item: "jilbab", harga: 40000, waktu: 2};
let heels = {item: "heels", harga: 5000000, waktu: 2};
let wedges = {item: "wedges", harga: 180000, waktu: 2};

beli(1000000, baju)
  .then((kembalian) => {
    return beli(kembalian, rok);
  })
  .then((kembalian) => {
    return beli(kembalian, jilbab);    
  })
  .then((kembalian) => {
    return beli(kembalian, heels);
  })
  .then((kembalian) => {
    return beli(kembalian, wedges);  
  })
  .then((kembalian) => {
    console.log(`Saya selesai belanja. Uang saya sekarang ${kembalian}`);
  })
  .catch((err) => {
      console.log(err);
  })