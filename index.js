let beli = require('./beli')

objProduk = [
    {
        item : 'Sabun',
        harga : 5000,
        waktu : 2000,
    },
    {
        item : 'Sikat Gigi',
        harga : 9000,
        waktu : 3000,
    },
    {
        item : 'Aqua',
        harga : 30000,
        waktu : 1000,
    },
    {
        item : 'Minyak Goreng',
        harga : 25000,
        waktu : 2000,
    },
    {
        item : 'Cokelat',
        harga : 1000,
        waktu : 1000,
    },
]

beli(50000, objProduk[0])
    .then(kembalian => {
        return beli(kembalian, objProduk[1])
    .then(kembalian => {
        return beli(kembalian, objProduk[2])
    .then(kembalian => {
        return beli(kembalian, objProduk[3])
    .then(kembalian => {
        return beli(kembalian, objProduk[4])
    })
    })
    })
    }).catch(err => {
        console.log(err)
    })