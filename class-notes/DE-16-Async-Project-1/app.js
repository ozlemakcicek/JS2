
//? https://www.themealdb.com/ bu siteden aliyoruz



let showList=[] //! bos bir array ac.alttaki arama olayindan datayi gorebilmek icin globale bos bir array aacip fetch ile gelen datayi bu bos arraye attik




//! ilk ekrandaki resimleri api den cekiyoruz(search meal by name)

fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
  .then((resp) => resp.json())
  .then((dataa) => {
    console.log(dataa.meals);
    // meals apideki 25 tane array elementleri.meals orda yaziyor.
    showList=dataa
    ekranaBastir(dataa.meals);
  });




   function ekranaBastir(data){

    //! ekrani temizle, hangi dizi geldiyse o basilabilsin istiyoruz
    document.querySelector(".food").innerHTML=""
    data.forEach((w) => {

     document.querySelector(".food").innerHTML+=`<div class="col-md-3 p-4 m-4">
     <p>${w.strMeal}</p>
     <img style=width:200px src=${w.strMealThumb}>
     </div>`   
    });
    
//strMeal yine apide verilen isim.w  meals larda dolasirkenki isimleri yazsin dedik
    }




    //! arama imputunda arama yapma(oninput=kullanici input elemanina her veri girisinde calis.input.value yeterli gelmez bu durumda)
    
    document.querySelector("#ara").oninput=(e)=>{

      //? e.target.value=> inputa her veri girişindeki değerleri alabilmek için kullanılır, mesela onclick te sadece e.value kullanılır, çünkü inputla işimiz bitince onclick ile inputtaki veriyi topla git
      // console.log(e.target.value);

      //*consolda api yi inceleyince gorduk target.value yazilmasini
      let veri = showList.meals.filter((a) =>a.strMeal.toLowerCase()
      .includes(e.target.value.toLowerCase()));
      console.log(veri);

      ekranaBastir(veri)
    }


    //! bayraklara tiklaninca, tiklanan bayragin yemekleri ekrana gelsin

    document.querySelectorAll(".ülke").forEach((item)=>(item.onclick=()=>{
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${item.id}`)
        .then((res)=>res.json()).then((veri)=>
        ekranaBastir(veri.meals) // objenin keyini(meals) ekrana bastir demek aslinda value yu verir
        )
    })
    );