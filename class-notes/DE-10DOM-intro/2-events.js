//* ======================================================
//*                        EVENTS
//* ======================================================

//* EXAMPLE-1 (Mouse Over, Mouse Out )
//* -------------------------------------------------------

//?METHOD-1 (HTML-INLINE)
//?---------------------------------------------------------------

//* alttaki satirlar html de inline yapildi

/* <h1 onmouseover="style.color='blue'" onmouseout="style.color='red'">
  JAVASCRIPT TE DOM
</h1>; */


//? METHOD-2 (Function calling in HTML)
//?---------------------------------------------------------

//* index html de yazdigimiz kod
/* <h1 class="H5" onmouseover=yesil() onmouseout=kirmizi()>DOM BASICS</h1> */


//JAVASCRIPT
const baslik= document.querySelector('.H5')

const yesil=()=>baslik.style.color='green' // fonksiyon yazdik
// yesil()// fonksiyonu cagirmayinca gostermez.cagirdk.


// fonksiyonu js de cagirmayi html de yapabilirz ama tercih etmemek lazim.burda gostermek icin yaptik

const kirmizi=()=>baslik.style.color='red'



//? METHOD-3 (SADECE JAVASCRİPT TE YAZILAN YOL) 1.yol
//?---------------------------------------------------------------

//* example1


// document.querySelector("#js").onmouseover=()=>{
//     document.querySelector('#badi').style.backgroundColor='pink'
// }


// document.querySelector("#js").onmouseout = () => {
//   document.querySelector("#badi").style.backgroundColor = "red";
// };


// iki defa yazmamak icin variable a atariz


 const js = document.querySelector("#js");
 const badi = document.querySelector("#badi");
 js.onmouseover = () => {
   badi.style.backgroundColor = "pink";
 };
 js.onmouseout = () => {
   badi.style.backgroundColor = "red";
 };


//* example-2  (onclick-ondblclick)

const birinci= document.querySelector('.bir')
const ikinci= document.querySelector('.iki')

//ilk resme tiklayinca ikinci resim gelmesini istersek;
birinci.onclick=()=>{
    birinci.src = "./img/logo2.png";
    ikinci.src = "./img/js_logo.png";
   ikinci.onclick = () => {
     ikinci.src = "./img/logo2.png";
     birinci.src = "./img/js_logo.png";

    //  icerde();
   }; 
}
//tekrar eski haline donsun dersk;


// ikinci.onclick = () => {
//   ikinci.src = "./img/logo2.png";
//   birinci.src = "./img/js_logo.png";
// };

//aslinda hep sariya tikliyoruz.cunku siralama da o var.eger birinci bozsun ikinciye basinca duzelsin dersek degiskene atayip birincinin parantezinin icin de o variabla atanmis fonksiyonu bi gosterelim

// const icerde=()=>{ ikinci.onclick = () => {
//  ikinci.src = "./img/logo2.png";
//    birinci.src = "./img/js_logo.png";
//  };}   

// * yada burda yaptigimiz gibi direkt icine at.burdaki olay yukaridakine tiklaninca (birinci) bozulsun, asagidakine tiklayinca(ikinci) tekrar duzelsin yaptik.siyahin kendisinde hicbirsey olmuyor




//?? ondblclick

ikinci.ondblclick=()=>{
    birinci.src="./img/voltran.jpg"
    ikinci.src="./img/voltran2.jpg"
}


//* example-3  

const buton = document.querySelector('#btn')

buton.onclick=()=>{

badi.style.backgroundImage='linear-gradient(to right,purple,gray)'

buton.textContent='SEARCH'

buton.style.fontSize='40px'
buton.style.color='red'

}

//!aynı element e (merhaba yazısına mouse ile gelince badi renk değiştirdin demiştik) hem onclick hem onmouseover atandığında, önce onmouseover  sonra onclick i çalıştırırsanız sorun olmaz, tersi durumda onclick baskın old için onmouseover çalışmaz