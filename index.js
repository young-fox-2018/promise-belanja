const beli = require('./beli')

let shoppingList = [
    {
        item: 'Keyboard',
        harga: 100000,
        waktu: 1000
    },
    {
        item: 'Mouse',
        harga: 60000,
        waktu: 2000
    },
    {
        item: 'Flashdisk',
        harga: 20000,
        waktu: 3000
    },
    {
        item: 'Kabel',
        harga: 10000,
        waktu: 3000
    },
    {
        item: 'Flashdisk',
        harga: 20000,
        waktu: 3000
    }
];

beli(200000, shoppingList[0])
    .then(function (kembalian) {
        return beli(kembalian, shoppingList[1])
    })
    .then(function (kembalian) {
        return beli(kembalian, shoppingList[2])
    })
    .then(function (kembalian) {
        return beli(kembalian, shoppingList[3])
    })
    .then(function (kembalian) {
        return beli(kembalian, shoppingList[4])
    })
    .catch(function (err) {
        console.log(err)
    })