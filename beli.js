function beli(uang, obj){
  return new Promise((resolve, reject) => {
    console.log(`Saya pergi membeli ${obj.item}`)
    setTimeout(function(){
      let kembalian = 0
      if (uang > obj.harga) {
        kembalian = uang - obj.harga
        console.log(`Saya sudah membeli ${obj.item} uang kembaliannya ${kembalian}`);
        // cb(kembalian)
        resolve(kembalian)
      }else{
        console.log(`uang gk cukup nih buat beli ${obj.item} kembaliannya cuma ${uang}`);
        // cb(uang)
        resolve(uang)
      }
    }, obj.waktu);
  })
  
}

module.exports = beli;
