const beli = require('./beli')

const items = [
    {
        item: 'stang seher',
        harga: 200000,
        waktu: 2000
    },
    {
        item: 'ring seher',
        harga: 100000,
        waktu: 2000
    },
    {
        item: 'laher roda',
        harga: 50000,
        waktu: 2000
    },
    {
        item: 'karbu pwk',
        harga: 1000000,
        waktu: 2000   
    },
    {
        item: 'gir tiger',
        harga: 600000,
        waktu: 2000
    }
]

beli(1000000, items[0])
    .then(changes => {
        return beli(changes, items[1])
    })
    .then(changes => {
        return beli(changes, items[2])
    })
    .then(changes => {
        return beli(changes, items[3])
    })
    .then(changes => {
        return beli(changes, items[4])
    })
    .catch(err => {
        console.log(err)
    })