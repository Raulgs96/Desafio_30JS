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
    //console.log(data)
    printAllCards(cardsArray);
  };
  const printAllCards = (cards) => {
    console.log(cards);
    let cardslist = document.getElementById("cards-list");
    cardslist.innerHTML = "";
   // console.log(cards);
    /*iteramos en el array para crear un li por cada canción*/
    cards.forEach((card) => {
        let cardItem = createCardItem(card);
        cardslist.append(cardItem);
      });
  };
  const createCardItem=(cardData)=>{
    let { title, img, date, key, name,id} = cardData;
    let cardli=document.createElement("div");
    cardli.classList.add("card","mb-3", "click-redirigir")

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
    /* avatar */
    let borderUser=document.createElement("div")
    borderUser.classList.add("row")
    let colAvatar=document.createElement("div")
    colAvatar.classList.add("col-auto")
    let imgAvatar=document.createElement("img")
    imgAvatar.src="https://picsum.photos/200"
    imgAvatar.style.borderRadius = "50%";
    imgAvatar.classList.add("img-fluid")
    imgAvatar.style.width = "50px";
    imgAvatar.style.height = "50px";

    let divUSer=document.createElement("div")
    divUSer.classList.add("col")
    let nameUserText = document.createElement("b");
    let nameTextNode = document.createTextNode(name);

    nameUserText.appendChild(nameTextNode);
    
    let fecha=document.createElement("p")
    fecha.textContent=date
    /*botton enviar a otra pagina */
    let clickRedirigir=document.querySelectorAll("click-redirigir")
    clickRedirigir.forEach((item)=>{
      item.eventListeners
    })
    let verMas=document.createElement("button")
    verMas.innerText="ver"
    verMas.classList.add("btn", "btn-primary", "detail-btn")
    verMas.setAttribute("id", key);
    verMas.dataset.charId = key;
    /*evento del botton */
    verMas.addEventListener("click", (event) => {
      console.log(key);
      /*este listener va a abrir la vista "char-detail"*/
      let charId = event.target.dataset.charId;
      //window.open(`./views/char-detail.html?charId=${key}`);
      window.location.href = `./views/char-detail.html?charId=${key}`;
    })
    
    cardli.append(picturespan,titleSpan, fecha, imgAvatar,nameUserText,verMas);
    return cardli;
  }

  let detailBtns = document.querySelectorAll(".detail-btn");
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
  search.addEventListener("input", searchFunction)
}
function relevantFuncion () {
  let relevantPost = datosObtenidos.filter((objeto)=>{
    let numberOfName = objeto.title.length;
    //console.log("si sirvo relevant")
    return numberOfName > 50;
  });
  printAllCards(relevantPost);
}
function lastestFunction () {
  let lastDate = datosObtenidos.sort((a, b) => new Date (b.date) - new Date (a.date));
  //console.log(lastDate)
  printAllCards(lastDate)
}
function topFunction () {
  let relevantPost1 = datosObtenidos.filter((objeto)=>{
    let numberOfName = objeto.description.length;
    //console.log("si sirvo relevant")
    return numberOfName > 250;
  });
  printAllCards(relevantPost1);
}
function searchFunction (e) {
  let relevantPost2 = datosObtenidos.filter((objeto)=>{
    let titleText = e.target.value;
    let titleVar = objeto.title.toLowerCase();
    //console.log(titleText)
    return titleVar.includes(titleText)
})
 printAllCards(relevantPost2)
}

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
