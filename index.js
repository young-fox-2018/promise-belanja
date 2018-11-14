const beli = require('./beli')

let obj = {
    item: 'roti', 
    harga: 5000, 
    waktu: 1000
}

obj2 = {
    item: 'sayur', 
    harga: 2000, 
    waktu: 1000
}

obj3 = {
    item: 'daging', 
    harga: 100000, 
    waktu: 1000
}

obj4 = {
    item: 'apel', 
    harga: 4000, 
    waktu: 1000
}

beli(20000, obj)
    .then((kembalian) => {
        return beli(kembalian, obj2)
    })
    .then((kembalian) => {
        return beli(kembalian, obj3)
    })
    .then((kembalian) => {
        return beli(kembalian, obj4)
    })
    .then((kembalian, obj4) => {
        console.log(`saya sudah selesai belanja`)
    })
    .catch((err) => {
        console.log(err)
    });