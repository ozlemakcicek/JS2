// ?=========================================================
// ?                DİZİLER (ARRAYS)
// ?=========================================================

//* Dizi Tanımlama
//* ---------------------------------------------------------

//! 1.YÖNTEM (Array Literal)- tercih edilen yöntem

const yaslar=[30,24,55,78,12]
console.log(yaslar);



//!hata const keyword ü ile tanımlanmış bir diziyi tamamıyla değiştiremezsiniz, ancak tek tek değişikliğe izin verir


//! 2.Yöntem(Array Constructor)

const cars=new Array("BMW","Mercedes","Volvo")
console.log(cars);

//! 10 elemanli bir Array tanimlama
const sayilar=new Array(10)// tek eleman yazinca bunu dizi olarak array olarak algilamadigi icin eleman olark yazmaz onu length olarak kabul ediyor
console.log(sayilar);
sayilar[4]=256//4.eleman 256 ama 0 dan basladigi icin onunde de 4 eleman var
sayilar[9]="Ayse"
console.log(sayilar);

console.log("***********************************");

const birth=1979
const isimler=[
    'Halit','Irfan','Emirhan',2023-birth, 'Esra', true, 23, yaslar
];
console.log(isimler);//her type li veriyi alir

//bos array olusturabiliriz
const array2=[];
console.log(array2);
// bos acip sonra altta kendin doldurabilirsin
array2[0]='ömer'
array2[1]='esma'
console.log(array2);


// olan biseyi degistirip,icine yeni eleman eklemek icin;
isimler[5]=false
isimler[8]=58
console.log(isimler);
console.log(isimler[3]);
console.log(isimler[7][2]);// 3.elemanin 2.elemani.icdeki arrayin elemanini bulduk
console.log(isimler[isimler.length-2]);// bu da tersten 7.elemani getirir
console.log(isimler[isimler.length-2][yaslar.length-3])

console.log(--isimler[7][2]);
console.log(isimler[7][2]);




// ?=========================================================
// ?         DIZIYI DEGISTIREN METODLA(MUTATOR)
// ?=========================================================

//? pop()   dizinin son elemanini siler, yazdirrirsak sildigi elemani döndurur

//*pop() dizinin son elemanını siler, yazdırırsak sildiği elemanı döndürür

const meyveler=["Elma", "Erik","Armut", "Muz","Kivi"]

meyveler.pop()

console.log(meyveler);
console.log(meyveler.pop());

//*shift() dizinin ilk elemanını siler, yazdırırsak sildiği elemanı döndürür

console.log(meyveler.shift());
console.log(meyveler);

//*push() dizinin sonuna eleman ekler, yazdırırsak dizinin güncel eleman sayısını döndürür

console.log(meyveler.push("Çilek", "Kavun", "karpuz"));
console.log(meyveler);

//*unshift() dizinin başına eleman ekler, yazdırırsak dizinin güncel eleman sayısını döndürür

console.log(meyveler.unshift("Ayva"));
console.log(meyveler);

//*reverse() dizinin tamamını ters çevirir
meyveler.reverse()
console.log(meyveler);

console.log(meyveler[3].split("").reverse());

// dizinin 3. string elemanını Array e çevirip reverse metodu ile ters dönmüş dizi yaptık. tekrar ters dönmüş dizi olsun istersek join("") kullanabiliriz
console.log(meyveler);
;//parcalayip ters cevirdikten sonra tekrar birlestirdik.

//* dizinin 3. string elemanını Array e çevirip reverse metodu ile ters dönmüş dizi yaptık. tekrar ters dönmüş dizi olsun istersek join("") kullanabiliriz


//?splice() 1. parametre dizinin eleman ekleyeceğimiz index ini belirtir
//?2. parametre=0 ise belirttiğim index teki elemanı sağa ittir, artık orada yeni yazdığım olsun
//*2.parametre=1 ise belirttiğim index teki elemanı sil üstüne yaz

//? splice() 1.parametre
//['karpuz', 'Kavun', 'Cilek', 'Muz', 'Armut', 'Erik', 'Ayva']
meyveler.splice(2,0,'Mango')//ustune yazma degistirme degilde ittirip yanina gelsin dersek 0 ile belirtiriz.
console.log(meyveler);

meyveler.splice(1,1,'Ananas')// silip degistirmek icin 1 konulur.ama bu tercih edilmez.Bunu meyveler[1]='Ananas' ile de yapablrz
console.log(meyveler);


//? sort(), string ifadelerde alfabetik sıralar(ASCII değerlerine göre)
//? sort metodu diziyi iterasyona uğratır ve parametre olarak aldığı arrow fonksiyonunu (a-b>0 önce b yi yaz gibi) dizinin her bir elemanına uygular. Bu sayade küçük sayılar ile büyük sayıları yer değişirerek sıralama işlemini gerçleştirir.

meyveler.sort();
console.log(meyveler);

const number=[3,5,1,35,10,22,55,77,231];
number.sort(); // ilk numarasina gore siralar.
console.log(number);

number.sort((a,b) => a-b);  // kucukten buyuge siralar.bu formul uzerinden yaziliyor.buyukten kucuge gore istersek siralayip reverse ile ters ceviririrz

console.log(number);


//? ===========================================================
//?  DİZİ ERİŞİM METOTLARI (diziyi değiştirmezler)
//? ===========================================================
const sayilar1=[3,5,2,'2','uc',2,'bes',5]

//* includes*****
console.log(sayilar1.includes('5'));//false
console.log(sayilar1.includes(5));//true

//* **** indexOf(), lastIndexOf() **********

console.log(sayilar1.indexOf('2'));
console.log(sayilar1.indexOf(2,3));//5 (3.indexten sonraki 2 yi bul)
console.log(sayilar1.lastIndexOf(5));//7



//! SORU- kullanıcıdan sayı isteyin. girilen sayının hem string hem number hali sayılar dizisinde var mı araştır, varsa index ini döndür


//*yukaridaki sayilar1 i kullaniyoruz 
// const sayilar1=[3,5,2,'2','uc',2,'bes',5]

const sayiString=prompt('lutfen bir sayi giriniz')//'2
const sayiNumber=Number(sayiString)//girilen sayinin Number hali icin yeni degiskene atayarak yukaridakini bozmadan number halini de arastiririz

let varMi=false; //flag

if(sayilar1.includes(sayiString)){
  console.log(
    "aradiginiz sayinin String hali dizide var ve index i..:",
    sayilar1.indexOf(sayiString)
  );
  varMi = true; //eger varsa en alttaki if e girmez
}

// else console.log('aradiginiz sayinin string hali bulunamadi');

if (sayilar1.includes(sayiNumber)) {
  console.log(
    "aradiginiz sayinin Number hali dizide var ve index i..:",
    sayilar1.indexOf(sayiNumber)
  );
varMi=true // eger varsa en alttaki if e girmez
}

//* iki tane ayri ayri if kullandik.iki durumu da kontrol etmek istedik
// else console.log("aradiginiz sayinin Number bulunamadi");

//* hicbirsekilde ikisinde de yoksa ikisine de else yazmaliyiz.bu sadece bu if e ait.ama baska bir yontem daha var ayri ayri yazmaktansa.flag koyuyoruz.bunun icin en yukarida false diye bir degisken atayip en sonda yazacagiz bunu if ile.ve her bir sart icin varMi yi true yapariz

if (varMi==false) {
    console.log('aradiginiz sayi bulunamadi');
}
// icerde varMi lar hic true ya girmezse buraya duser
// varMi==false yerine varMi!=true da yazilir.sadece varMi desek bunu true olarak algilar



//* join()
//*-----------------------------------------------------------
//? join, dizinin elamanlari birlestirip string hale cevirir.join("x")=>varolan virgül+boşluk sil, elemanların aralarına x koy(mesela join parantezinde boşluk yerine 2 varsa her eleman arasına 2 koy demek) 
//* split(" ")=>string i boşluklardan ayırır,boşlukları silip virgül+boşluk yapar ve yeni dizi döndürür.orijinal diziyi değiştirmez


console.log(sayilar1.join(','));// arlarina virgul koydu.bos birakirsan bos olarak ayirir
console.log(sayilar1.join('A'));



// const meyveler = ["Elma", "Erik", "Armut", "Muz", "Kivi"];


//* dizinin 2.elemanini tersten string olarak yazdir.

console.log(meyveler[2].split('').reverse().join(''));  // avya// ayirdi ters cevirdi birlestirdi


//* toString()
//*-----------------------------------------------------------
//? toString fonksiyonu sadece dizinin elemanlarinin aralarina
//? (virgul) koyarak birlestirir ve string yapar.

console.log(sayilar1.toString());

//***************** slice**************** */// kalici degistirmez

const arabalar=['BMW', 'Mercedes','Audi','FERRARI','LAMBORGINI']
console.log(arabalar.slice(3));
console.log(arabalar.slice(1,3));// 1 den 3e kadar aliyor
console.log(arabalar.slice());// bos birakinca kopyaladi.diziyi bozmadan baska bi yerde  kullanmak istersek.

//! diziyi kopyalamak icin kullanilir
const arabalar2 = arabalar.slice()
console.log(arabalar2);


//*****************concat********** */

const kisiler=['özlem', 'esra','nihal','fatih','huseyin']
const rakamlar=[1,2,3,4,5,6]

const birlesik=kisiler.concat(rakamlar, true,'halit','emirhan',['irfan','yunus'], [['a','b','c']])

console.log(birlesik);
// array icinde array soyle ki.concat ile birlestirince tek [] icinde yazar.Ama ic ice [] varsa onu ayri bir [] de verir.


//* every()
//*-----------------------------------------------------------
//? Tum diziyi itere eder ve aldigi callback fonksiyonuna gore
//? test gerceklestirir.Tum elemanlar icin test basarili ise
//? true aksi takdirde false deger dondurur.

const yas=[18, 23, 35, 44, 89, 15]
console.log(yas.every((a)=> a>=18));  //a oylesine yazilir.false dondurdu burda.15 sarti bozuyor

//* bir tane bile istedigim sarta uymayan varsa false dondurur




//* some()
//*-----------------------------------------------------------
//? Aldigi callback fonksiyonuna (bizim yazdığımız fonksiyon) gore test gerceklestirir.
//? En az bir eleman icin bile test basarili ise true aksi
//? takdirde false deger dondurur.

console.log(yas.some((a)=> a>70));//true
console.log(yas.some((a)=> a>90));//false

//* bir tane uyan varsa true dondurur.hic yoksa mecburen false dondurur