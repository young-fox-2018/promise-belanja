function beli(uang, obj){

  return new Promise (function (resolve, reject) {

    console.log(`Saya pergi membeli ${obj.item}`)
    setTimeout(function(){
      let kembalian = uang - obj.harga
      if (kembalian > 0) {
        console.log(`Saya sudah membeli ${obj.item} uang kembaliannya ${kembalian}`);
        resolve(kembalian)
      }else{
        reject(`uang gk cukup nih buat beli ${obj.item} uangnya kurang ${kembalian*-1}`);
      }
    }, obj.waktu);

  })
}

module.exports = beli;
