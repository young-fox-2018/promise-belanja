const beli = require('./beli.js');

var permen = {
  item: "permen",
  harga: 1000,
  waktu: 1000
}

var bir = {
  item: "bir",
  harga: 75000,
  waktu: 1000
}

var mekdi = {
  item: "mekdi",
  harga: 40000,
  waktu: 1000
}

var beras = {
  item: "beras",
  harga: 60000,
  waktu: 1000
}

var cerutu = {
  item: "cerutu",
  harga: 150000,
  waktu: 1000
}

beli(5000, permen)
  .then(function(data) {
    console.log(data.message);
    return beli(data.kembalian, bir)
  })
  .then(function(data) {
    console.log(data.message);
    return beli(data.kembalian, mekdi)
  })
  .then(function(data) {
    console.log(data.message);
    return beli(data.kembalian, beras)
  })
  .then(function(data) {
    console.log(data.message);
    return beli(data.kembalian, cerutu)
  })
  .then(function(data) {
    console.log(data.message);
    console.log(`Selesai belanja, saatnya saya berpesta`);
  })
  .catch(function(err) {
      console.log(err);
  })