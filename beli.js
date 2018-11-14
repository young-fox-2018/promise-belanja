function beli(uang, obj){
  console.log(`Saya pergi membeli ${obj.item}`)
  return new Promise ((resolve, reject) => {
    setTimeout(function(){
      let kembalian = uang - obj.harga
      if (kembalian <= 0) {
        reject(`uang gk cukup nih buat beli ${obj.item} kembaliannya cuma ${uang}`)
      }
      else{
        console.log(`Saya sudah membeli ${obj.item} uang kembaliannya ${kembalian}`)
        resolve(kembalian)
      }
    }, obj.waktu);
  })
}

let cash = 1000
let itemList = [
  {
    item: "permen",
    harga: 50,
    waktu: 500
  },
  {
    item: "roti",
    harga: 150,
    waktu: 500
  },
  {
    item: "HP",
    harga: 5000,
    waktu: 500
  },
  {
    item: "sticker",
    harga: 10,
    waktu: 500
  },
  {
    item: "drinks",
    harga: 90,
    waktu: 500
  }
]

beli(cash, itemList[0])
  .then(kembalian => {
    return beli(kembalian, itemList[1])
  })
  .then(kembalian => {
      return beli(kembalian, itemList[2])
  })
  .then(kembalian => {
    return beli(kembalian, itemList[3])
  })
  .then(kembalian => {
    return beli(kembalian, itemlist[4])
  })
  .catch(err => {
    console.log(err)
  })

module.exports = beli;
