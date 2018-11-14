let buy = require('./beli.js')
let uang = 350000

let obj = [{
    item: "pete",
    harga: 10000,
    waktu: 1000
}, {
    item: "sayur",
    harga: 15000,
    waktu: 1500
}, {
    item: "bensin",
    harga: 50000,
    waktu: 2000
}, {
    item: "furniture",
    harga: 300000,
    waktu: 5000
}, {
    item: "mainan",
    harga: 15000,
    waktu: 1000
}, {
    item: "mainan",
    harga: 15000,
    waktu: 1000
}]

buy(350000,obj[0]).then((data) => {
    return buy(data, obj[1])
}).then((data) => {
    return buy(data, obj[2])
}).then((data) => {
    return buy(data, obj[3])
}).catch((err) => {
    console.log(err);
});