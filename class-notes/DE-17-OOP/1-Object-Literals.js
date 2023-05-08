//* ======================================================
//*                    (OOP)
//* Object Oriented Programming
//* ======================================================

//*object literals

const book1 = {
  title: "Karamazov Kardesler",
  yazar: "Dostyevski",
  year: 1980,

  özetFunction: function () {
    console.log(
      `${this.title} kitabını ${this.year} yılında ${this.yazar} yazmıştır`
    );
  },
};
console.log(book1);
book1.özetFunction();

const book2 = {
  title: "Yaprak Dokumu",
  yazar: "Resat Nuri",
  year: 1950,

  özetFunction: function () {
    console.log(
      `${this.title} kitabını ${this.year} yılında ${this.yazar} yazmıştır`
    );
  },
};
console.log(book2);
book2.özetFunction();

//? object literals yöntemi ile fazla sayıda yeni  Object ler oluşturmak oldukça zahmetlidir, ayrıca programcılık yaklaşımı açısından da çok tekrar içerdiği için uygun değildir
// DRY (Dont Repeat Yourself) Prensibi için uygun değildir
//? SOLUTION:  Object Constructor kullan (ES5 and ES6)
