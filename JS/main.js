


/*let postEntries = [];
let post_public = "https://desafio30js-default-rtdb.firebaseio.com/posts/.json";
let usersWrapper = document.getElementById("users-wrapper");
const getAllEntries = async () => {
    let response = await fetch(`${post_public}/.json`);
    let data = await response.json();
    let transformedData = Object.entries(data).reduce((accum,current,index) => {
        return [...accum,{key:index, ...current[1] }];
    },[]);
    postEntries = transformedData;
    if (postEntries) {
        printAllEntries(postEntries);
    }
}
const createUserCard = (entryData) => {
  let { title, profile_image, name, img, date, tags, key } = entryData;
  //let resultado_tag; 
  //console.log(entryData);
  // console.log('hola soy el nuevo',resultado_tag)
  let userCol = document.createElement("div");
  userCol.classList.add("col");
  // Se agrega un addEventListener --- Ricardo
  userCol.addEventListener("click",() => {
    window.open(`views/blogView.html?entryKey=${key}`,"_blank")
  })

  let userCard = document.createElement("div");
  userCard.classList.add("card","mb-4");
  let upImage = document.createElement("img");
  upImage.classList.add("img-up");
  upImage.src = img;
  upImage.setAttribute("alt", "Foto del post");
  let userImage = document.createElement("img");
  userImage.classList.add("card-img-top","rounded-circle","img-size");
  userImage.src = profile_image;  // userData.picture.large
  userImage.setAttribute("alt", "Foto del post");
  let cardBody = document.createElement("div");
  cardBody.classList.add("card-body","text-center");
  let cardComents = document.createElement("p");
  cardComents.classList.add("card-text","text-center","pt-3","h4");
  cardComents.textContent = title;
  let divTags = document.createElement("div");
  divTags.classList.add("card-body","text-center");
  tags.forEach((tag) => {
    let cardTag = document.createElement("a");
    cardTag.classList.add("p-1","h6","ancla_tag1","rounded");
    cardTag.setAttribute("href", "#");
    cardTag.textContent = tag //`#${tag}`
    divTags.append(cardTag)
  //   resultado_tag = tag;   
  });
  // tags.forEach(function(tag) {
  //   let cardTag = document.createElement("a");
  //   cardTag.classList.add("p-1","h6","ancla_tag1","rounded");
  //   cardTag.setAttribute("href", "#");
  //   cardTag.textContent = tag
  //   divTags.append(cardTag) 
  // //   resultado_tag = tag;   
  // });
  // let cardTags = document.createElement("a");
  // cardTags.classList.add("p-1","h6","ancla_tag","rounded");
  // cardTags.setAttribute("href", "#");
  // cardTags.innerText = `#${tags[0]}`;
  // let cardTags1 = document.createElement("a");
  // cardTags1.classList.add("p-1","h6","ancla_tag1","rounded");
  // cardTags1.setAttribute("href", "#");
  // cardTags1.innerText = `#${tags[1]}`;
  // let cardTags2 = document.createElement("a");
  // cardTags2.classList.add("p-1","h6","ancla_tag2","rounded");
  // cardTags2.setAttribute("href", "#");
  // cardTags2.innerText = `#${tags[2]}`;
  // let cardTags3 = document.createElement("a");
  // cardTags3.classList.add("p-1","h6","ancla_tag3","rounded");
  // cardTags3.setAttribute("href", "#");
  // cardTags3.innerText = `#${tags[3]}`;
  let imageProfile = document.createElement("div");
  imageProfile.classList.add("row");
  let imageProfileCol= document.createElement("div");
  imageProfileCol.classList.add("col","d-flex");
  let dateTitle= document.createElement("div");
  dateTitle.classList.add("d-flex","flex-column","margin-right","mb-3");
  let cardTitle = document.createElement("h5");
  cardTitle.classList.add("card-title","m-0","h6");
  cardTitle.textContent = name;
  let cardDate = document.createElement("p");
  cardDate.classList.add("card-text","m-0","h6");
  cardDate.textContent = date;
//   let cardButton = document.createElement("a");
//   cardButton.classList.add("btn", "btn-primary");
//   cardButton.setAttribute("href", "#");
//   cardButton.innerText = "Go somewhere";
//   let checkbox = document.createElement("input");
//   checkbox.setAttribute("type", "checkbox");
//   checkbox.checked = true;
//   console.log(checkbox);
  dateTitle.append(cardTitle,cardDate)
  imageProfileCol.append(userImage,dateTitle)
  imageProfile.append(imageProfileCol)
  cardBody.append(imageProfile,cardComents,divTags);
  userCard.append(upImage, cardBody);
  userCol.append(userCard);
  return userCol;
};
const printAllEntries = (entriesArray) => {
  usersWrapper.innerHTML = "";
  entriesArray.forEach((entry) => {
    let entryCard = createUserCard(entry);
    usersWrapper.append(entryCard);
  });
};
getAllEntries();

let relevantButtom = document.getElementById("relevantButtom")
let latestButtom = document.getElementById("latestButtom")
let topButtom = document.getElementById("topButtom")

topButtom.addEventListener("click",() => {
  //console.log(postEntries)
let topCommentsArray = postEntries.sort(sortTopCriteria)
printAllEntries(topCommentsArray)

});

relevantButtom.addEventListener("click",() => {
  location.reload()
});

latestButtom.addEventListener("click",() => {
  let latestArray = postEntries.sort(sortLatestCriteria)
  console.log(latestArray)
  printAllEntries(latestArray)
})



const sortTopCriteria = (a, b) => {
  if (a.comments_count> b.comments_count) {
    return -1;
  }
  if (a.comments_count < b.comments_count) {
    return 1;
  }
  // a must be equal to b
  return 0;
};

const sortLatestCriteria = (a, b) => {
  if (a.date> b.date) {
    return 1;
  }
  if (a.date < b.date) {
    return -1;
  }
  // a must be equal to b
  return 0;
}; */


//logout
const logOut = () => {
  localStorage.removeItem("token");
  location.reload();

}

const view = () =>{
  let btnLogout = document.getElementById("btn-logout");
  let btnLogin = document.getElementById("btn-login");
  let btnCreate = document.getElementById("btn-create");
  let btnPost = document.getElementById("btn-post");

  let token = localStorage.getItem("token");
  if (token ){
    btnLogout.classList.remove("d-none");
    btnPost.classList.remove("d-none");
    btnLogin.classList.add("d-none");
    btnCreate.classList.add("d-none");
  } else {

  }
}
view()
let logOutButton = document.getElementById("btn-logout");
logOutButton.addEventListener("click", logOut);



/* let filterField = document.getElementById("filter-by-name");
filterField.addEventListener("keyup", (event) => {
  let filterAlert = document.getElementById("filter-alert");
  filterAlert.classList.add("d-none");

  let value = event.target.value;
  let filterResult = allProducts.filter((product) =>
    product.name.toLowerCase().includes(value.toLowerCase())
  );
  if (!filterResult.length) {
    filterAlert.classList.remove("d-none");
  }
  console.log(filterResult);
  printProductCards(filterResult);
}); */



/*cards */
let basedata = "https://desafio30js-default-rtdb.firebaseio.com/posts/.json";
let datosObtenidos;
const getAllCards = async (card) => {
    let response = await fetch(
      basedata,{
        method:"GET",
        body:JSON.stringify(card),
      }
    );
    let data = await response.json();
    
    let cardsArray = Object.keys(data).map((key) => ({ ...data[key], key }));
    datosObtenidos=cardsArray
    /*ya que tenemos las canciones, imprimimos todas las canciones*/
    console.log(data)
    printAllCards(cardsArray);
  };

  

  const printAllCards = (cards) => {
    console.log(cards);
    let cardslist = document.getElementById("cards-list");
    cardslist.innerHTML = "";
  
    /*Aquí convertimos las canciones de la base de datos en un array*/
    console.log(cards);

    /*iteramos en el array para crear un li por cada canción*/
    cards.forEach((card) => {
        let cardItem = createCardItem(card);
        cardslist.append(cardItem);
      });
  };

  const createCardItem=(cardData)=>{
    let { title, img, date} = cardData;
    let cardli=document.createElement("div");
    cardli.classList.add("card","mb-3")

    /* card */
    

    let picturespan=document.createElement("img")
    picturespan.src=img
    picturespan.classList.add("card-img-top")

    let divbody=document.createElement("div")
    divbody.classList.add("card-body")

    let titleSpan=document.createElement("h5")
    let titleSpanText = document.createTextNode(title);
    titleSpan.append(titleSpanText);
    titleSpan.classList.add("card-title")

    let fecha=document.createElement("p")
    fecha.textContent=date

    cardli.append(picturespan,titleSpan, fecha);
    return cardli;
  }
  getAllCards();

// FILTERS

let relevantButtom = document.getElementById("relevantButtom")
let latestButtom = document.getElementById("latestButtom")
let topButtom = document.getElementById("topButtom")
let search = document.getElementById("filter-by-name")


eventListeners ()

function eventListeners () {
  relevantButtom.addEventListener("click", relevantFuncion)
  latestButtom.addEventListener("click", lastestFunction)
  topButtom.addEventListener("click", topFunction)
  search.addEventListener(" input", searchFunction)
}




function relevantFuncion () {
  let relevantPost = datosObtenidos.filter((objeto)=>{ 
    let numberOfName = objeto.title.length;
    console.log("si sirvo relevant") 
    
    return numberOfName > 15;
    
  });
  printAllCards(relevantPost); 
} 



function lastestFunction () {
  let lastDate = datosObtenidos.sort((a, b) => new Date (b.date) - new Date (a.date));
  console.log(lastDate)
  printAllCards(lastDate)

} 

function topFunction () {
    console.log("Si sirvo TOP")
    
}

function searchFunction (e) {
  let busquedaValor = e.target.value.toLowerCase();
  console.log(busquedaValor)
}



