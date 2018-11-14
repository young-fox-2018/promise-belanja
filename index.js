const Beli = require('./beli')

const barang1 = {
    item : "Tas",
    harga: 5000,
    waktu: 3000
}
const barang2 = {
    item : "Baju",
    harga: 4500,
    waktu: 1500,
}
const barang3 = {
    item : "celana",
    harga: 3000,
    waktu: 2000,
}
const barang4 = {
    item : "sepatu",
    harga: 10000,
    waktu: 1000,
}
const barang5 = {
    item : "bunga",
    harga: 3500,
    waktu: 1500,
}

Beli(10000,barang1)
    .then((kembalian) => {
        return Beli(kembalian,barang2)
    })
    .then((kembalian) => {
        return Beli(kembalian,barang3)
    })
    .then((kembalian) => {
        return Beli(kembalian,barang4)
    })
    .then((kembalian) => {
        return Beli(kembalian,barang5)
    })
    .then((kembalian) => {
        console.log(`saya sudah selesai belanja dan kembalian saya ; ${kembalian}`)
    })
    .catch((err) => {
        console.log(err)
    })