function beli(uang, obj){
  console.log(`Saya pergi membeli ${obj.item}`)
  return new Promise (function(resolve, reject) {
    setTimeout(function(){
      let kembalian = uang - obj.harga
      if (kembalian > 0) {
        resolve ({message: `Saya sudah membeli ${obj.item} uang kembaliannya ${kembalian}`, kembalian: kembalian})
      }else{
        reject (`uang gk cukup nih buat beli ${obj.item} uangnya cuma ${uang}`);
      }
    }, obj.waktu);
  })
}

module.exports = beli;
