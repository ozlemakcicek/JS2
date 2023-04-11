// * =======================================================
// *                     DÖNGÜLER
// * =======================================================

//************************ FOR ****************************

//? ornek: ekrana 10 kere merhaba yazdirin

// for(let index = 1; index <= 10; index++){
//     console.log(index, 'MERHABA');
// }



//? 1 den N e kadr olan sayilarin toplamini bulan kodu yaz

// const N = +prompt('lutfen N i giriniz');

// let toplam=0
// for (let i =1; i<=N;i++){
//     // toplam=toplam+i 
//     toplam +=i
// }
// console.log(toplam);


//? ÖRNEK: Dışarıdan girilen sayının Asal olup olmadığını tespit ederek sonucu yazdıran programı yazınız.

// const sayi=+prompt('asallik kontrolu icin bir sayi giriniz')


// let asal=true
// for(let i=2; i<sayi; i++){
// //?simdi asal olup olmadigini kontrol edelim.bunun icin 2 ye bolumunden kalan sifir degil ise asal,sifir ise asal degildir yaz deriz
//    if( sayi % i ==0){
// asal=false  //asal='asal degildir'  burde da yazi ile yazdirabiliriz
// }
// }
// console.log(asal==true? 'asaldir' : 'asal degildir');

// ? default olarak zaten true dur.aslinda yazmaya gerek yok =true ya.
// ? basina !asal? seklinde yaparsak bu true degilse demek
/*  */



// //? Ornek: 0-100 Arasinda 7 adet rasgele tamsayi sayi ureten kodu
// //? for dongusu ile yaziniz..

// for (let i = 1; i <= 7; i++) {
//   const rastgele = Math.round(Math.random() * 100); // 0ile 100 arasi dedigi icin 100 ile carptik.20 deseydi *20 yapardik.virgullu bir sayi tutar.Math.round() ile de en yakin tamsayi yi aliriz
//   console.log(rastgele);
// }
// console.log(Math.round(Math.random()*100 ));




//****************** */ WHİLE*************
//*ORNEK1: while için 1-100  arasında bir sayı giriniz. aksi durumlarda error msj ı verip, tekrar sayı isteyiniz

// let number = +prompt("WHİLE için 1-100 arasında sayı giriniz");

// while (number < 1 || number > 100) {
//   console.error("number 1-100 arasında olmalı");
//   number = +prompt("tekrar sayı girmeyi deneyin");
// }

// console.log("tebrikler", number);
//! while daki şart true old sürece altındaki süslü işler, false old anda süslünün dışına çıkılır

//****************** */ DO-WHİLE*************
//*ORNEK1: while için 1-100  arasında bir sayı giriniz. aksi durumlarda alert verip, tekrar sayı isteyiniz
// let number1;

// do {
//    number1 = +prompt("DO-WHİLE için 1-100 arasında sayı giriniz");
//    alert(number1)
// } while (number1 < 1 || number1 > 100);

// console.log("döngüden çıktınız");

// şarta bakmadan ilk etapta do nun içindeki istek yapılır, sonrasında while içi true old sürece do içindeki istek yapılmaya devam edilir

//? ORNEK: Kullanicidan  Vize ve Final notlarini isteyen ve
//? vize'nin %40 + final'in %60 alarak gecme notunu hesaplayan programi
//? yaziniz. Program her hesaplamadan sonra tekrar başkası için hesaplama yapilmak
//? istenip istenmedigini soracak cevap 'e' veya 'E' ise yeniden not
//? isteyecek ve islemleri tekrar edecektir.

// let devam;
// do {
//     let vize=+prompt("vize notunu isteyiniz")
//     let final=+prompt("final notunu isteyiniz")

//     let gecmeNotu=vize*0.4 +final*0.6
//     console.log(gecmeNotu);
//  devam=prompt("devam etmek istiyorsanız e/E girin")

// } while (devam.toUpperCase()=="E");

// console.log("cıktık");

//? ORNEK2: klavyeden q karakteri girilene kadar sayı girişi yapan bir programı döngü kullanarak yazınız.
// let sayi1;
// do {
//   sayi1 = prompt("lütfen sayı giriniz") 

// } while (sayi1 != "q");

// console.log("bitti");


//? ilk sayi isterken basina + veya Number koymadik.bu nedenle string olarak verir sayiyi.yapmadik cunku asagida q ile yani bir string ile kiyaslayacagiz





