const beli = require('./beli')

let itemPertama = {
    item: 'bawang',
    harga: 4000,
    waktu: 1000
}

let itemKedua = {
    item: 'ketoprak',
    harga: 15000,
    waktu: 1000
}

let itemKetiga = {
    item: 'sayur',
    harga: 2000,
    waktu: 1000
}

let itemKeempat = {
    item: 'arak',
    harga: 8000,
    waktu: 1000
}

let itemKelima = {
    item: 'bawal',
    harga: 20000,
    waktu: 1000
}

beli(2000, itemPertama)
    .then((kembalian) => {
        return beli(kembalian, itemKedua)  
    })
    .then((kembalian) => {
        return beli(kembalian, itemKetiga)
    })
    .then((kembalian) => {
        return beli(kembalian, itemKeempat)
    })
    .then((kembalian) => {
        return beli(kembalian, itemKelima)
    })
    .catch((err) => {

    })
    
