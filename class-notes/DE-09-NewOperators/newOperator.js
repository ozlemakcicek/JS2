//* ======================================================


//* ======================================================
//*    NEW GENERATION OPERATORS: DESTRUCTURING (OBJECT)
//* ======================================================

const car={
    title:'BMW',
    model:1990,
    engine:1.6

}

const carr = {
  title: "BMW",
  model: 1990,
  engine: 1.6,
};

//* 1.Klasik yol

console.log(car.title);
console.log(car['model']);


//* 2.yol   Destructuring(kisa yol.tek satirda istedigklerini alip gelirsin)

const{title,model}=car// once ortaliga saciyorz.sonra asagida cagiriyoruz
console.log(title,model); // =car deyince ilk obj.i algilar

console.log(title,model,car.engine);// yukarida engine i ortaliga sacmadik ama burda cagrmak istersek boyle yazyrz


//*NESTED OBJECT example:

const arabalar = {
  car1: {
    marka: "BMW",
    model: 1990,
    renk: "red",
  },
  car2: {
    marka: "MERCEDES",
    model: 1980,
    renk: "white",
  },
  car3: {
    marka: "AUDI",
    model: 2000,
    renk: "gray",
  },
};

console.log(arabalar.car1.marka);//klasik hal

const{ car1,car2,car3}=arabalar

console.log(car1);
console.log(car1.marka);

const{marka,renk}=car1
console.log(marka);


// eger hem car1 hem car 2 nin marka ve renk istersek onu da ortaya sacmamiz lazim

const{marka:marka2,renk:renk2}=car2
console.log(marka2);

//! car1 için marka model ismini kullandık, o yüzden car2 de yeni isimler verdik
// farkli isim verelim object i olustururken dersek burda yeni isim vermeye gerek olmazdi ama  bu seferde for in ile donerken taniyamazdi farkli ismi.
// obje icinde obje cok hos olan bir durum degil .bu yontemi kullanmak zor olur ama dizilerde cok ise yarar



//*** object-object gezinme*/ */

for(let i in arabalar){
    console.log(arabalar[i].marka);
}


//* ornek: Array-Object gezinme-DEST

//* ornek: Array-Object gezinme-DEST
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
  },
];

people.forEach((kisi)=>{

    //klasik yol
// console.log(kisi.name);
// console.log(kisi.surname);
// console.log(kisi.job);
// console.log(kisi.age);


const{name,surname,job,age}=kisi// bu kisi dizinin icindeki objelerin herbiri.i gibi yani
// console.log(name,surname,job,age);
console.log(name);
console.log(surname);
console.log(job);
console.log(age);
})

//?? Fonksiyonlar object parametreleri destructuring yapabilir.2 yolu var

// fonksiyonu yaz asagida da cagir.degiskene tanimla onu cagir

const check=(veri)=>{
// console.log(veri); // asagidaki obje nin hepsini gosterir
// console.log(veri.adi); // tek bir sey secersen boyle goreblrsn
// console.log(veri.renk);


const{adi,renk,yildiz}=veri  // isimler herhangi birsey olabilir.asagidaki yolda bu kismi yazmiyoruz
console.log(adi);
console.log(renk);


}
const data={adi:'GS', renk:'sari-kirmizi', yildiz:4}
check(data)



//? 2.yol.bu daha tercih edilir
// daha gelir gelmez suslu icinde sacalim ortaya

const check2 = ({adi,renk,yildiz}) => { // isimler asagidaki ile ayni olmali
  
console.log(adi);
console.log(renk);


}
const data2 = { adi: "FB", renk: "sari-lacivert", yildiz: 3 };
check(data2);




//*======================================================
//*   NEW GENERATION OPERATORS: SPREAD OR REST (...)
//* ======================================================

//? ------------------------------------------------------
//?  REST =>>[...name]=diziden (ya da object den) alınmayan, geri kalanları yeni bir (diziyse) diziye,(object se)object e atıyor
//? ------------------------------------------------------

//! 1- Bir dizi veya object'deki bazi degerlerden geri kalanlarini
//!    ayri dizi yada objelere kopyalanmasini saglayabilir.

//*REST OBJECT***************************************


const personel={
    pName:'Johny',
    surname:'DEEP',
    job:'actor',
    age:55
}


const{pName,age, ...gerisi}=personel
console.log(pName);
console.log(personel.job);
console.log(gerisi);// kalanlari ayri dizi v.y objelerde kopyalar-saklar

console.log(gerisi.job,personel.job);


//**    OBJECT KOPYA     */
// tamamini kopyalamak istersek;
// const ikizKpyalama=personel  desek bu gercek bir kopyalama olmaz.ikizi gibi olur.yapilan degisklik ikisini de degistirir.biz orginali kalsin yeni bir copya olusturalim istiyoruz


//? orginal dizi ile ayni sartlarda bir kopya olusturma
const ikizPersonel=personel;


//? orginalden farkli bir kopya olusturma

const{...personel2}=personel  // 0 den sonra kimi kopyalayacaksak onu yazalim
console.log(personel2);



//**** KOPYAYA EKLEME  yapalim */


//! orginal diziden farkli bir kopya olusturdugumuz icin, bu kopyaya yapilan degisiklik orginal diziyi bozmaz */

personel2.age=45

console.log(personel);
console.log(ikizPersonel);
console.log(personel2);



//*** */

//! orjinal diziyle aynı şartlarda bir kopya oluşturduk, bu yüzden kopyada yapılan değişiklik orjinal diziyi de etkiledi */

ikizPersonel.age=100
console.log(personel);
console.log(ikizPersonel);
console.log(personel2);
























//ornek2

const show=(name,surname,...title)=>{
    console.log(title);
    console.log(name);
    console.log(surname);


    console.log(`${name} ${surname} is a ${title.join(' and ')}`);
}

show('özlem','akcicek','developer','mom','chemist','teacher')



//? ------------------------------------------------------
//?  SPREAD==>> parçala (yapısını boz)-> istenilen diziye ekle,içinde gezin vs
//? ------------------------------------------------------

const fahrzeug = [ 'Flugzeug','Hubschrauber','Fahrrad']

const autos = ['Tracktor','Bus','Car','SUV']

console.log([fahrzeug,autos]);
console.log(fahrzeug.concat(autos));

console.log([...fahrzeug, 'otobus',...autos, 'tir']);


//********************* */

const personel3 = {
  pName: "Johny",
  surname: "DEEP",
  job: "actor",
  age: 55,
};

const yeni={... personel3,job:'father',location:'usa'}//spread
console.log(yeni);

// bunun uzun hali asagidaki.sadece bir elemani degistirip digerlerinin hepsi ayni kalsin dersek hepsini tek tek yazmak lazim.


// const yeni2={pName:personel3.pName, surname:personel3.surname, age:personel3.age, job:'father'}

// console.log(yeni2);


//?????????????????????????????

//* rest ve spread farki
const{...personel5}=personel // rest(kopyalama yapar)
const yeniiii={... personel3,job:'father',location:'usa'}//spread( kopya olusturup ustune ekleme yapar)


//*Objects(DE-08) file indaki örnegi spread yontemi ile yapalim

//* Ornek4 people (object li ) dizisinden yaşları değişmiş olarak yeni bir object li dizi oluşturalım
const insanlar = [
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
  },
];

const yeniPeople = insanlar.map((kisi) => ({
  name1: kisi.name,
  surname1: kisi.surname,
  job1: kisi.job,
  age1: kisi.age + 5,
}));

yeniInsan=insanlar.map((kisi)=>({
    ...kisi,age:kisi.age+5

}))
console.log(yeniInsan);