const beli = require('./beli')

let obj = {
    item: 'Gem stone',
    harga: 900,
    waktu: 100
}

beli(15000, obj)
    .then((kembalian) => {
        obj = {
            item: 'Mjolnir',
            harga: 2800,
            waktu: 100
        }
        return beli(kembalian, obj)
    })
    .then((kembalian) => {
        obj = {
            item: 'Tango',
            harga: 130,
            waktu: 100
        }
        return beli(kembalian, obj)
    })
    .then((kembalian) => {
        obj = {
            item: 'Morbit Mask',
            harga: 1100,
            waktu: 100
        }
        return beli(kembalian, obj)
    })
    .then((kembalian) => {
        obj = {
            item: 'Devine Rapier',
            harga: 6300,
            waktu: 100
        }
        return beli(kembalian, obj)
    })
    .catch((err) => {
        console.log(err)
    })