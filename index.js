const beli = require('./beli')

let obj = {
    item : 'celana',
    harga : 9000,
    waktu : 3
}
let obj1 = {
    item : 'baju',
    harga : 2000,
    waktu : 4
}

let obj2 = {
    item : 'cincin',
    harga : 2000,
    waktu : 5
}

let obj3 = {
    item : 'gelang',
    harga : 4000,
    waktu : 6
}

let obj4= {
    item : 'kayu',
    harga : 2000,
    waktu : 7
}

let obj5= {
    item : 'kayu',
    harga : 2000,
    waktu : 7
}

beli(10000, obj1)
    .then(kembalian => {
        console.log(kembalian.message)
        return beli(kembalian.kembalian, obj)
    })
    .then(kembalian => {
        console.log(kembalian.message)
        return beli(kembalian.kembalian, obj2)
    })
    .then(kembalian => {
        console.log(kembalian.message)
        return beli(kembalian.kembalian, obj3)
    })
    .then(kembalian => {
        console.log(kembalian.message)
        return beli(kembalian.kembalian, obj4)
    })
    .then(kembalian => {
        console.log(kembalian.message)
        return beli(kembalian.kembalian, obj5)
    })
    .catch(err => {
        console.log(err)
    })