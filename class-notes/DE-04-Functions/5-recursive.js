// ? ====================================================
// ?              FONKSİYONLAR - RECURSIVE
// ? ====================================================

//* Kendi kendini çağıran fonksiyona recursive fonksiyon denilir.

//* Özellikle karmaşık hesaplamaların kodlamasını kolaylaştırmak için kullanılır.
//* Ancak, dikkatli kullanmak gerekir. Yoksa stack overflow hatası alınabilir.


//! sayma sayilarinin ilk 6 terim toplamini bulunuz

let toplam=0;
for (let i =1;   i<=6;  i++) {
    
    toplam=toplam+1
}

console.log("ilk 6 terim toplami..:", toplam);

//********************************************** */

//*ayni soruyu recursive ile cozelim


const toplamlar=(n)=>{
    if(n<1) {
        return n
    } else {return toplamlar(n-1) + n;
};
alert(toplamlar(12));

// 12 den baslayip n<1 e kadar gel ve n<1 yani sifir oldugu an return yap.return n yani 0 i dondur ve artik else ye gec.asagidan 12 ye kadar n-1 +n seklinde topla yaz


//* ORNEK: Girilen n. terimdeki Fibonacci sayısını  yazdıran fonksiyonu recursive olarak kodlayınız.


console.log("************ 5- RECURSION *************");

//? FIBONACCI terimleri:  0, 1, 1, 2, 3, 5, 8, 13, 21, ...
//!fibonacci dizisindeki n. terimi  bulma fonksiyonu

const fibo=(n)=>{
    if (n<2) {
        return n
    }else
    return fibo(n-1) + fibo(n-2)
}

console.log(fibo(6));