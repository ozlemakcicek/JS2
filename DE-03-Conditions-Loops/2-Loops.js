// * =======================================================
// *                     DÖNGÜLER
// * =======================================================

//************************ FOR ****************************

//? ornek: ekrana 10 kere merhaba yazdirin

for(let index = 1; index <= 10; index++){
    console.log(index, 'MERHABA');
}



//? 1 den N e kadr olan sayilarin toplamini bulan kodu yaz

const N = +prompt('lutfen N i giriniz');

let toplam=0
for (let i =1; i<=N;i++){
    // toplam=toplam+i 
    toplam +=i
}
console.log(toplam);


//? ÖRNEK: Dışarıdan girilen sayının Asal olup olmadığını tespit ederek sonucu yazdıran programı yazınız.

const sayi=+prompt('asallik kontrolu icin bir sayi giriniz')


let asal=true
for(let i=2; i<sayi; i++){
//?simdi asal olup olmadigini kontrol edelim.bunun icin 2 ye bolumunden kalan sifir degil ise asal,sifir ise asal degildir yaz deriz
   if( sayi % i ==0){
asal=false  //asal='asal degildir'  burde da yazi ile yazdirabiliriz
}
}
console.log(asal==true? 'asaldir' : 'asal degildir');

//? default olarak zaten true dur.aslinda yazmaya gerek yok =true ya.
//? basina !asal? seklinde yaparsak bu false ise demek
