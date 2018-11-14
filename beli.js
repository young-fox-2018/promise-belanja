
const beli = (uang, obj) => {
  return new Promise((resolve, reject)  => {
    setTimeout(() => {
      if (uang <= 0) {
        reject('Uang ga cukup buat beli barang lagi')
      } else {
        if (uang - obj.harga < 0) {
          resolve( {
            message : `uang gk cukup nih buat beli ${obj.item} sisa uang cuma ${uang}`,
            kembalian : uang
          })
        } else { 
          let kembalian = uang - obj.harga
          resolve({
            kembalian : kembalian, 
            message :`Saya sudah membeli ${obj.item} yang kembaliannya ${kembalian}`
          })
        } 
      }   
    }, obj.waktu);
  })
}

module.exports = beli;
