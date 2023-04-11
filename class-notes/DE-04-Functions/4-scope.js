// ? ==========================================================
// ?                   FONKSİYONLAR-SCOPE
// ? ==========================================================
console.log("************ 4- SCOPE *************");


//! global scope

let birinci=5;
let ikinci=12;
let ucuncu=123;
console.log(birinci,ikinci,ucuncu);

const scopeDeneme=function(){
    birinci=8;
    let ikinci=45;
    console.log(ikinci);//disarda goremeyiz cunku icerde yeni bir sey tanimladik.bunu disarda gormek icin return yapmaliyiz.function larda boyle.

    let dorduncu=1234; // asagida sadece console.log(dorduncu) diyerek goremeyizbu yeni degiskeni
    return dorduncu // icerde yeni tanimladigimiz funct. ni gormek icin ancak asagida butun fonksiyonu gormeyi yazmaliyiz 
}

scopeDeneme()
console.log(birinci);
console.log(ikinci)
// console.log(dorduncu);  //gostermez
alert(scopeDeneme()); // icerde tanimladigimiz yeni degiskeni function larda return ile dondurup burda btn fonksy.lari goster deriz
//istersen alert istersen console.log seklinde yazarsin.bunu yukarida icerde return suz sadece console.log ile de yazabilirsin
console.log(ucuncu);