const beli = require('./beli')
let nasgor = {
    item: 'Nasi Goreng',
    harga: 15000,
    waktu: 15
},
    miegor = {
        item: 'Mie Goreng',
        harga: 10000,
        waktu: 10
    },
    bekmad = {
        item: 'Bebek Madura',
        harga: 20000,
        waktu: 20
    },
    cendol = {
        item: 'Cendol',
        harga: 10000,
        waktu: 3
    },
    rujak = {
        item: 'Rujak',
        harga: 6000,
        waktu: 5
    }



beli(100000, rujak)
    .then(kembalian => {
        return beli(kembalian, cendol)
    })
    .then(kembalian => {
        return beli(kembalian, bekmad)
    })
    .then(kembalian => {
        return beli(kembalian, nasgor)
    })
    .then(kembalian => {
        return beli(kembalian, miegor)
    })
    .then(kembalian => {
        return beli(kembalian, bekmad)
    })
    .then(kembalian => {
        return beli(kembalian, nasgor)
    })
    .then(kembalian => {
        return beli(kembalian, miegor)
    })
    .catch(kembalian => {
        console.log(kembalian)
    })