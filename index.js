const beli = require("./beli.js")


let obj = {
  item: "makanan",
  harga: 5000,
  waktu: 100
}

let obj2 = {
  item: "minuman",
  harga: 5000,
  waktu: 1000
}

let obj3 = {
  item: "baju",
  harga: 400000,
  waktu: 2000
}

let obj4 = {
  item: "sepatu",
  harga: 100000,
  waktu: 2000
}

let obj5 = {
  item: "jaket",
  harga: 100000,
  waktu: 2000
}

beli(360000,obj)
  .then((data)=>{
    console.log(data.message)
    return beli(data.uang,obj2)
  .then((data)=>{
    console.log(data.message)
    return beli(data.uang,obj3)
  .then((data)=>{
    console.log(data.message)
    return beli(data.uang,obj4)
  .then((data)=>{
    console.log(data.message)
    return beli(data.uang,obj5)
  .then((data)=>{
    console.log(data.message)
  })
  })
  })
  })
})
.catch((err)=>{
  console.log(err)
})