function belanja(uang,item) {
    return new Promise (function(resolve,reject) {
        if (uang < item.harga) reject(`uangnya kurang ${item.harga - uang} untuk beli ${item.barang}`)
        else {
            uang = uang - item.harga
            console.log(`${item.barang} sudah di beli sisa uangnya ada Rp.${uang}`)
            resolve (uang)
            
        }
    })
}

belanja(50000,{barang:"tahu Bulat",harga:10000})
.then(kembali => {
    return belanja(kembali,{barang:"ayam potong",harga:33000})
})
.then(kembali => {
    return belanja(kembali,{barang:"mie ayam pangsit", harga:15000})
})
.then(kembali => {
    console.log(kembali)
})
.catch(err => {
    console.log(err)
})