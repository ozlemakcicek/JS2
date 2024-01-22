//* ===========================================================
//*                          3- FETCH API
//*=============================================================

//? Dis kaynaklardan veri getirmek icin kullanilan basit bir arabirimdir.
//? Ag istekleri yapmamiza ve cevaplari yonetebilmemize olanak saglar.
//? Javascript ortaminda en cok kullanilan Asenkron islem orneklerinin basinda
//? gelmektedir.

//? fetch() fonksiyonu veri getirmek istediginiz kaynagin yolunu gosteren zorunlu
//? bir parametre almaktadir ve bu istegin cevabini gosteren bir Promise dondurmektedir.

// fetch("https://api.github.com/users")
//   .then((res) => res.json())
//   .then((veri) => ekranaBastir(veri));  // bu kod farz fetch ile veri cekerken.



//! once verileri fetch ile cekeriz, sonra json(javascript object notation) a dondururuz ki ham veri gelsin. sonra bunu ekranda ya da console da gorebiliriz.burda ekrana bastir fonksiyonunu kullanarak ekranda gormek istiyrz. 
//? veriGetir fonksiyonunu ise  html sayfasinda yazdigimiz buttona tiklayinca cagiriyoruz.
// ekranaBastir fonksiyonunu yaziyoruz simdi.gelen verinin icinde forEach ile donuyoruz ve yine html dosyasindaki sectioni secip icerisine innerHtml ile, datadan istedigimiz bilgileri bastiriyoruz.innerHtml yi += yapiyoruzki herbirini bastirsin sonra digerini de eklesin diyoruz boylece.



//1-
const veriGetir=()=>{
   fetch("https://api.github.com/users")
   .then((res)=>{
      // bir condition ekleyelim buraya.veriler dogru cekildi ise diyelim.console da yukarida cektigimizde gormustuk ki veriler dogru cekildi ise ok= true diyordu onu yazalim. eger verilerin cekilecegi adreste hata varsa benim istedigim hata mesajini firlat diyelim throw new Error ile.
    if(!res.ok){
      throw new Error("url de hata var"); // else yazmaya gerek yok burda cunku zaten veri cekilemedi ise throw ile code yurutmesi bitiyor daha devam etmez.asagi inmez.bu if statement i kontrol amacli yazdik, yazmasakda olurdu direkt gelen veriyi jsona cevirebilirdik.

      console.log("hata"); //throw ile kendi error umuzu fırlatırsak, hata olduğunda kod burada durur. hatta o yüzden if ten sonra else yazmaya gerek yok
    }
   return res.json()

   }).then((veri)=>ekranaBastir(veri))
 
}

//2-
document.querySelector("button").onclick=()=>{
   veriGetir(); 
}


//3-
const ekranaBastir=(veri)=>{

    veri.forEach((eleman)=>{
    document.querySelector("section").innerHTML+=`
    <h1 class="mt-4"> Name: <span class="text-danger">${eleman.login}</span></h1>
    
    <img src=${eleman.avatar_url} width="50%">

    <h3>NODE-ID:${eleman.node_id}</h3>
    `;
    })
}