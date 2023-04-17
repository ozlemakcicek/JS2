//* ======================================================
//*                   FOREACH METHOD
//! NOT: forEach metodu void bir metottur. (Yani herhangi bir değer döndürmez.log(forEach..)=undefined) terminal işlemdir, diziyi fonksiyon içinde yazdırır ve tüketir bitirir.

//*======================================================

//*----------ORNEK-----------

const prices1=[100, 250, 50, 90]
prices1.forEach((a)=> console.log(a))// sondaki ();) hata verir silmek lazim onu
// ic ice iki parantez olur array methodlarinda.icine rastgele bir harf yazmak gerekir.
//diziyi degiskene atamadan birakirsak kalici degistirmedigi icin goremeyiz.degisken sart
let toplam=0;
prices1.forEach((a)=> console.log(toplam+=a))
//toplami forEach() e yaptirmak cok da mantikli olmuyor tek tek yaziyor her gezinmesinde.bunu reduce yontemi ile tek seferde yapariz

let terminal = prices1.forEach((a) => console.log(toplam += a));
// bu sekilde degiskene atayabiliriz. Ama gostermiyor ekranda


//*********************************ORNEK******* */

//* p => prices dizisinin her bir elemanı
//* i => indis
//* prices=> prices dizisidir.

//? diziyi kalici degistirmek icin bu yontem kullanilir.sadece forEach() ile sadece ekrana verir
const prices = [100, 250, 50, 90];

let toplam1=0;
prices.forEach((p,i,prices)=>{

toplam1+=p
console.log(`${i}.toplam${toplam1}`);

// kalici degistirelim
prices[i]=p*2  //prices[i]=prices[i]*2 seklinde de olur.su anki halini kalici degistirdik.2 katini aldi her bir eleman
})

console.log(prices);



//* ======================================================
//*                       MAP METHOD
//!map yapılan değişikliği bir diziye atıp ve bunu döndürebilir,  foreach gibi tüketmez.
//* ======================================================

//*-------------- ÖRNEK -------------------
//* names dizisinin içindeki her ismi büyük harf olarak
//* yeni bir diziye saklayalım.

const names=['kubilay','irfan','fatih','ozlem','nihal','yunus','emirhan','halit','esra','huseyin']

// names.map((isim)=>isim.toUpperCase())  //bu sekilde gozukmez.degiskene aktarmaliyiz

const yeniIsim = names.map((isim) => isim.toUpperCase());
console.log(yeniIsim);

//* tek tek ekrana bastirmak icin forEach mantikli.dizi seklinde istersek map kullanmak mantikli




//*örnek
//* fiyatlar dizisindeki ürün fiyatlarin 250 TL altında olanlarına
//* %50 zam, diğerlerine de %20 zam yapılmak isteniyor. Ayrıca
//* zamli fiyatlar kalıcı olarak diziye işlenmek isteniyor fiyatlar[1]=eski fiyat*1.5 gibi
//* 1. ürünün zamlı fiyati 110 TL gibi
//* p => prices dizisinin her bir elemanı
//* i => indis
//* array=> fiyatlar dizisidir.


const fiyatlar = [100, 250, 50, 90];

fiyatlar.map((p,i,array)=>{
    if(p<250){
        array[i]=array[i]*1.5
    }else array[i]=array[i]*1.2
})

console.log(fiyatlar);

// bunu for ile de yapabilirdik.burda map ile for un bir avantaj farki yok.ama filter ile map cok avantajli 


//?-------------- ÖRNEK -------------------
//? tlPrices dizisindeki rakamlarin Euro ve dolar
//? karsiliklarini hesaplatarak yeni dizelere kaydediniz

const tlPrices = [100,150,200,80,50]
const dolar=19.20
const euro=21.20

const dolarPrices= tlPrices.map((a)=>+(a/dolar).toFixed(2))
console.log(dolarPrices);

//* toFixed kullandiginiz sayilari String e cevirir.Tekrar number istersek basina + ya da Number() yazariz.

const euroPrices=tlPrices.map((i)=>Number((i/euro).toFixed(2)))
console.log(euroPrices);



//* ======================================================
//*                       FILTER METHOD
//* ======================================================
//* prices array"inde fiyatı 100 TL den az olanlari ayri
//* bir diziye saklayalim.

// const prices = [200, 500, 100, 180];

const yeniDizi=prices.filter((a)=>a<200)
console.log(yeniDizi);


//* ======================================================
//*                       PIPELINE
//* ======================================================

//!slide daki soru, pipeline olmazsa böyle uzun uzun if le çözeriz
//* Fiyatı 100 TL den fazla olanlara %10 zam, 100 TL den az olanlara ise %15 zam yapılmak isteniyor. Ayrıca, zamlı olan yeni değerleri örnekteki gibi diziye saklamak istiyoruz.

//? kalici olarak degistiriyoruz.yukaridaki sorunun cevabi bu

// const fiyatlar = [100, 250, 50, 90];

// fiyatlar.map((p, i, array) => {
//   if (p < 250) {
//     array[i] = array[i] * 1.5;
//   } else array[i] = array[i] * 1.2;
// });

// console.log(fiyatlar);

//? bir degiskene atayip yeni bir dizide yayinladik.bu sorunun 1.cozumu

const tlFiyatlar = [100, 150, 100, 50, 80];

const degerler= tlFiyatlar.map((d) => {
  if (d > 100) {
    d = d*1.1
  } else {
    d = d * 1.15;
  }
  return d
});

console.log(degerler);

//? bu sorunun 2.cozumu.if kullanmayip filter ile kisa yoldan yaptik

const bir= tlFiyatlar.filter((a)=>a > 100 ).map((c)=>c*1.1)
const iki= tlFiyatlar.filter((a)=>a<=100).map((a)=>a*1.15)

console.log(bir.concat(iki));


//*-------------- ÖRNEK -------------------
//*people dizisinde ismin ilk harfine göre arama yaparak ilgili isimlerin ilk 3 harfini yazdıran bir fonksiyon yazınız.

const people = [
  "kubilay",
  "irfan",
  "fatih",
  "ozlem",
  "nihal",
  "yunus",
  "emirhan",
  "halit",
  "esra",
  "huseyin",
];

const harfBul=(h)=>{
people.filter((isim)=>isim.startsWith(h)).map((isim)=>isim.slice(0,3)).forEach((isim)=>console.log(isim))
}
// startswith ile ayni harfle baslayanlari ayirdi.map ile gezin icinde, slice(0,3) diyerek de  ilk 3 harfini aldik


harfBul('e')
harfBul('h')
console.log(people);



//* ======================================================
//*                      REDUCE
//* ======================================================

//* salaries dizisindeki maaşları toplayınız (reduce metodu kullanın)

// reduce(x,y)  iki parametre alir.biri islem, digeri neyi bu isleme sokacaksin.rastgele bir isim vereblrsn
const salaries = [3000, 5000, 4000, 6000, 7500];



salaries.reduce((toplam,diziElemani)=>toplam+diziElemani,0)//0 burda toplamin baslangicta 0 oldugu bos kutuyu ifade eder
//! forEach burda calismaz cunku dizi degil bu, tek bir rakam.bunu gormek icin ya degiskene atayip bunu console.log da yazdirirz.ya da direkt console.log icine yazariz

const sonuc = salaries.reduce((toplam, diziElemani) => toplam + diziElemani, 0);
console.log(sonuc);


//* carpma
console.log( salaries.reduce((carpim,diziElemani)=>carpim*diziElemani,1));

// bunun da ilk degeri 1 olur.etkisiz elemani yani




//************************ÖRNKELER************************* */
//*asagidaki dizinin ilk elemanini dizi yap

const text = "Clarusway Online Career IT TRAINING School"

const array=text.split(" ") // bu sekilde array e dondururz
// console.log(text);

array.map((a)=>a.toUpperCase()).forEach((a)=>console.log(a))//array in elemanlarini buyuttuk ,arraye forEach() ile diziye yazdirdik console da gorduk 
const arr2=array.map((a)=>a.toUpperCase())// yeni degisken ile ayri bir sekilde gosterdik
console.log(arr2);


array.filter((item)=>item.startsWith('I')).map((a)=>a.toLowerCase()).forEach((a)=>console.log(a) )



array.filter((item) => item.startsWith("T")).map((a) => a[0].toLowerCase()+a.slice(1)).forEach((a) => console.log(a));
  //butun a yi degilde sadece tekbir harfi kucultsun istersek a[indisNo] yazariz.
  //+slice() yerine indisde surdan suraya kadar yazablrz.
// a[0] demek TRAINING in 0.elemani demek





  //? ORNEK2
// const people = [
//   "kubilay",
//   "irfan",
//   "fatih",
//   "ozlem",
//   "nihal",
//   "yunus",
//   "emirhan",
//   "halit",
//   "esra",
//   "huseyin",
// ];
  const yeni= people.filter((a)=>a.endsWith('n')).map((a)=>a.split("").reverse().join(""))
  console.log(yeni);