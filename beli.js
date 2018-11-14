function beli(uang, obj){
  console.log(`Saya pergi membeli ${obj.item}`)
  return new Promise((resolve,reject) => {
    setTimeout(function(){
      if (uang >= obj.harga) {
        let kembalian = uang - obj.harga
        console.log(`Saya sudah membeli ${obj.item} uang kembaliannya ${kembalian}`);
        resolve(kembalian)
      }else{
        console.log(`uang gk cukup nih buat beli ${obj.item} kembaliannya cuma ${uang}`);
        reject(uang)
      }
    }, obj.waktu);
    
      

    
  })
}

module.exports = beli;