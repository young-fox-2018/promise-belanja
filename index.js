const beli = require("./beli");

obj1 = {
    item : "ikan",
    harga: 5000,
    waktu : 300
}
obj2 = {
    item : "tempee",
    harga: 2000,
    waktu : 300
}
obj3 = {
    item : "emas",
    harga: 50000,
    waktu : 300
}
obj4 = {
    item : "pempek",
    harga: 6000,
    waktu : 300
}
obj5 = {
    item : "telor",
    harga: 2000,
    waktu : 300
}

beli(50000,obj1)
.then((uang) =>{
    return beli(uang,obj2)
})
.then((uang) => {
    return beli(uang,obj3)
})
.then((uang) => {
    return beli(uang,obj4)
})
.then((uang) => {
    return beli(uang,obj5)
})
