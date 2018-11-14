const beli = require('./beli')

let obj1 = {
    item: "roti",
    harga: 5000,
    waktu: 3
}

// beli(10000, obj, function(hasil) {
//     console.log(hasil);
// })

beli(20000, obj1)
    .then(kembalian => {
        console.log(kembalian);
        return beli(kembalian, obj1)
    })
    .then(kembalian => {
        console.log(kembalian);
    })
    .catch(err => {
        console.log(err);
    })
