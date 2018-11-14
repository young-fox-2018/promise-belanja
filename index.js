const beli = require("./beli")
const obj = require("./item.json")
let uang  = 16000
beli(uang, obj[0])
    .then(function(kembalian) {
        return beli(kembalian, obj[1])
    })
    .then(function(kembalian2) {
        return beli(kembalian2, obj[2])
    })
    .then(function(kembalian3) {
        return beli(kembalian3, obj[3])
    })
    .then(function(kembalian4){
        return beli(kembalian4, obj[4])
    })
    .catch(function(err){
        console.log(err)
    })


