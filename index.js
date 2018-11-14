const beli = require('./beli')

let money = 50
let car = {item: "car", harga: 100000, waktu: 500}
let clothes = {item: "clothes", harga: 10, waktu: 600}
let noodle = {item: "noodle", harga: 2, waktu: 700}
let coffee = {item: "coffee", harga: 1, waktu: 800}
let shoes = {item: "shoes", harga: 20, waktu: 900}
let chair = {item: "chair", harga: 10, waktu: 1000}

beli(money, clothes)
.then(function (result) {
    return beli(result,noodle)
})
.then(function (result) {
    return beli(result,coffee)
})
.then(function (result) {
    return beli(result, shoes)
})
.then(function (result) {
    return beli(result, chair)
})
.catch(function(err) {
    console.log(err)
})