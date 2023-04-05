// * =======================================================
// *                   KARAR YAPILARI
// * =======================================================

// //************************ IF-ELSE ***********************

//! Dort İslem Hesap Makinası
//!----------------------------------------------------------

//? Prompt fonskiyonu ile console ortamında kullanıcıdan veri almak mümkündür.
// console.log("-------------------------------------");
// console.log("==IF-ELSE IF== 4 Islem Hesap Makinesi");
// console.log("-------------------------------------");


// const sayi1= prompt("1.sayiyi giriniz");
// const islem= prompt("+,-,*,/ islemlerinden birini giriniz");
// const sayi2= Number(prompt("2.sayiyi giriniz"));


// let sonuc = 0;  // global de tanimlamamiz lazim.

//? suslu parantez sart degil.
//? kapatalimki surekli istemesin bizden
//? iflerde ; if else den sonra gelmez.yaoilmak istenenden sonra gelir

// if (islem == "+") 
//   sonuc = sayi1 + sayi2;
//  else if (islem == "-") 
//   sonuc = sayi1 - sayi2;
//  else if (islem == "*") {
//   sonuc = sayi1 * sayi2;
// } else if (islem == "/") {
//   if (sayi2 != 0) {
//     sonuc = sayi1 / sayi2;
//   } else {
//     alert("payda 0 olamaz");
//   }
// } else {
//   alert("yanlış işlem girdiniz");
// }
// console.log(sonuc);



//* ORNEK

const yas=20
const cinsiyet= "erkek"
const saglik=true

if(yas>=20 && cinsiyet=='erkek' && saglik==true){
    console.log('askerlik yapabilir');
}
else{
    console.log('askerlik yapamaz');
}


//! ternary (2.yol.sadece if ve else durumu varsa o zaman tercih edilir)

(yas >= 20 && cinsiyet == 'erkek' && saglik == true)? console.log('askerlik yapabilir'):console.log('yapamaz');




console.log("-------------------------------------");
console.log(" ==SWİTCH-CASE== 4 Islem Hesap Makinesi ");
console.log("-------------------------------------");


//! switch-case (coklu condition larda kullanilir.break da kullanilir)
//? birkez switch ile degiskeni veririz.sonra sartlari case ile sorariz
const s1 = +prompt("1.sayıyı giriniz");
const islem2 = prompt("+,-,*,/ işlemlerinden birini giriniz");
const s2 = Number(prompt("2. sayıyı giriniz"));



let sonuc2=0;   //? icerde surekli  degistirecegim icin const kullanilmaz let kullanilir

switch (islem2) {
  case "+":
   sonuc2= s1+s2;
    break;

  case "-":
    sonuc2= s1-s2;
    break;


  case "*":
   sonuc2= s1*s2;
    break;

  case "/":

  if(s2 != 0)
   sonuc2= s1/s2;
   else(alert('payda 0 olamaz'));
    break;

  default:
    alert("yanlis islem girdiniz");
    break;
}

console.log(`${s1} ${islem2} ${s2} = ${sonuc2}`);


//********** TERNARY */

//? ornek: maasınız asgari ücretten düşük ve eşitse maaşınıza %25 zam yapılsın, değilse maaşınıza %10 zam yapılsın.

const asgariUcret= 8000
const maas=+prompt('maasinizi giriniz')
//?maasiniz asgariUcretten kucuk esitse maaasa 25% zam yap degilse 10% yap diyelim

const zamliMaas= maas<= asgariUcret ? maas*1.25 : maas*1.10
console.log(zamliMaas);


//?Ornek:10 aylık maasınız borcunuzdan 5000 ve üstü kadar fazlaysa kredi alabilirsiniz, aksi durumda alamazsınız

const Schuld=+prompt('borcunuzu giriniz lutfen')
const Gehalt=+prompt('maasinizi giriniz lutfen')

//? ya bir degiskene atariz ya da console.log icine yazariz
console.log(Gehalt*10 - Schuld >= 5000? 'kredi alabilir🥳':'kredi alamaz 😥');



