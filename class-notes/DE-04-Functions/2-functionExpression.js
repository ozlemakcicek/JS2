// ? =========================================================
// ?                    FONKSİYONLAR
// ?==========================================================

//!----------------------------------------------------------
//! 2.YÖNTEM  : FUNCTION EXPRESSION
//!-----------------------------------------------------------
// //!Funct expression ve arrow func yontemlerinde
// //! Once fonks tanimlanmalidir sonra cagrilmalidir.
// //! Aksi takdirde hata alırsiniz.
//* Örnek1:tek-çift kontrolü
//**********************************************************/
console.log("******** 2- EXPRESSION*******");



//? once fonksiyon olusturulur.SART!!

const tekCift=function(sayi){

 return sayi %2 ==0 ? 'cifttir':'tektir'
}

alert(tekCift(15));


//* Ornek2: en buyuk sayiyi bul
//********************************************************* */

const buyukBul=function(x,y,z){
    let enBuyuk;
    // bos da birakabilirsin let de.istersen 0 a da esitleyebilirsin

if(x>y && x>z){
    enBuyuk=x
}
else if(y>x && y>z){
    enBuyuk=y
}
else{
    enBuyuk=z
}

return enBuyuk



}
alert(buyukBul(3,5,9))




//* Örnek3: bir fonksiyon içerisinde başka bir fonksiyon çağırılabilir
//**********************************************************/


const usAl=function(s1,s2){
return s1**s2

}


const cevreBul=function(s1,s2){
return (s1+s2)*2
    
}


const alanBul=function(s1,s2){

    return s1*s2
}

// 4.bir genel islem fonksiyonu yaziyoruz
const hesapla=function(secim,v1,v2){
let sonuc;  // orta mali olmasin diye yaziyoruz.Herkes gorsun diye disarda tanimliyorz


    if(secim=="alan"){
     sonuc= alanBul(v1,v2)
    }else if(secim=="cevre"){
     sonuc= cevreBul(v1,v2)
    }else if(secim=="us"){
     sonuc= usAl(v1,v2)
    }
 return sonuc
}

console.log("alanin sonucu..:",hesapla("alan",3,5));  
console.log("cevrenin sonucu..:", hesapla("cevre",3,5)); 
console.log("us almanin sonucu..:",hesapla("us",3,5)); 




