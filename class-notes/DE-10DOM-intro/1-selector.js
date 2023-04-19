//* ======================================================
//*                   GETELEMENTBYID()
//* ======================================================

//* example1 (button style)

const buton= document.getElementById("btn") // once cagiriyoruz neyi degistireceksek
// onu bir degiskene atiyoruz

buton.style.width='200px'
buton.style.height='80px'
buton.style.fontSize='40px'
buton.style.color='yellow'
buton.style.backgroundColor='red'




//*example2  (paragraf style)

const paragraf= document.getElementById('par')


paragraf.style.backgroundColor='gray'
paragraf.style.color='orange'
paragraf.style.fontSize='50px'
paragraf.style.padding='5px'



//* ======================================================
//*                   GETELEMENTSBYTAGNAME()
//* tag ismiyle çağırıyoruz.aynı tag den çok olacağı için index le hangisini seçtiğimizi belirtiyoruz (HTMLCollection- Array özellikleri gösterir)
//*================================================


//*example3   (img style)

const resim= document.getElementsByTagName('img')
console.log(resim); //HTML COLLECTION

resim[0].style.width='300px'
resim[1].style.border='5px solid red'



//* ======================================================
//*                   GETELEMENTSBYCLASSNAME()
//* class ismiyle çağırıyoruz
//*======================================================


//*ornek4

const baslik= document.getElementsByClassName('H1')

console.log(baslik);//HTML COLLECTION

baslik[0].style.color='red'
baslik[1].style.textAlign='center'

//? tek tek yazdirmaktansa Array in degistirmeyen methodlarini(for, forEach, for in...) kullanablrz

for(let i=0; i<baslik.length; i++){

    baslik[i].style.color='purple'
    baslik[i].style.fontSize='50px'
}


//? yapi degisikligi yapmak istersek innerHTML kullaniriz.DOM SELECTOR(0.indis) yazan h1 etiketini DOM COK KOLAY yazan a etiketi ile degistirdim
baslik[0].innerHTML = "<a href='https://www.clarusway.com'>DOM COK KOLAY</a>";


//? innerHTML ile sadece yazida degistireblrsn.ya da butun yapiyi degstrblrsn
// baslik[1].innerHTML='NAPIYORSUN'


//? ya da textContent komutu kullaniriz sadece yazi degisikligi icin
baslik[1].textContent='IYIMISIN'


//* ======================================================
//*                  QUERYSELECTOR,QUERYSELECTORALL
//*======================================================
document.querySelector("title").textContent = "DOM MANİPULATİON 💜";

document.querySelector("#badi").style.backgroundImage =
  "linear-gradient(green,pink)";

document.querySelector(".H2").style.color = "pink";

const parag = document.querySelectorAll("p");
console.log(parag); //NodeList

parag[1].style.fontSize = "70px";


// Bir NodeList ve bir HTMLcollection hemen hemen aynı şeydir.

// Her ikisi de bir belgeden çıkarılan düğümlerin (öğelerin) dizi benzeri koleksiyonlarıdır (listeleridir). Düğümlere indeks numaraları ile erişilebilir. indeks 0'dan başlar.

// Her ikisinin de listedeki (koleksiyon) öğelerin sayısını döndüren bir uzunluk özelliği (length) vardır.


// HTMLCollection öğelerine adları, kimlikleri veya dizin numaralarıyla erişilebilir.
// baslik.namedItem("id1").style.color = "red";
//  baslik[0].style.color="red";

// NodeList öğelerine yalnızca dizin numaralarıyla erişilebilir.

// Bir HTMLCollection her zaman canlı bir koleksiyondur. Örnek: DOM'daki bir listeye bir <li> öğesi eklerseniz, HTMLCollection'daki liste de değişecektir.

// Bir NodeList genellikle statik bir koleksiyondur. Örnek: DOM'daki bir listeye bir <li> öğesi eklerseniz, NodeList'teki liste değişmez.
// getElementsByClassName()ve yöntemleri , getElementsByTagName() canlı bir HTMLCollection döndürür.

// querySelectorAll(), statik bir NodeList döndürür.
//!burada netten https://softauthor.com/javascript-htmlcollection-vs-nodelist/ adresinden göster
// Dizi Değil!
// Bir NodeList bir dizi gibi görünebilir ama öyle değildir.

// Bir NodeList içinde döngü yapabilir ve düğümlerine dizine göre başvurabilirsiniz.

// Ancak, bir NodeList'te push(), pop() veya join() gibi Array yöntemlerini kullanamazsınız.
