const idler = require("idler")
const argv = require('yargs').argv

const kullanici_adi = argv.kullanici_adi
const parola = argv.parola
const oyun_id = argv.oyun_id

var user = new idler(kullanici_adi, parola, oyun_id, {method: 'manual'})
user.idle().then(User => {
    console.log("Oyun çalıştırıldı!")
}).catch(err => {
    // on err it would send the Err Object
    throw err;
})
