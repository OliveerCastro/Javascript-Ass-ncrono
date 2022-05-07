/*
 * APIs - Application Progamming Interface
 * é uma forma de interligar resultados do 
 * back-end com o que é apresentado no front-end
 * acessando por URLs, Sendo comum retornar 
 * dados .json
 * 
 * O fetch consome as APIs retornando Promise
 * 
 ***********************************************/

const BASE_URL = 'https://thatcopy.pw/catapi/rest/'
const catBtn = document.getElementById('change-cat')
const catImg = document.getElementById('cat')

const getCats = async () =>{
//  sintax 1  
//  try{
//      const data = await fetch(BASE_URL);
//      const json = await data.json();
  
//      return json.webpurl;
//    }
//    catch(e){
//      console.log(e.message);
//    }
//  };

// sitaxe 2
const data = await fetch(BASE_URL)
  .then(res => res.json())
  .catch(e => console.log(e))

  return data.webpurl;
}

const loadImg = async () => {
  catImg.src = await getCats();
};

catBtn.addEventListener('click', loadImg);

loadImg();