function beli(uang, obj, cb){
  return new Promise ((resolve, reject) => {
    setTimeout(function(){
      let kembalian = uang - obj.harga
      if (kembalian <= 0) {
        reject(`uang gk cukup nih buat beli ${obj.item} uang anda yang miliki cuma ${uang}`)
      }
      else{
        console.log(`Saya sudah membeli ${obj.item} uang kembaliannya ${kembalian}`)
        resolve(kembalian)
      }
    }, obj.waktu);
  })
}
module.exports = beli;
