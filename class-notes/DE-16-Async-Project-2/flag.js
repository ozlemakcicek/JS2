//? api web sayfasi burasi..https://restcountries.com/
const getirülke = async (ülke) => {
  try {
    const res = await fetch(`https://restcountries.com/v3.1/name/${ülke}`);

    if (!res.ok) {
      throw new Error("url de hata var");
    }
    const data = await res.json();

    //    console.log(data[0]);
    ekranaBastir(data[0]);
  } catch (err) {
    console.log(err);
  }
};
//!1.yol
const dizi=["turkey",'USA',"canada","france"];
dizi.forEach((a)=> getirülke(a))


//!2.yol
// getirülke("Turkey");
// getirülke("canada");
// getirülke("USA");
// getirülke("france");

const ekranaBastir = (ülke) => {
  console.log(Object.values(ülke.currencies)); //[{name:...,sembol:....}]
  console.log(Object.values(ülke.currencies)[0]); //{name:...,sembol:....}
  console.log(Object.values(ülke.currencies)[0].name); //turkish liras

  // console.log(Object.values(ülke.languages));
  document.querySelector(".countries").innerHTML += `
    
     <div class="card text-start w-50 shadow-lg bg-light">
      <img src=${ülke.flags.svg}  class="card-img-top" alt="..." />
      <div class="card-body">
         <h5 class="card-title">${ülke.name.common} </h5>
         <p class="card-text"></p>
      </div>
      
      <ul class="list-group list-group-flush">
         <li class="list-group-item"><i class="fas fa-lg fa-landmark"></i> ${
           ülke.capital
         }  </li>


          <li class="list-group-item"><i class="fas fa-lg fa-comments"></i>${Object.values(
            ülke.languages
          )} </li>
          
          <li class="list-group-item"><i class="fas fa-lg fa-money-bill-wave"></i> ${
            Object.values(ülke.currencies)[0].name
          } </li>

      </ul>
   </div>
    
    `;
};

//!ekrana bastırılacak dizi elemanlarının key leri farklı farklıysa===>>
//!!!! Object.values()öğeleri, nesnede bulunan numaralandırılabilir  bir dizi döndürür, istenen nesne nin içindeki object in value larını yaz, bu value lar ,object.value sayesinde dizi içinde toplanır
//? Object.values(country.currencies)=currencies in value larını bir dizide toplar

//* TRY: nin value sini dizi yapar 0 indexli: [{name: 'Turkish lira', symbol: '₺'}]. TRY key i silinir
//* Object.values(country.languages)=languages in value larını bir dizide toplar[eng,span..] Eng key i silinir
