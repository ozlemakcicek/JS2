// ? ==========================================================
// ?                    FONKSİYONLAR
// ? ==========================================================

// !-----------------------------------------------------------
// ! 1.YÖNTEM  : FUNCTION DECLARATION
// !-----------------------------------------------------------
console.log("************ 1- FUNC DECLARATION *************");

//*Örnek1:****************************************************************/


//? Fonksiyonun tanimlanmasi

//yazdir() // yukarida da asagida da cagirabiliyoruz fonksiyonu

function yazdir(){
    console.log('e daha daha nasilsiniz');
}

yazdir()        // call veya invoke (fonksiyonu cagirmak)

//*fonksiyonu cagirmayi asagida veya yukarida cagirablrsn





//**/ Ornek2********** PARAMETRELI FONKSIYON ************************** */

function adYazdir(ad, ikinciAd, soyad){
    console.log(soyad,ad,ikinciAd);
}

adYazdir('kubilay','ozlem','NIHAL')

//?kendi kendine fonksiyon isini halletti.return e gerek kalmadi.simdi return lu bir ornek yapacagiz






//*  Ornek3************* parametreli, donus degerli****************

function yasHesapla(ad,tarih){

console.log(`benim adim ${ad} ve ben ${2023-tarih} yasindayim`);
return 2023-tarih

//burda return ile yasi donduruyor.mesela ipek icin 44 verir.bunu disariya ipekten donen olarak 44 cikartir.ve ortalama bulurken 44 u kullanir
}
const ipek= yasHesapla('ipek', 1979)
const yunus= yasHesapla('yunus', 1990)
const fatih= yasHesapla('fatih', 2000)


console.log(ipek, yunus, fatih);

console.log((ipek+yunus+fatih)/3);





//* Örnek4: Parametreli, Dönüş değerli
//**********************************************************/
//! Function declaration yöntemi ile  fonksiyonun tanımlanması çağrılmasında önce veya sonra olabilir.

//? tek cift sorgulamasi

console.log(tekCiftSayi(5)); 
console.log(tekCiftSayi(50));  

function tekCiftSayi(sayi){

  return sayi%2==0 ? 'cifttir':'tektir'


}

// disarida sonucu versin diye return yaziyoruz.bu decleration i yani yukarida cagirmayi burda kullaniyoruz sadece.yukarida cagir asagida dondur seklinde.normalde asagida cagirmak daha dogru



