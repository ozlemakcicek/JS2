// ?=========================================================
// ?                 STRING METOTLARI
// ?=========================================================
console.log("****STRİNG METHODS******");

//! 1- klasik yontemle tanimlanan String ilkel(primitive) dir. buyuk harfle yazilir.digerleri kck

const str1='clarusway'
const str2='hello';
const str3='all the world';

console.log(str2+str3, typeof(str2+str3));
console.log(str2[str2.length-1]);

//! 2- String constructor ile tanimlanan String non-primitive (ilkel olmayan) dir

const str4= new String("yeni bir String")//ilkellikten cikartmak icin new String() seklinde yazmamiz lazim.type i da object
console.log(typeof str4);


//! Normalde primitive veri tiplerinin property veya metodu olmaz.
//! Ancak Javascript  otomatik olarak primitive String'leri String
//! object lerine dönüştürür. Bu sayede, String object lerine ait olan
//! fonksiyonlar veya özellikleri primitive string ile kullanmak
//! mümkün olur. Ayrıca 2 tür arasında çevrim yapmakta mümkündür.
//? Ek Açıklama için : https://javascript.info/primitives-methods

// *=========================================================
// *               concat() immutable=değiştirmez
// *=========================================================

let s1='hello'
const s2='world'
console.log(s1.concat(s2));
console.log(s1);
const s3= s1.concat(s2);
console.log(s3);

//? orginal degerler degismez.assigning ile kalici degistirebilirsiniz

//****************************************************************************************************************************************************** */

//***************** toLowercase() / toUpperCase() */

const myName='Ashley Miller';
console.log(myName.toLowerCase());
console.log(myName.toUpperCase());

console.log(myName.toLocaleUpperCase('tr'));

//*istedigin ulkenin diline cevirmek icin toLocaleUpperCase('ulke sinali') kullanilir

//! toLocaleUpperCase("tr")= Türkçe büyüt demek  boş bırakınca  eng (ingilizce) karakterlere uygun büyütebiliriz

//? ORNEK: iki string'i esit veya degil diye kiyaslayarak sonucu donduren fonksiyonu yaziniz.

const esitMi=(str1,str2)=>str1==str2.toLocaleUpperCase()? "esittir":"esit degildir"


console.log(esitMi('ISMET','ismet'));

// ***************************************************//*     charAt()
//************************************************ */

const s4='primitive \n veri tiplerinin \n property ya \n da methodu olmaz.'

console.log(s4);


console.log(s4.charAt(5)); //t
console.log(s4.charAt(9));//" "
console.log(s4.charAt());//ilk karakteri dondurur
console.log(s4.charAt(s4.length-1));//. son karakteri verir



//* ***********************************************
// * includes()-case sensitive(byk kck harfe duyarli)
// *****************************************


const kelime='to be or not to be, that is The questions.'
console.log(kelime.includes('TO BE'));//false
console.log(kelime.includes('to be'));//true
console.log(kelime.includes('quest'));//true
console.log(kelime.includes(' '));//true
console.log(kelime.includes('to be',14));//false
console.log(kelime.toUpperCase().includes('TO BE'));//true

//! NOT: incase sentive kullanmak icin kelime baslangicta kucuk veya
//! buyuk harfe cevirilerek arama yapilabilir.


//* ***********************************************
// * indexOf()-case sensitive(byk kck harfe duyarli)
// *****************************************

const kelime1= 'to be or not to be, that is The questions.'
console.log(kelime1.indexOf('be'));
console.log(kelime1.lastIndexOf('be'));//sondaki be yi verir.yine bastan sayar

console.log(kelime1.indexOf('the'));// olmayan karakter icin -1 dondurur
console.log(kelime1.indexOf('TO BE'));// -1
console.log(kelime1.indexOf(' '));//ilk gordugu boslugu verir 
console.log(kelime1.indexOf('be',4));// 4.be yi soruyor.yoksa en sonuncunun indisini dondurur.16
console.log(kelime1.indexOf('be',kelime1.indexOf('be')+1));// 



//********************************************* */
// *                 search()
//********************************************* */

const kelime2= '!to be or not to be, 5 that is The questions.'

//! REGEX

console.log(kelime2.search(/[A-Z]/));//28


// cümlenin içindeki büyük harfi bulup küçülttük
console.log(kelime2.charAt(kelime2.search(/[A-Z]/)).toLowerCase());


console.log(kelime2.search(/[a-z]/));//1
console.log(kelime2.search(/[0-9]/));//21
console.log(kelime2.search(/[.]/));//44
console.log(kelime2.indexOf("."));//44


console.log(kelime2.search(/[0-9a-zA-Z]/));//bir rakam ya da kck ya da byk harf varsa indexini döndurur
console.log(kelime2.search(/[^a-z]/));//0


//********************************************* */
// *     startswith(), endswith() --case sensitive
//********************************************* */


const kelime3="Salina salina sinsice olurum sana!"
console.log(kelime3.startsWith('sa'));//false
console.log(kelime3.startsWith('Sa'));//
console.log(kelime3.startsWith('salina',7));//true.baslangiclar her zaman dahildir.7 den baslar
console.log(kelime3.endsWith('!'));//true
console.log(kelime3.endsWith('salina',13));//true bitislerde son sayi dahil degil. 13 dahil degil yani 12 ye kadar aldiriyor ve bu true dur


//********************************************* */
// *   replace(searchFor, replaceWith) --immutable (degistirmez)
//********************************************* */
let oku='Oku Jony gibi saf olma saf olma'
oku=oku.replace('saf olma','basarili ol')
console.log(oku);
console.log(oku.replace(/SAF/i, 'fakir'));

// /SAF/i byk kck harfe duyarsiz ol.incase-sensitive dir

console.log(oku.replace(/Saf olma/gi, 'zengin ol'));
// gi...global incasesensitive oluyor.butun byk kck hepsini sec degistir demek

//!gi ile yazılırsa tüm saf olma (büyük küçük harfe duyarsız) kelimelerini değiştirir, aksi takdirde ilk bulduğunu

//*replaceAll()
let degistir='Oku Jony gibi saf olma SAF olma';
console.log(degistir.replaceAll('saf olma','akilli ol'));

//********************************************* */
// *   slice(beginIndex, endIndex)
//* substring(beginIndex, endIndex)
//********************************************* */

const veysel='UZUN INCE BIR YOLDAYIM YURUYORUM GUNDUZ GECE';

console.log(veysel.slice(10));//BIR YOLDAYIM YURUYORUM GUNDUZ GECE
console.log(veysel.slice(17,21));// DAYI 21 dahil degil
console.log(veysel.substring(17,21));// DAYI 21 dahil degil
console.log(veysel.slice(-10));// UNDUZ GECE saymaya sondan ve -1 ile baslanir
console.log(veysel.slice(-11,-6));// GUNDU 
console.log(veysel.slice(16,-6));// LDAYIM YURUYORUM GUNDU 

//! substring methodunda -index calismaz

console.log(veysel.substring(-10));//calismaz
console.log(veysel.substring(veysel.length-3));//son 3 karakteri verir




// ***************************************************//*     split=string i diziye cevirir
//*     
//************************************************ */

const tarkan='Gel gunduzle gece olalim'

console.log(tarkan.split());// 1 elemanli array e cevrilir
console.log(tarkan.split(" "));// bosluklardan ayir
console.log(tarkan.split(""));// hicliklerden ayir
console.log(tarkan.split('e'));//e yi iptal edip yerine virgul ve bosluk koyar
console.log(tarkan.split("e",3));// e den ayirip dizinin 3 elemanini kelime olarak al.
console.log(tarkan.split("",5));// harf harf ayir ve 5 tanesini al
console.log(tarkan);// split immutable.kalici olarak degistirmez



//***************************************************//*    trim();
//*     
//************************************************ */


const ramazan="   Hosgeldin ya Sehr i Ramazan     "
console.log(ramazan);
console.log(ramazan.length);


console.log(ramazan.trim());
console.log(ramazan.trim().length);


