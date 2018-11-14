const beli = require("./beli")

let monitor = {
    item: "monitor",
    harga: 1000,
    waktu: 1000
}
let keyboard = {
    item: "keyboard",
    harga: 300000,
    waktu: 500
}
let mouse = {
    item: "mouse",
    harga: 50,
    waktu: 500
}

beli(1000000, monitor)
    .then((kembalian) => {
        return beli(kembalian, keyboard)
    })
    .then((kembalian) => {
        return beli(kembalian, keyboard)
    })
    .then((kembalian) => {
        return beli(kembalian, keyboard)
    })
    .then((kembalian) => {
        return beli(kembalian, mouse)
    })
    .then((kembalian) => {
        return beli(kembalian, keyboard)
    })

    .catch((err) => {
        console.log(err)
    })

