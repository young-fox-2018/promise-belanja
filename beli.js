function beli(uang, obj){
  console.log(`Saya pergi membeli ${obj.item}`)
  return new Promise((resolve,reject) => {
  setTimeout(function(){
      let kembalian = uang - obj.harga
      if(uang >= obj.harga){
        resolve({
              message: `Saya sudah membeli ${obj.item} uang kembaliannya ${kembalian}`,
              uang: kembalian
            })
      } else if (uang < obj.harga){
        resolve({
              message: `uang gk cukup nih buat beli ${obj.item} kembaliannya cuma ${uang}`,
              uang: uang
            })
      } else if (uang === 0){
        reject(`uang gk cukup nih buat beli ${obj.item} kembaliannya cuma ${uang}`)
      }
      // let kembalian = uang - obj.harga
      // if (kembalian > 0) {
      //   resolve({
      //     message: `Saya sudah membeli ${obj.item} uang kembaliannya ${kembalian}`,
      //     uang: kembalian
      //   })
      // }else{
      //   reject(`uang gk cukup nih buat beli ${obj.item} kembaliannya cuma ${uang}`)
      // }
    }, obj.waktu);
  })
}

module.exports = beli;
