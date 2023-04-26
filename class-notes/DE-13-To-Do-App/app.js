// const todoInput = document.querySelector("#todo-input");
// const todoButton = document.querySelector("#todo-button");
// const todoList = document.querySelector("#todo-ul");

// //Event Listeners

// todoButton.addEventListener('click', addTodo);

// //Functions

// function addTodo(event){

//     //Prevent form from submitting

//     event.preventDefault();

// //TdoDiv

// const todoDiv= document.createElement('div');
// todoDiv.classList.add('todo')

// //create li

// const newTodo=document.createElement('li');
// newTodo.innerText='todoInput.value';
// newTodo.classList.add('todo-item');
// todoDiv.appendChild(newTodo);

// //Check mark button

// const completedButton=document.createElement('button');
// completedButton.innerHTML = '<i class="fa-sharp fa-solid fa-check"></i>';
// completedButton.classList.add('complete-btn')
// todoDiv.appendChild(completedButton);

// //Check trash button

// const trashButton = document.createElement("button");
// trashButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
// trashButton.classList.add("trash-btn");
// todoDiv.appendChild(trashButton);

// //Append todo

// todoList.appendChild(todoDiv)

let liste = [];
//! boş liste hem database işini kolaylaştırır, hem ul ye eklenen verinin aynısı tekrar eklenmesin demek için bütün p leri çağır içeriğinde input.value varsa ekleme, demeli ama p oluşmadan bunu diyemeyiz, bu şekilde liste dizisine eklenen veri globalde old için içeriğine (includes) her yerden bakılabilir

let total = 0;
let completed = 0;

const listeInput = document.querySelector("#todo-input");
const listeUl = document.querySelector("#todo-ul");
const listeButon = document.querySelector("#todo-button");
const toplam = document.querySelector("#toplam");


//! Add butonuna basildiginda ;
//* birkac olasilik var.1-inputun ici bosken butona basildiysa 2- ayni veri varmi listenin icinde 3-
listeButon.onclick = () => {
  if (!listeInput.value) {
    alert("lütfen bir not giriniz");

    //! input a girilen veri (Add e basınca) daha önce listeye girildiyse, tekrar girilmesin, boş dön, bu kontrolü mesela ekrandaki li leri çekerek yapamayız, çünkü includes yada forEach ler dizi de çalışır

 } else if (liste.includes(listeInput.value)) {
    return;
    /*bos return hicbirsey yapmadan dön ordan ve alt satirdan devam et demek.if de kullanilmazfonksiyonlarda kullanilir, true/false dondurur ama burasi icin boyle. */
  } else {
    liste.push(listeInput.value);
    // yukaridaki durumlar yoksa bos listeye yeni value yu push et dedik.
    total += 1;
    // liste ye cop kutusu ve tick ekleyelim

    //! ekranda listeyi ve total i goster
    listeUl.innerHTML =
      `<li class="ayse">
    <i class="fa fa-check fa-lg"></i>
    <p>${liste[liste.length - 1]}</p>
    <i class="fa fa-trash fa-lg"></i>
    </li>` + listeUl.innerHTML;
    toplam.textContent = total;

    //! backtik icindeki<p> ye alternatif;2. p ekrana basma yolu
    // <p>${listeInput.value}</p>

    listeInput.value = "";
    //? her eklemeden sonra inputun ici bosalsin istersek bu sekilde*/
    // surekli listeInput.value diyoruz.bunu en yukariya cagirirken .value ile ekleyemeyiz cunku daha value olusmamis ki cagiramayiz

    listeInput.focus();
    //?her li girisinde kursor input da kalsin diye yazilir */
  }

  //!silme metodu, ekrana basıldığı süslü de olmalı, dışarıda fa-trash lara tıklayınca, remove mantıklı değil, ortada fa-trash daha oluşmadan (add butonuna basılmadan) js ye çağırmak gibi oluyor

  // suslu icinde olusturup disinda cagiriyoruz.bu yazim hep kullanilacak
// sil ve check butonu icin 3 yol var.burda 2 sini gorecegiz.
  //? trash butonuna tıklanınca
  createSilButon()

  //?check butonuna tiklaninca
  createCheckButon()
};

const createSilButon=()=>{
  //?ul deki bütün fa-trash lara ulaş
  document.querySelectorAll(".fa-trash").forEach((a) => {
    a.onclick = () => {
      // console.log(a.parentElement);

      //!listeden silme

      // console.log(a.closest("li").querySelector("p").textContent);

      liste = liste.filter(
        (yapılacak) =>
          yapılacak != a.closest("li").querySelector("p").textContent
      );
      console.log(liste);
      // closest() birkac nesil yukari cikmak icin kullanilir.birsuru ahmetlerin arasindan ilk ahmeti alir.ortada birini istersek class ismi ile closest() yazariz.

      // querySelector() un basina document yazmadan li.querySelector gibi direkt yazablrz ama daha once cagirilmis olmali li.

      //! closest=herhangi bir elemanın istediğiniz uzaklıktaki parent ına götürür. yani a.parentElement.parentElement.parentElement ile 3. babaya ulaşabilirken closest ile 3. babanın adını yazarak direk ulaşabiliriz

      //!ekrandan silme,sadece ekrandan silersek ve sonrasinda diziyi bastirmaya kalkarsak, eleman hala dizidebulundugu icin yanlis cevap aliriz.

      a.parentElement.remove();
      total = total - 1;
      toplam.textContent = total;

      if(completed>0 && a.parentElement.classList.contains('checked')){
        completed=completed-1
        document.querySelector("#tamamlanan").textContent = completed;
      }
    };
  });
}

const createCheckButon = () => {


  //!1.yol


  //! Target özelliği, her zaman olay dinleyicisinin olayı tetiklediği öğeye başvuran currentTarget özelliğinin aksine, olayın orjinal olarak gerçekleştiği öğeyi alır .

  listeUl.onclick = (e) => {
    console.log(e.target);
     console.log(e.target.parentElement.classList);

     // if(e.target.parentElement.className=="checked"){
     // e.target.parentElement.className="ayse"

     // }else{e.target.parentElement.className="checked"}

     if (e.target.parentElement.classList.contains("checked")) {
       e.target.parentElement.classList.remove("checked");
completed=completed-1

     } else {
       e.target.parentElement.classList.add("checked");
completed = completed + 1;

     }
     document.querySelector("#tamamlanan").textContent=completed
   };

// !! classList ve className sonuç istendiğinde aynı sonucu verir tek farkla; classList bir liste, className bir isim şeklinde verir. bunun tek dezavantajı, zaten class ı olan bir elemana className="örnek" şeklinde eleman atamak istersek, varolan elemanları silip sadece örnek class ı nı atar. classList ile toggle ve contains kullanmalıyız, className ile toggle kullanamıyoruz contains yerine includes kullanmalıyız, javascriptte includes tercih edilir
}


//   //!2.yol
  //  document.querySelectorAll(".fa-check").forEach((a) => {
  //    a.onclick = () => {
 
  //       if (a.parentElement.className=="checked")
  //        {
 
  //         a.parentElement.className=""
  //         completed = completed - 1;
  //       } else {
 
  //         a.parentElement.className = "checked";
  //         completed = completed + 1;
  //       }
  //      document.querySelector("#tamamlanan").textContent = completed;
  //    };
  //  })