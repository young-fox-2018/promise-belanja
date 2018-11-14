const beli = require ('/home/aandroomeedaa/Desktop/hacktiv8/rePhase-1/WEEK-3/day-3/promise-belanja/beli.js')


let money = 150000000
let itemList = [
  {
    item: "kurzweiArtist",
    harga: 1240000,
    waktu: 500
  },
  {
    item: "grandStage",
    harga: 28000000,
    waktu: 500
  },
  {
    item: "kross2",
    harga: 15000000,
    waktu: 500
  },
  {
    item: "motif",
    harga: 38000000,
    waktu: 500
  },
  {
    item: "nordPiano4",
    harga: 43000000,
    waktu: 500
  },
  {
    item: "NativeAudioKompleteKontrol",
    harga: 18000000,
    waktu: 500
  }
]

beli(money, itemList[0])
  .then(kembalian => {
    return beli(kembalian, itemList[1])
    .then(kembalian => {
      return beli(kembalian, itemList[3])
      .then(kembalian => {
        return beli(kembalian, itemList[4])
        .then(kembalian => {
          return beli(kembalian, itemList[3])
          .then(kembalian =>{
            return beli (kembalian , itemList[5])
          })
        })
      })
    })
  })
  .catch(err => {
    console.log(err)
  })
