// ? ==========================================================
// ?                    FONKSİYONLAR
// ? ==========================================================

// !-----------------------------------------------------------
// !3.YÖNTEM  : ARROW FUNCTIONS
// !-----------------------------------------------------------

console.log("****** 3- ARROW FUNCTIONS ******");

// //!Funct expression ve arrow func yontemlerinde
// //! Once fonks tanimlanmalidir sonra cagrilmalidir.
// //! Aksi takdirde hata alırsiniz.

//*Ornek1 3 ün katı mı diye kontrol etme
//************************************ */

// expression yontemi gibi yukarida tanimlayip degiskene atiyoruz.function yerine => koyuyoruz.
//cevap tek satirli islemse {} gerek yok ki zaten returne de gerek yok.
// suslu varsa return de var.bu sadece arrow da gecerli.digerlerinde sart return yazmak

const katMi=(sayi)=>sayi%3==0? "3un katidir" : "3un kati degildir"

console.log(katMi(25));


// digerlerinde de sadece icerde halledersen returne gerek yok.ama disardan da gozuksun istersek yazmaliyiz


 //* Örnek2:Menu fonksiyon
  // ! ok(arrow) fonksiyonunda birden fazla ifade varsa, fonksiyonda süslü parantez kullanmalıyız
//****************************

const menu=()=>{
console.log("===========================");
console.log("     JAVASCRİPT DERSİ      ");
console.log("===========================");

}

 menu();



 //*********** Örnek3  yas hesaplama  *********** */

  // new Date()= bize şu anın tüm tarihini verir.mesela .getFullYear() ile istedigimiz yili cagirabiliriz .getFullYear() bu şekilde . ile istediğimiz tarihi çağırabiliriz (dakika saat gün ay vs)

 const yasHesapla=(yil)=> new Date().getFullYear()-yil


 console.log(yasHesapla(1979));

//  console.log(new Date().getHours());


//************ Ornek4 silindirin hacmini hesapla ******* */

// silindir hacmi pi*r kare*h

const hacimHesapla=(r,h)=> Math.PI*r*r*h;

console.log(hacimHesapla(4,5));
console.log(hacimHesapla(4,5).toFixed(4));

// virgulden sonra kac basamagi gormek istersek .toFixed() ile sonucun sonuna parantez icine ne kadar gormek istersek yazariz



 //* ORNEK5: Girilen n. terimdeki  Fibonacci sayisını  yazdiran fonksiyonu dongu ile kodlayiniz.

//? FIBONACCI terimleri:  1, 1, 2, 3, 5, 8, 13, 21, ...

//* bir sonraki sayi bir onceki sayilarin toplami.Herdefasinda en son ve ondan oncekinin toplami seklinde yeni sayimiz


const fibonacciNumber =(n) =>{
    let fiboSol=1;
    let fiboSag=1;
    let yeniFibo=0;


    for(let i=1; i<n-1; i++){

   yeniFibo=fiboSol + fiboSag  // sadece boyle yazarsak birkez verir.onlarca yapacagimiz icin for dongusune aliriz     
   
fiboSol=fiboSag
fiboSag=yeniFibo

}
//asagida 7.terimi 13u istiyor o zaman fibonacci sayisina gore 3.sayilardan baslar ve 13e kadar 5 kez donecek.(1 ve 1 i saymiyoruz.baslangic sayilari onlar)

return fiboSag

}

console.log(fibonacciNumber(7));


//***toplamlarini bulalim */


const fibonacciNumber2 =(n) =>{
    let fiboSol=1;
    let fiboSag=1;
    let yeniFibo=0;
let toplam=2 // 1 1 ler sayilmaz.2den baslar

    for(let i=1; i<n-1; i++){

   yeniFibo=fiboSol + fiboSag 
      
fiboSol=fiboSag
fiboSag=yeniFibo
toplam += fiboSag;
}
console.log(toplam);
return yeniFibo
return `fiboSag: ${fiboSag} toplam: ${toplam}`;

}

alert(fibonacciNumber2(8));