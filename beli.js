
function beli(uang, obj){
  return new Promise ((resolve, reject) => {
  console.log(`Saya pergi membeli ${obj.item}`)
    setTimeout(function(){
      let kembalian = uang - obj.harga
      if (kembalian > 0) {
        resolve(`Saya sudah membeli ${obj.item} uang kembaliannya ${kembalian}`);
        // cb(kembalian)
      }else{
        reject(`uang gk cukup nih buat beli ${obj.item} kembaliannya cuma ${kembalian}`);
        // cb(0)
      }
    }, obj.waktu);
  })
}

module.exports = beli;
