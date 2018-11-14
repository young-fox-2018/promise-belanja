
const beli = require("./beli")

var candy = {
    item : "permen",
    harga : 1000,
    waktu : 500
}

var chips = {
    item : "chips",
    harga : 10000,
    waktu : 500
}

var sugar = {
    item : "sugar",
    harga : 30000,
    waktu : 500
}

var salt = {
    item : "salt",
    harga : 3000,
    waktu : 500
}

var vinegar = {
    item : "vinegar",
    harga : 50000,
    waktu : 500
}

beli(1000000, candy)
    .then(function(data) {
        console.log(data)
    })