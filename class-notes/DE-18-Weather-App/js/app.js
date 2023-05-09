const form=document.querySelector(".top-banner form")
const input=document.querySelector(".top-banner form input")
const msgSpan=document.querySelector(".top-banner .msg")
const list=document.querySelector(".cities")


//location(ayni isimde baska bir ulkede sehir varsa yanlis sehir gelmesin diye location ekleyelim.)
const locate=document.getElementById("locate")


//language
const clearAllButton=document.getElementById("clear-all")
langButton=document.getElementById("lang")



let units="metric"  //imperial(f) g
let lang="en"

let url; // api url.bunu bos tanimliyoruz cunku asagida iki durumda kullanacagiz.1-submit ile kullanicidan almak.2-kullanicinin locationini kullanarak almak
let cities=[]  //sorgulanan sehirleri tutacak
// const apiKey = "15d5ebe5cb320007963e8c229c7d55c8"; //Açık veri (Plain Text)

//  localStorage.setItem( //sessionStorage de aynı şekilde kullanılabilir
//     "apiKey",
//  EncryptStringAES("15d5ebe5cb320007963e8c229c7d55c8")
//  );  // Şifreli veri (Chipher Text)


  const apiKey = DecryptStringAES(localStorage.getItem("apiKey"))

//   console.log(apiKey)

locate.addEventListener("click", () => {
  navigator.geolocation?.getCurrentPosition(({ coords }) => {
    // console.log(coords);
    const { latitude, longitude } = coords;
    url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}&lang=${lang}`;
    getWeatherDataFromApi();
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault(); // her bastigimizda refresh yapmasin diye veriyoruz

  if (input.value) {

    const cityName = input.value;
    // console.log(cityName)

    url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=${units}&lang=${lang}`;  

   

    // console.log(url)
    getWeatherDataFromApi();
  }
  form.reset();
});



langButton.addEventListener("click",(e)=>{
console.log(e.target.id =="de"){
    lang="de";
    input.setAttribute("placeholder",)
};
// console.log(e);

if(e.)





})



const getWeatherDataFromApi = async()=>{

    try{
const response = await fetch(url).then((response) => response.json());
// console.log(response) // fetch api dönen veri

//Data Destruction

const { main, name, weather, sys } = response; //fetch
const iconUrlAWS = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0].icon}.svg`;
const iconUrl = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`; //alternativ



//li olusturma

// eger cities icinde birsey varsa veya bossa ve ayni isim yoksa basina ekle yeni girdiyi diyoruz
if((cities.length >=0) && cities.indexOf(name)==-1){
cities.unshift(name)


const resultData = document.createElement("li");
resultData.classList.add("city");
resultData.setAttribute("id", `${name}`);
resultData.innerHTML = `<!-- <button type='button' class='single-clear-btn'>X</button>-->
        <h2 class="city-name" >
                  <span>${name}</span>
                  <sup>${sys.country}</sup>
              </h2>
              <div class="city-temp">${Math.round(main.temp)}<sup>°C</sup></div>
              <figure>
                  <img class="city-icon" src="${iconUrlAWS}">
                  <!-- <img class="city-icon" src="${iconUrl}"> -->
                  <figcaption>${weather[0].description}</figcaption>
              </figure>`;
list.prepend(resultData);   //önde gosterir her yeni girilen veriyi
// list.append(resultData);  //sonda gosterir

}else{
    //eger ki listeledigimiz sehirlerden birisini yine aratirsak bir hata mesaji yazsin ve 3 sn sonra ortadan kalksin.bunu setInterval ile fonksiyon yazarak yapiyoruz
    msgSpan.innetText =
      `You already know the weather for ${name}, Please search for another city 😉`;
      setInterval(()=>{
        msgSpan.innetText=""
      },3000)
}

//eger ki listeledigimiz sehirlerden birisi ise bir hata mesaji yazsin ve yine 3 sn sonra ortadan kalksin.bunu setInterval ile fonksiyon yazarak yapiyoruz


    }catch(error){
        msgSpan.innerText="City not found!"
        setInterval(()=>{
        msgSpan.innetText=""
      },3000)
}

    }


