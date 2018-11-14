function beli(uang, obj){
  return new Promise ((resolved, reject) => {
      console.log(`Saya pergi membeli ${obj.item}`)
      setTimeout(function(){
        if (uang >= obj.harga) {
          var kembalian = uang - obj.harga
          console.log(`Saya sudah membeli ${obj.item} uang kembaliannya ${kembalian}`);
          resolved(kembalian)
        }else{
          console.log(`uang gk cukup nih buat beli ${obj.item} kembaliannya cuma ${uang}`);
          reject(0)
        }
      }, obj.waktu);
  })
}

module.exports = beli;
