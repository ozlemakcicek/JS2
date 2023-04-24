document.querySelector("h1").style.color = "red";
document.querySelector("h1").style.textAlign = "center";

//************************************************** */

let resim = document.querySelector(".resim");
let ses1 = document.querySelector(".ses1");
let ses2 = document.querySelector(".ses2");

//!ara butonu tiklandiginda
document.querySelector(".ara").onclick = () => {
  resim.src = "./assets/img/img.gif";

  ses1.play();
  //play() komutu html deki audio etiketini js de calistirir
  // biz pause() komutunu verene kadar calar
  //resim degisecekse onu src sinde degisiklik yapacagiz diye aciyoruz

  ses1.volume = 0.5;
  //ses in volumunu 0-1 arasi deger vererek ayarlayablrsn
};

//! baglat butonu tiklandiginda

document.querySelector(".baglat").onclick = () => {
  resim.src = "./assets/img/telbagla.gif";

  //pause() komutuyla calan audio sesini durdurabilirsiniz
  ses1.pause();
};

//! konus butonu tiklandiginda

document.querySelector(".konus").onclick = () => {
  resim.src = "./assets/img/telefon.gif";
};

//! mouse ile resmin uzerine gelince

// resim.onmouseover=()=>{}// bu kolay yol bununla yapilabilir ama bir yol daha var

//'' icine ne zaman olsun istiyorsan onu yaz sonra komma sonra fonksiyonu yaz
resim.addEventListener("mouseover", () => {
  resim.src = "./assets/img/aslan1.jpeg";
  // ses2.play()
});

//! mouse uzerinden ayrilinca

resim.addEventListener("mouseout", () => {
  resim.src = "./assets/img/aslan2.jpeg";
});

//! klavyeden inputa veri girisi yapilirken elimizi cektigimiz anda var olan degisiklik

//*
const textInput = document.querySelector(".textbox");
const tikInput = document.querySelector(".checkbox");

//?? onkeyup()--> klavyeden elini cektiginde

//?? inputa veri girisi yaptigimizda kucuk input tikli ise benim buyuk inputa girdigim harfleri buyut, aksi durumda kucult diyen kodu yaziyoruz

textInput.onkeyup = () => {
  if (tikInput.checked) {
    textInput.value = textInput.value.toUpperCase();
  } else {
    textInput.value = textInput.value.toLowerCase();
  }
};

// checked=metodu checkbox inputun tikli olup olmadığını kontrol eder. tıklanmışsa true döndürür

//! listemin basina 'Programlama Dilleri' h1 etiketi eklemek
// bu yazacagimiz yaziyi html de daha kolay yatzariz ama js de de gorelim
//iki yolu var.once uzun olani yazalim.5 satirda yaziliyr

//?HTML DE h1 elementi oluşturmak
const baslik = document.createElement("h1");

//? baslik2 class ismi atayalım
baslik.className = "baslik2";

//?Programlama Dilleri şeklinde text oluşturduk
const yazi = document.createTextNode("Programlama Dilleri");

//?h1 elementi için oluşturduğum text i h1 e child yapalım
baslik.appendChild(yazi);

//?input-div in sonrasına h1 i ekledim
document.querySelector(".input-div").after(baslik);

//! kisa yol

const bolum = document.querySelector("section");

bolum.innerHTML =
  `<h1 class="baslik2 text-center" >Programlama Dilleri</h1>` + bolum.innerHTML;

//! languages inputuna girilen degerleri, ul ye eklemek
//!uzun yol

const dil = document.querySelector(".languages");

//* yeni girilen satiri saklamak icin bir li olusturduk.
// const yenili=document.createElement('li')

//* yeni li icin textnode olusturduk
//   const text=document.createTextNode(dil.value)

//*olusturdugumuz texnode'u yeni li'ye bagladik.
// yenili.appendChild(text)

//* yeni eklenen satiri var olan listeye (ul) baglayalim.
  const liste=document.querySelector('.liste')

// liste.appendChild(yenili)

//!kisa yol

document.querySelector(".ekle").onclick = () => {
  liste.innerHTML += `<li> ${dil.value} </li>`;

  dil.value = "";

  // ekle ye basinca yazsin ve listeye eklesin dedik.ve ekleye basilmayinca inputda bisey gozukmesin diye bos value diyoruz
};

//! sil butonuna basilinca ul listesinden li elemanini silmek icin removeChild methodunu kullanacagiz.son icin lastElementChild, ilk eleman icin firstElementChild, aradan sileceksek children[] yapariz

document.querySelector(".sil").onclick =()=>{
  liste.removeChild(liste.lastElementChild);
      liste.removeChild(liste.firstElementChild)
      liste.removeChild(liste.children[2])
  
}



//! klavyedeki keyCode lari kullanarak kod yazma

// dil=input
dil.onkeydown=(tus)=>{
  console.log(tus.keyCode);


  //!enter=13 e basilirsa
  //console da tus ifadesinin keyCode unu gorduk.13 mus
  //*eğer delete =46 veya control=17  veya shift=16 tuşuna basılırsa sil butonu tetiklensin

  if (tus.keyCode === 13) {
    document.querySelector(".ekle").click();
  }
  if(tus.keyCode===16){
    document.querySelector('.sil').click()
  }
}

// console.log(tus);event larda alınan parametreler (tus) bize event la ilgili özelliklerin olduğu bir nesne döndürür. burada keyCode property sini kullandık