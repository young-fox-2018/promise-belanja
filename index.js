const beli = require('./beli')


const obj = {
  item: 'permen',
  harga: 15000,
  waktu: 1000
}

const obj2 = {
  item: 'pita',
  harga: 4000,
  waktu: 1000
}
const obj3 = {
  item: 'roti',
  harga: 2000,
  waktu: 1000
}
const obj5 = {
  item: 'mainan',
  harga: 1000,
  waktu: 1000
}
const obj4 = {
  item: 'kue',
  harga: 3000,
  waktu: 1000
}

beli(10000, obj)
  .then((kembalian)=> {
    return beli(kembalian , obj2)
  })
  .then((kembalian)=> {
    return beli(kembalian ,obj3)
  })
  .then((kembalian)=> {
    return beli(kembalian , obj4)
  })
  .then((kembalian)=> {
    return beli(kembalian,obj4)
  })
  .then((kembalian)=>{
    console.log(`selesai belanja nich .Uang tinggal ${kembalian} `)
  })
  .catch((Err)=>{
    console.log(Err)
  })