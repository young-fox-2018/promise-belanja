// function beli(uang, obj, cb){
//   console.log(`Saya pergi membeli ${obj.item}`)
//   setTimeout(function(){
//     let kembalian = uang - obj.harga
//     if (kembalian > 0) {
//       console.log(`Saya sudah membeli ${obj.item} uang kembaliannya ${kembalian}`);
//       cb(kembalian)
//     }else{
//       console.log(`uang gk cukup nih buat beli ${obj.item} kembaliannya cuma ${kembalian}`);
//       cb(0)
//     }
//   }, obj.waktu);
// }
function beli(uang, obj) {
  return new Promise((resolve, reject) => {
    console.log(`Saya pergi membeli ${obj.item}`)
    setTimeout(function () {
      let kembalian = uang - obj.harga
      if (kembalian > 0) {
        console.log(`Saya sudah membeli ${obj.item} uang kembaliannya ${kembalian}`);
        resolve(kembalian)
      } else {
        reject(`Uang tidak  cukup nih buat beli ${obj.item} kembaliannya cuma ${Math.abs(uang)}`)
      }
    }, obj.waktu)
  })
}

module.exports = beli;
