//*==================================================================
//*                       ARITMETIK OPERATORLER
//*==================================================================



const sucuk=250;
const cola=20;
const peynir= 200;


let toplam=sucuk+cola+peynir;

// toplamin degisme ihtimali var.block icinde birde schokolade ekleyebiliriz mesela.o nedenle let ile yazdik.Ayni sekilde const ile toplami yazsaydik toplam++ da calismazdi.o yuzden let ile yazdik

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

console.log( "adim ve soyadim:" + ad + " " + soyad);  // kelimelerin arasini acmak icin " " bos string yazariz.

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
console.log(s1-s3); //NaN verir console da:Not a number demek



//! JS de camelCase olarak yazilir

//* Ashley 43 yasindadir yazdiralim kisa ve uzun yol ile

const dogumTarihi=1979;
const name1="Ashley";
console.log(name1 +" " + (2023-dogumTarihi) + " " + "yasindadir");

//! bunu template literals(backticks) ile yazalim.
//* Bosluklari otomatik algilar. + lara gerek yok

console.log(`${name1} ${2023-dogumTarihi} yasindadir`);


//*ARTTIRMA AZALTMA


let a=5;
console.log("ilk", a++, a)

//?  normal yazimda + yerine komma da kullanilabilir.arttirma ilk yazinca degilde ikincide isler.a++ deyince islemi kendi isler ama bir sonrasina gosterir. a++ deyxince 5 yazar.bi sonrakinde a yazinca 1 arttirmis olur ve 6 olur


let b=a++; //en son a 6 idi yukarida ve b=a++ deyince hemen burda 6 olan a arttirilm,az hala 6 dir o. ama a nin kendisini yazdiorirsak artik 7 olmus olur

console.log(a);  //7
console.log(b);  //6

//* a++ hemen o anda islemez dolayisi ile b= a nin ilk hali olur. sonra a yi yazdirirken  a nin arttirilmis halini verir.sagdaki + larda boyle.soluna , önune + koyarsak hemen isler.ayni sey - icin de gecerli



console.log("******************************************");

//? onune + koyarsak hemen arttirir.ama yukaridakini daha cok kullanacagiz
let c=10;

console.log(++c); //11
console.log(c);


let e=33;
console.log(--e);//32
console.log(e--);// bir ustte 32 ye dustu.o nedenle guncelin ilk halini verir.asagida ikinci kez yazdrnca 1 eksilmis halini verir
console.log(e);//31. yukaridakinin sonucu burda veriyor



//! e yi 5 arttir.(en sonki halinden devam eder)

e+=5
console.log(e); //36.son haline 5 eklenmis durum


//! e yi carp
//e =e*10  bu da olur ama kisa yolu...

e*=10
console.log(e);  //e*10=360


//! CARPMA VE US ALMA

//? alan ve cevre

const pi=3.14;
const r=3;

const alan=pi*r**2
console.log(alan);


const cevre=2*pi*r
console.log(cevre);//18.84


//! bazi fonksiyonlar

// Math.floor();  //* her zaman en yakın alt tamsayıya yuvarlar.tabana yuvarlar
// Math.ceil();  //* her zaman en yakın üst tam sayıya yuvarlar.tavana yuvarlar
// Math.trunc(); //* sayının tam kısmını alır.
// Math.round(); //* en yakın tam sayıya yuvarlar.

// Math.random(); //* 0 ve 1 arasında rasgele sayı üretir.


//?sonuclara gore yapiyor.log lari 28.26 ve 18.84 gozuktu console da.trunc ve floor ayni sonucu verir pozitif sayilarda. negatiflerde fark eder.

console.log(Math.floor(cevre));  //18 
console.log(Math.ceil(cevre));   //19
console.log(Math.trunc(cevre));  //18
console.log(Math.round(cevre));  //19



const ab=-1.3
console.log(Math.trunc(ab));
console.log(Math.floor(ab));



//*********************** MOD ALMA ************** */
//?birler basamagini bulmak icin; 10 a bolumu kullanilir

const number=456;
const birler=number%10
console.log(birler);


//? onlar basamagini bulmak icin(5)

const onlar=Math.trunc(number/10)%10
console.log(onlar);


//? yuzler basamagini bulmak icin

const yuzler=Math.floor(number/100)
console.log(yuzler);



//*===============================================================
//*                   KARSILASTIRMA OPERATORLERI
//* ==============================================================

const sayi1=4;

console.log(sayi1==4);//true
console.log(sayi1===4);//true
console.log(sayi1=="4");//true
console.log(sayi1==="4");//false.3 = type na da bakr

console.log(sayi1!=4);//false
console.log(sayi1!="4");//false

console.log(sayi1>4);
console.log(sayi1<=4);


//* ===================================================

//*                        TIP DONUSUMLERI
//* ====================================================

const para=Number('1000') + '900' ; //1000900   number ve string toplanirsa string daha baskin o.i sonucta yanyana string olarak yazar.
console.log(para);


const para2=Number('1000') + Number('900'); //1900
console.log(para);


console.log(Number('1000') + Number('900'));  //1900

//*False donduren ozel haller
console.log(Number(""));  // 0
console.log(Number(null));  // 0
console.log(Number(true));  // 1

// olumsuzluklari sayiya dondurursen 0 verir.true yu numbera dondurursek 1 verir



//* ===============================================
//*                   MANTIKSAL OPERATORLER
//* ===============================================


//? TRUE
console.log(Boolean(5));//true
console.log(Boolean(-5));//true
console.log(Boolean(-15.5));//true

//? ici dolu olunca ne oldugu onemli degil(asagidakiler haric) boolean parantezinde
//? true dur


//? 5 falsy
console.log(Boolean(0)); //false
console.log(Boolean(null));//false
console.log(Boolean(""));//false
console.log(Boolean(undefined));//false
console.log(Boolean(NaN));//false



const v1=false|| 0|| 12.6 ||true || false || null
console.log(v1);

//? veya da ilk true yu gorunce onu verir.Boolean lar true dur.hiclik, sifir gibi bazi lari haric


const v2= false || 0 || null || undefined || NaN
console.log(v2);

//? hepsi fals ise en sonuncuyu verir


const v3 = 5 && true && true && 0 && ""
console.log(v3);

//? and hep kotuyu arar.buldugu ilk false da onu verir


const v4= 6 && true && 12.5 && 7
console.log(v4);

//? hepsi true ise en sona kadar kotuyu arar eger bulamazsa mecburen en sonki true yu verir


console.log(!v4);  // true nun degili false
console.log(!v2);  //  false un degili true




console.log(Number("0x11")); // 17 x=hexa=16





console.log(Number("0b101")); // 5 b=binary 2lik taban






console.log(Number("0o11")); // 9 o=octal=8







console.log(Number("sayi")); //NAN









