//? pc ye 1-20 arasi sayi tutturduk

let rastgeleSayi = Math.ceil(
  Math.random() * 20
); /* randomla 0-1 arasi tutar.*20 yapinca 1-20 arasi tutar ama komma dan sonra cok rakam var.yuvarla yukari ceil ile ve bunu bir degiskene atayalim.*/

console.log(rastgeleSayi);
let mesaj = document.querySelector(".msg");

//? index html deki scor u buraya cekerekte yapabiliriz textContent ile ama cok kullanacagmz icin bu yol daha tercih edilir
let skor = 10;


//?-----------localStorage de topScore adıyla bir degisken varsa onu  getir yoksa 0 olsun diyoruz en basta.her refresch yapildiginda kaydedilmis skoru getirsin diye basa yazilir
let enYuksekSkor = localStorage.getItem("topScore") || 0



//?----browser da, DOM da top-score değerini localStoroge den okuyarak güncelle, özellikle 2. 3. oyuncular için gerekli
document.querySelector(".top-score").textContent = enYuksekSkor;




//? her check butonuna basilinca yapilacaklar

document.querySelector(".check").addEventListener("click", () => {
  const tahmin = document.querySelector(".guess").value;

  // veri dogru,yanlis seklinde olabilir ya da tahmin vermeden checke basti ise sartlari yazilir buraya.!tahmin demek tahmin  false demek o da yok demek

  if (!tahmin) {
    mesaj.textContent = "Lutfen bir tahmin giriniz..";
  } else if (tahmin == rastgeleSayi) {
    mesaj.textContent = "Tebrikler bildiniz..";
    // input ta tahmin dogru ise value ile kontrol edilir, yazida ise textContent ile mesaj veririz.simdi style degisiklikleri vereblrz tahmin dogru olunca.

    document.querySelector("body").style.backgroundColor = "green";

    document.querySelector(".number").textContent = rastgeleSayi;

    //? tahmin dogru ise;
    //! topScore kontrolu yap

    if (skor > enYuksekSkor) {

        
      //?eğer yeni skor localStoroge den yüksekse, kayıtlı topScore u benim skor umla güncelle
      localStorage.setItem("topScore", skor);
      enYuksekSkor = skor;
      document.querySelector(".top-score").textContent = enYuksekSkor;
    }

    //? tahmin yanlis ise;
  } else {
    //?score 1 den byk oldugu surece tahmin hakkim var

    if (skor > 1) {
      // arttir azalt yazsin
      skor--;
      document.querySelector(".score").textContent = skor;
      // turnery kullnalim
      tahmin < rastgeleSayi
        ? (mesaj.textContent = "Arttir📈")
        : (mesaj.textContent = "Azalt📉");
    } else {
      mesaj.textContent = "Oyunu kaybettiniz";
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "red";
    }
  }
});

//* addEventlistener(a,b) iki parametre alir.biri hangi sart ile yapilacaksa digeri normal fpnksiyon durumu ve icine yapilacaklar.bunun yerine tabiki onclick de yapilablr

//! Again tusuna basilinca ayarlar baslangic degerlerine donup tekrar kurulsun.arka ekran #2d3436  bu renk olsun gibi asagidaki degisiklikleri

document.querySelector(".again").onclick = () => {
  //*   yukarida bir let ile rastgele sayi gtanimladik.simdi aynisini degistirecegiz.bi daha let ile tanimlamaya getrek yok

  rastgeleSayi = Math.ceil(Math.random() * 20);
  document.querySelector("body").style.backgroundColor = "#2d3436";

  skor = 10;

  document.querySelector(".score").textContent = skor;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  mesaj.textContent = "Oyun yeni oyuncu icin basliyor..";
};
