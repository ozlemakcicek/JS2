//* ======================================================
//*          OOPS- Object Constructor (ES5)
//* ======================================================

//*Object Constructor
//* Javascript is a prototype-based language.
//* Tüm JavaScript nesneleri, bir prototipten (ilk örnek)özellikleri ve yöntemleri devralır (inherit)
//* Object prototipi, prototip miras zincirinin en üstündedir.(Hz. Adem)
//* For example, Date and Array objects,   Object prototype den devralır

//* Object Constructor
//! Book ismi büyük harfle,constructor olduğu biz tarafından anlaşılsın diye. anne karnında bebek var doğarsa değeri olur (üstte constructor anne karnındaki bebek, altta book1 oluşturmak=bebeğin doğması)
//!arrow function this keyword unu desteklemediği için burada function decleration yazımını tercih ettik

function Book(a, b, c) {
  (this.author = b),
    (this.title = a),
    (this.year = c),
    (this.özetFunction = function () {
      return `${this.title} kitabını ${this.year} yılında ${this.author} yazmıştır`;
    });
}
//? new keyword ü  Book Constructor ı parametrelerle çağırır.
//? Constructor, Book object in bir örneğini kalıbını oluşturur.
//? Constructor daki tüm variablelar ve functionlar, oluşturulan her  single örneğe (instance) eklenir

const book1 = new Book("karamazov kardesler", "Dostyevski", 1980);
const book2 = new Book("Nutuk", "Ataturk", 1925);

console.log(book1);
console.log(book2.özetFunction());
console.log(book2);

//!kalıp ta prototype alanına ulaşmak için alttaki gibi bir syntax kullanılır
//*Book un prototype alanına yeni bir parametre ekledik ama bellekte yer kaplamaz, ihtiyaç olunca child lar kullanır
Book.prototype.tür = "roman";
Book.prototype.yilHesapla = function () {
  return 2023 - this.year;
};

//?prototype book2 de yer kaplamadı ama çağırınca geldi
console.log(book2.yilHesapla());
console.log(book1.tür);

//*__proto__ keywordüyle yapılan değişiklik hala arka planda durur ve bellekte yer kaplamaz, birinin proto sunda yapılan değişiklik her child ı etkiler
book2.__proto__.tür = "hikaye";
console.log(book2.tür);

//?direk object lerime açıktan bir value eklemek istersem, bellekte yer kaplar, alttaki gibi yazılır
book1.fiyat = 100;

console.log(book1);

//!OKUL YÖNETİMİNİ HATIRLA

//?INHERİTANCE

function Dergi(title, author, year, d) {
  Book.call(this, title, author, year);

  this.mounth = d;
}

//*Book object inden (kalıbından) türetilen Dergi kalıbına, Book un prototype alanındaki bilgiler (ES5 te) direk gelmez,gelmesini istiyorsak alttaki kodu (daha child oluşturmadan önce)yazmalıyız
Dergi.prototype = Object.create(Book.prototype);

const dergi1 = new Dergi("yaprak dokumu", "resat nuri", 1980, "eylül");

console.log(dergi1);
console.log(dergi1.özetFunction());
console.log(dergi1.yilHesapla());
