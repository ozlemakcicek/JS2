//! JS de export-import olayi

// ya herbirinin basina tek tek export yazilir.ya da cagirmak istediklerimizi tek bir export{} icine yazariz.Ya da butun bir sayfayi export etmek icin 1 tane sectigimiz bir fonksiyon onune export default yazariz.3 yontem var export ederken

// burda export edip index.js de import edelim.{} icinde karsilanir

console.log("module den selamlar");

export const CALISMA_SAATI=40  

export function topla(s1,s2){
    return s1+s2
}

let counter=0
const inc=(miktar)=>{
    counter +=miktar

return counter}


const dec=(miktar)=>{
    counter -= miktar

console.log(counter);
}


const benimAdim="Ashley"  


export{inc,dec,benimAdim}  // boyle paketle gonderince karsilarken de {} icinde paket olarak alir.ustte export ve export function ile gonderdiklerimizi de {} icinde karsilariz

//? 1 sayfada sadece 1kez export default yazilablr
export default function ugurla(){   // bunu direkt export defaiult oile gonderdigimiz icin karsilarken acik bi sekilde yazariz
    console.log("Elvedda JS hosgeldin React");
}