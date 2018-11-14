const beli = require('./beli')
let obj = [
    {
        item: 'Bala-bala',
        harga: 500,
        waktu: 1000
    },{
        item: 'Lemper',
        harga: 800,
        waktu: 1000
    },{
        item: 'Risoles',
        harga: 1500,
        waktu: 1000
    },{
        item: 'Lontong sayur',
        harga: 1000,
        waktu: 1000
    },{
        item: 'Gehu',
        harga: 500,
        waktu: 1000
    }
]
let uang = 5500
beli(uang, obj[0])
    .then(kembalian => {
        return beli(kembalian, obj[1])
    })
    .then(kembalian => {
        return beli(kembalian, obj[2])
    })
    .then(kembalian => {
        return beli(kembalian, obj[3])
    })
    .then(kembalian => {
        return beli(kembalian, obj[4])
    })
    .catch(err => {
        console.log(err)
    })

    