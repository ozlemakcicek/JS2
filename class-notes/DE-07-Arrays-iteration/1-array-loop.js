//* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//*                       ITERATION IN ARRAYS
//* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//* ======================================================
//*                     FOR LOOP
//* ======================================================
//*ÖRNEK: dizi1 arrayindeki pozitif sayılarla negatif sayıları 2 ayrı array de toplayan function yazınız


const dizi1=[-5, 15, 22, -4, 45, 79, -54]

const negatifler1=[]
const pozitifler1=[]

const dizilereAyir1=()=>{ //istedigin ismi yazabilirsin buraya dizi yazdik

for(let i=0; i < dizi1.length;i++){

    if(dizi1[i]<0){
        negatifler1.push(dizi1[i])//basina da ekleyebilirsin unshift ile
    }else pozitifler1.push(dizi1[i])
}
console.log(negatifler1);
console.log(pozitifler1);


}
dizilereAyir1()



//*************** FOR IN ************** */


const dizi2 = [-5, 15, 22, -4, 45, 79, -54];

const negatifler2 = [];
const pozitifler2 = [];

const dizilereAyir2 = () => {
  //istedigin ismi yazabilirsin buraya dizi yazdik

  for (let i in dizi2) {
    if (dizi2[i] < 0) {  
      negatifler2.push(dizi2[i]); //basina da ekleyebilirsin unshift ile
    } else pozitifler2.push(dizi2[i]);
  }
  console.log(negatifler2);
  console.log(pozitifler2);
};
dizilereAyir2();



//*************** FOR OF ****************** */


const dizi3 = [-5, 15, 22, -4, 45, 79, -54];

const negatifler3 = [];
const pozitifler3 = [];

const dizilereAyir3 = () => {
  //istedigin ismi yazabilirsin buraya dizi yazdik

  for (let i of dizi3) {
    if (i < 0) {
      negatifler3.push(i); //basina da ekleyebilirsin unshift ile
    } else pozitifler3.push(i);
  }
  console.log(negatifler3);
  console.log(pozitifler3);
};
dizilereAyir3();

//** */======================================================\\*                   FOR IN LOOP\\* ======================================================\\*-------------------------------------------------------\\* SORU: Bir hayvanat bahçesinde bulunan hayvan türlerinin\\* bir dizide saklandığını varsayalım.Bu hayvanları türüne\\* göre aramamızı sağlayacak ve o türden kaç adet bulunduğunu\\*  ana programa döndürecek fonksiyonu yazınız. \\*--------------------------------------------------------

const animal=["fil", "aslan", "deve","fil", "kaplan","fil","deve", "aslan", "aslan", "aslan"]



const userAnimal=prompt('lutfen bir hayvan adi giriniz')
//fonksiyonu yaz
const findAnimal=()=>{

let sayac=0;
for(let i in animal){

if(animal[i]==userAnimal)
    sayac++

}

return sayac==0?'bu hayvandan bulunmamaktadir':`${userAnimal} hayvanindan ${sayac} adet bulunmaktadir`


}
alert(findAnimal()) ///fonksiyonu yaz hemen altta da cagir\
//! global de tanımlanan değişkenleri fonksiyon içinde kullanacaksam, fonksiyona parametreyle göndermem zorunlu değildir, zaten süslü içinden globaldekilere erişebilirim, parametre ile göndereceksem de, fonksiyon içinde onlara farklı isim takabilirim yani animal dizisini gönderip a diye karşılayıp, fonksiyon içinde a ismiyle kullanabilirim



//* ======================================================
//*                   FOR OF LOOP
//* ======================================================

//* for of dongusu, for in dongusunun bir cok veri yapisini kapsayacak sekilde guncellenmis halidir. Bu dongude dizi icindeki veriye erisirken indisleme kullanmaya gerek yoktur.

//* ORNEK: alttaki dizinin elemanlarını yanyana string olarak yazdır (for of döngüsü kullanın)

const arabalar = ["BMW", "Mercedes", "Audi", "volvo"];
let araba=""


for(let item of arabalar){
   araba+=item // bos kutu olustur disarda ve ekle buna surekli 

   
}
console.log(araba);




//! 2.Yol
// const araba=arabalar.join('')
// console.log(araba);


//! for loop=> Bir dizi üzerinde iteration yapmanın orjinal yollarından biridir.	
//? forEach=> Bir dizi üzerinde iteration yapmak için daha az kod içeren daha yeni bir yoldur.
//! for loop=>Performansta daha hızlıdır.	
//? forEach=> Performansta geleneksel döngüden daha yavaştır.
//! for loop=> Break ifadesi döngüden çıkmak için kullanılabilir.	
//? forEach=> Break ifadesi, geri arama işlevi nedeniyle kullanılamaz.