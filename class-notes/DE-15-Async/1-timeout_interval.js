//*=================================================================
//*              1- Senkron-Asenkron Programlama
//* ================================================================

//! Javascript, bir single-threaded ve Asenkron Programlama dilidir.

//? Asenkron Programlama
//? --------------------------------------------------------------
//? Asenkron Programlama, bir alt gorevin uygulamanin asil thread'inden
//? bagimsiz olarak arka planda calistirilmasina izin veren paralel programlama
//? teknigidir. Bu alt gorev tamamlandiginda (basariyla veya basarisizlikla)
//? asil thread bu konuda bilgilendirilir. Asenkron programlama, uygulamalarin
//? performansininin artirilmasina ve daha iyi kullanici deneyimine katki saglamaktadir.

//? Ozellikle bir API'den veya Veritabanindan veri cekme, Giris/Cikis islemleri,
//? Dosya Okuma/Yazma islemleri gibi zaman tuketen kodlarda Async Programlama
//? kullanilmasi cok onemlidir.

//*Senkron Programlama---önemli degil bu yazim sekli
//****************************************** */
// saniyeler burda 3s degilde 3000 diye yazar
const bekle=()=>{
    const start=new Date().getTime()
    while(new Date().getTime()<start+ms){

    }

}
console.log('hello');


console.time("timer1");  // kronometreyi baslat
bekle()
console.timeEnd("timer1")  // kronometreyi durdur




//*Asenkron (setTimeout) 1 seferlik.Bu önemli
//******************************** */

// fonksiyonun suslusunden sonra virgul koyup sure yazinca bu bkleme suresi olur.},2000)  bu 2 s bekle sonra goster demek.


// bekleme suresi ile soyle bir ornegi benzetebiliriz.siparisininz cok ve hazirlanmak icin sure lazim.ama arkadaki kisinin isi cok kisa.kasada bekleyip mesgul etmemek icin kenara cekilip yerimizi diger musteriye veririz.bekleme sureleri esit ise ilk kuyruga kim girdi ise o once calisir


setTimeout(() => {
  console.log("selamun aleyküm");
}, 2000);
console.log("aleyküm selam");

setTimeout(() => {
  console.log("naber napıyorsun");
}, 3000);



//!Aleyküm Selam-Selamun Aleyküm- Naber napıyorsun çalışır, 3. nün süresi 1.den azsa, 2-3-1 sırasında çalışır
//!settimeout müsait zamanda ortaya çıkar, onun sırası geçtiğinde alttaki işlemler bitince çalışır


//*Asenkron(setInterval, clearInterval) belli aralıklarla durdurulana kadar devam eder. mesela 1 dakikada bir döviz kurunu güncellemek için kullanılabilir
//***************************** */

//?setInterval non-blocking

console.log("sayac basliyor");
let sayac;

const interval1= setInterval(()=>{

    console.log(++sayac);  //bir muddet calissin sonra dursun istersek bir if blogu yazariz

    if(sayac==5){
clearInterval(interval1)       // sayac 5 olunca dursun dedik
    }
},1000)

console.log("sayac durduruldu");



// //?callback hell....Bu artik kullanilmiyor

setTimeout(() => {
  console.log("ayse:s.a. ahmet");
  setTimeout(() => {
    console.log("ahmet:a.s. ayse nasılsın");
    setTimeout(() => {
      console.log("ayse:iyiyim sağol");
    }, 1000);
  }, 1000);
}, 1000);