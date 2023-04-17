//* ======================================================
//*                 NESNELER (OBJECTS)
//* ======================================================

//? Diziler (Arrays) sıralı bellek yapısıdır. Böylece, onlara indeksleyerek erişebiliriz.
//? Object leri daha karmaşık (yapılandırılmamış) bellek ihtiyaçları için kullanabiliriz

//?  herhangi bir veriye erişmek için Key-value (property-value) kullanılır

//! 3 farkli yontem ile Object olusturulabilir
//* ---------------------------------------------------------
//* 1-   Object (new) örneği oluşturalım
//* ---------------------------------------------------------


const car1=new Object({name:'BMW',engine:1.6, model:200})
console.log(car1);
console.log(car1.name);
console.log(car1['engine']); // ? square bracket
//? squar ebracket yonteminin en byk avantaji key degerini degsken olarak kullanablmemizdir

const car2=new Object({})
car2.name='Mercedes'
car2.motor=2.0
car2.model=2001

console.log(car2);



//*-------------------------------------------------------------------
//* 2-           Object Constructor(OOP ile ayrintili gorecegiz)
//*-------------------------------------------------------------------


//? ayni tarzda yuzlerce veri girmek icin genel bir yapi(construction) kurariz ve istedigin kadar deger gireblrsin
function Calisanlar(id,isim,maas){

this.calisanId=id;
this.calisanName=isim;
this.calisanMaas=maas;

}

//!! eger object constructor kullanacaksak this gerekli, Arrow function da this kullanimi saglikli olmadigindan burada decleration function kullandik.


//! this keyword'u icinde bulundugu scope'daki objeyi refere eder
console.log(this); //? Global scope da oldugumuzdan dolayi browser penceresinin en temel objesini yani window'u gosterir

const kisi1= new Calisanlar(101,'Mehmet',80000)
const kisi2= new Calisanlar(101,'Osman',90000)
const kisi3= new Calisanlar(101,'Nergis',100000)


console.log(kisi1);
console.log(kisi2);



//*-------------------------------------------------------------------
//* 2-           Object Literal(en cok kullanilan yontem)
//*-------------------------------------------------------------------


const person={

    name:'Johny',
    surname:'Deep',
    birth:1970,
    job:'actor',
    hasDriverLicense:true,
    languages:['C','C++','JAVA','PYTHON']

}
console.log(person);
console.log(person.name);
console.log(person['job']);
console.log(person.languages[2]);


//?? write

person.birth+=5 // ekleme yapmak icinkull.concat(yazi ekleme) ya da sayisal veri eklemek icin
console.log(person.birth);

person.languages.map((a)=>a.toLowerCase()).forEach((x)=>console.log(x))

// altalta(forEach ile) kucuk harf ile yazdir dedik

//?? yeni bir propertie ekleyebiliriz

person.location='America'
console.log(person);




//*-------------------------------------------------------------------
//* 2-           Objects teki yontemler
//*-------------------------------------------------------------------



// let birth=1980// boyle bir birth disarda tanimlarsak hangisini alacagini bilemez.o nedenle iceri this ekleriz
const mensch={

    name:'Johny',
    surname:'Deep',
    birth:1970,
    job:'actor',
    hasDriverLicense:true,


    yasHesapla:function(){
        console.log(this);
        return  new Date().getFullYear()-this.birth
        // her yil icin gecerli olsun diye new Date ekleriz
    },
    özet:function(){
        return`${this.name} oyuncusu ${this.yasHesapla()} yasindadir`
    }
}

console.log(mensch);
//! yas hesapladaki this keyword nu yazmazsak global deki birth degiskenini kastettigimi dusunebilir.
//* sadece mensh deyince function lar gelmez.cagirmamiz lazim

console.log(mensch.yasHesapla());
// bunu yazinca sadce yasi getirmiyor hepsini getiriyor cunku yukarida yasHesaplanin icinde this var.ne varsa getir demek.Hepsini getiriyor sonra yas hesabi yapiyor.ayni sey asagisi icin de gecerli
console.log(mensch.özet());

console.log(Object.values(mensch));// direkt value lara ulasablrz.array olarak verir.indisle özele de inebilirsin.Ayni sekilde key lere de ulasablrsn
console.log(Object.keys(mensch));


//? arrow func'lar aslinda this keyword'lerini kaldirmak icin gelistirilmis bir fonksiyon yazma yontemidir. Bu sebeple, dogrudan global scope'a baglidir.
//!NOTE: arrow functions ın sözcüksel bağlamı vardır. Yani this keyword ü bir arrow function içinde kullanırsak beklenmedik değerler alabiliriz. arrow kullanınca,  object in içindeki this keyword ü, global scope u (window) ifade ettiği için, this value nun global scope a bağlanmasını önlemek için, object yöntemi içinde normal function u kullanın.


// * ======================================================
// *                  OBJECT ITERATION
// * ======================================================
// key lerin belirli bir sırası (index) olmadığı için, diziye alırsak object araması daha tutarlı bir arama performansına sahip olacaktır. Ayrıca diziler arasında döngü yapmak, keys arasında döngü yapmaktan daha hızlıdır, bu nedenle tüm öğeler üzerinde işlem yapmayı planlıyorsanız, bunları bir diziye koymak akıllıca olabilir.

const people = [
  {
    name: "Mustafa",
    surname: "Gertrud",
    job: "developer",
    age: 30,
  },
  {
    name: "Halo",
    surname: "Müller",
    job: "tester",
    age: 35,
  },
  {
    name: "Mehmet",
    surname: "Rosenberg",
    job: "team lead",
    age: 40,
  },
  {
    name: "Ozkul",
    surname: "Gutenberg",
    job: "developer",
    age: 26,
  },

  {
    name: "Baser",
    surname: "Shaffer",
    job: "tester",
    age: 24,
  },]

  console.log(people);

  //*örnek1: people dizisindeki job lari dondur
// forEach ile gezinir.alt alta yazar.istedigine ulasabilirsin ve yazdirabilirsin.
  people.forEach((a)=>console.log(a.job));
//   people.filter((a)=>console.log(a.job));// bunu da kullanabilirsin ama en iyisi forEach

//* yaslari birer arttir ve sonucu yeni diziye aktar
// degisiklik yapiliyorsa map().kalici olmazsa forEach() da kullanilir.ama console.log lazim gormek icin.diziyi bitirir.Ama yeni bir diziye aktarmak istenirse map()
//degiskene atamazsak kalici degismez 
const yaslar= people.map((kisi)=>kisi.age+1)
console.log(yaslar);
console.log(people[0].age);

// bu kalici degistirmedi.sadece degistirip yeni bir diziye atadi.eskisi duruyor.asagida diziyi tamamen degstirdik


//* yaslari 1 er arttir ve sonucu dizide kalici degistir

people.map((kisi,i,array)=>array[i].age=array[i].age+1)

// kalici degisiklik icin array uyesini de map icine yazip onda degisiklik yapmaliyiz.Bu sefer yukaridakileri de degistirr.istemezsek [i]. eleman demeyiz baska bir degiskene atariz.

// kisi--her bir {}. i--indis, array-- tamami
// yukarida array in herbir elemaninin age ni age+1 ile bir arttirarak guncelle dedik
// array[i].age diyerek kaliciya gecis yapmis olduk

//* örnek4  people(objectli) dizisinden yaslari degismis olarak yeni bir object li dizi olusturalim

const yeniPeople= people.map((a)=>({

    name1:a.name,
    surname1:a.surname,
    job1:a.job,
    age1:a.age+5
}))

console.log(yeniPeople);
console.log(people);

// yeni dizide name,surname,job ayni kalsin ama yaslari 5 artsin dedik.{} yu yazdik map den sonra  cunku object yapiyoruz



//* örnek 5 - yasi 33 un ustunde olan kisilerin name lerini listele

people.filter((kisi)=>kisi.age>33).forEach((kisi)=>console.log(kisi.name))

//* ornek6  people dizisine yeni objekt veri ekle

people.push({name:'Ali',surname:'Kaya',job:'developer',age:50})
console.log(people);



//* örnek6 - her elemanin name ini buyuk harfle yazdir, yaslarini 2 kat yap, mesleklerinin onune de senior yaz ve bunlari yeni bir diziye atayalim


//butun dizide degisiklik yapilacagi icin map().paranteze dikkat({}) ve bir degiskene ata baska bir diziye aktarmak icin. kalici olsun derse map icine butun parametreleri yazardik

const updatePeople= people.map((kisi)=>({
    name:kisi.name.toUpperCase(),
    age:kisi.age*2,
    job:'senior '+kisi.job// concat da yapilabilir



}))
console.log(updatePeople);

//* ornek7- Developer olanlarin adlarini ve yaslarini yeni bir object olarak saklayin

const yeni= people.filter((kisi)=>kisi.job=='developer')//filter if gorevini yapar
    .map((kisi)=>({
        name:kisi.name,
        age:kisi.age

    }))
    console.log(yeni);

    //*ornek8 --ortalama yasi hesaplayiniz

   console.log(people.reduce((toplam,eleman)=>toplam+eleman.age,0)/people.length); 

   // burdaki 0 toplamin baslangic degeri=0 icin