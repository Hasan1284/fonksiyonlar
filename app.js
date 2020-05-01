// Functions

function yasHesapla(dogumYili){
    return 2020 - dogumYili;
}

let val = yasHesapla(1983);

let ageAda = yasHesapla(2012);
let ageYigit = yasHesapla(2010);
let ageCinar = yasHesapla(2017);

console.log(ageAda);
console.log(ageYigit);
console.log(ageCinar);

function EmekliligeKacYilKaldi(dogumYili,isim){
    let yas = yasHesapla(dogumYili);
    let emeklilik = 65 - yas;

    if(emeklilik>0){
        console.log(`${isim}emekli olmanıza ${emeklilik} yıl kaldı`)

    }else{
        console.log('zaten emekli oldunuz');
    }
}


EmekliligeKacYilKaldi(2012,'ada');
EmekliligeKacYilKaldi(2010,'yigit');
EmekliligeKacYilKaldi(1950,'cınar');
//burada fonksiyonlar konusuna giriş yapıldı

/// deneme