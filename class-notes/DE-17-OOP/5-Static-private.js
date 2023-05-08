//* ======================================================
//*        OOP - Static and Private  (ES6)
//* ======================================================

//? Static degiskenler ve fonksiyonlar butun bir class'i ilgilendiren
//? verileri tutmak veya degistirmek icin elverislidir.

//?  nesnelerden bagimsiz sadece ilgili class' a ait bir degiskene
//? ihtiyac varsa o zaman static degisken kullanmak mantiklidir.

//! ENCAPSULATİON OOP'nin temel unsurlarindan birisidir.
//! Bir class icerisindeki degeri/durumu class disindan dogrudan ve
//! izinsiz erisimlere kapatmak icin kullanilir.

//! Encapsulation, private degiskenler ve private fonksiyonlar yardimiyla yapilir.
//! ES6 ve sonrasinda private degisken ve metotlari belirtmek icin
//! # (hash) kullanilir.

//! Private degiskenlere dogrudan erisilemezler. Bunlara erismek icin class
//! icerisinde tanimlanan public (genel) erisimli getter ve setter metotlar
//! kullanilir.

//! Private metotlara ise class disarisindan da erisilemez.
//! Private metotlara ancak class icerisindeki diger metotlar ile erisilebilir.

class Book {
  //!private değişken tanımlanması
  #id;
  //!static değişken tanımlaması
  static counter = 0;

  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.#id = 44;

    this.getirTitle = function () {
      return this.title;
    };
    Book.counter++;
  }

  getId() {
    return this.#id;
  }

  setId(id) {
    this.#id = id;
  }
}

const book1 = new Book("Simyaci", "Poelho Coelgo", 1988);
console.log(book1); //author: 'Poelho Coelgo', title: 'Simyaci', year: 1988,

console.log(book1.id);
console.log(book1.getId());

// book1.#id=111

book1.setId("111");
console.log(book1.getId());

console.log(Book.counter);
