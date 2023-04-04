//*==================================================================
//*                       ARITMETIK OPERATORLER
//*==================================================================



const sucuk=250;
const cola=20;
const peynir= 200;


let toplam=sucuk+cola+peynir;
console.log(toplam);

//*bunu const ile yapsak degistiremezdik.
//! 1 attir


toplam++;
//* toplam= toplam + 1 demek
console.log(toplam);



//! 10 arttir

toplam +=10;
console.log(toplam);



//? + operatörü String Concatination işlemi de yapar.

const ad="esra"
const soyad="fatih"

console.log( "adim ve soyadim:" + ad+ " " + soyad);

//! bunu backtick(``) ile de yapabilirsin.+ kullanilmaz onun yerine ${variable ismi} seklinde kullanilir

console.log(`adim ve soyadim: ${ad} ${soyad}`);



//*bir sayı ve string toplanırsa alttaki gibi concatination yapar
const s1=5;
const s2="7";

console.log(s1+s2); //57
//* çıkarma işleminde verilerden biri number ise diğeri tırnaklı number olsa bile çıkarma yapar
console.log(s1-s2); //-2


//? bu asagidakini algilamaz.yaziyi sayi olarak algilamaz
const s3="iki"
console.log(s1-s3);


const dogumTarihi=1979;
const name1="Ashley";
console.log(name1 +" " + (2023-dogumTarihi) + " " + "yasindadir");

//! bunu template literals(backticks) ile yazalim

console.log(`${name1} ${2023-dogumTarihi} yasindadir`);


//*ARTTIRMA AZALTMA


let a=5;
console.log("ilk", a++, a)

//?  normal yazimda + yerine komma da kullanilabilir.arttirma ilk yazinca degilde ikincide isler.a++ deyince islemi kendi isler ama bir sonrasina gosterir. a++ deyxince 5 yazar.bi sonrakinde a yazinca 1 arttirmis olur ve 6 olur


let b=a++;
console.log(a);  //7
console.log(b);  //6



console.log("******************************************");

//? onune + koyarsak hemen arttirir.ama yukaridakini daha cok kullanacagiz
let c=10;

console.log(++c);
console.log(c);


let e=33;
console.log(--e);
console.log(e--);// bir ustte 32 ye dustu.o nedenle guncelin ilk halini verir.asagida ikinci kez yazdrnca 1 eksilmis halini verir
console.log(e);



//! e yi 5 arttir.(en sonki halinden devam eder)

e+=5
console.log(e);


//! e yi carp
//e =e*10  bu da olur ama kisa yolu...

e*=10
console.log(e);  //e*10=360


//! us alma ve carpma
//? alan ve cevre

const pi=3.14;
const r=3;

const alan=pi*r**2
console.log(alan);


const cevre=2*pi*r
console.log(cevre);


//! bazi fonksiyonlar

// Math.floor();  //* her zaman en yakın alt tamsayıya yuvarlar.tabana yuvarlar
// Math.ceil();  //* her zaman en yakın üst tam sayıya yuvarlar.tavana yuvarlar
// Math.trunc(); //* sayının tam kısmını alır.
// Math.round(); //* en yakın tam sayıya yuvarlar.

// Math.random(); //* 0 ve 1 arasında rasgele sayı üretir.


//?sonuclara gore yapiyor.log lari 28.26 ve 18.84 gozuktu console da.trunc ve floor ayni sonucu verir pozitif sayilarda. negatiflerde fark eder.

console.log(Math.floor(cevre));
console.log(Math.ceil(cevre));
console.log(Math.trunc(cevre));
console.log(Math.round(cevre));



const ab=-1.3
console.log(Math.trunc(ab));
console.log(Math.floor(ab));



//*********************** MOD ALMA ************** */
//?birler basamagini bulmak icin
const number=456;
const birler=number%10
console.log(birler);


//? onlar basamagini bulmak icin(5)

const onlar=Math.trunc(number/10)%10
console.log(onlar);


//? yuzler basamagini bulmak icin

const yuzler=Math.floor(number/100)
console.log(yuzler);







