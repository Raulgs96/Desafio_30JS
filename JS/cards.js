/*cards */
let basedata = "https://desafio30js-default-rtdb.firebaseio.com/posts/.json";

const getAllCards = async (card) => {
    let response = await fetch(
      basedata,{
        method:"GET",
        body:JSON.stringify(card),
      }
    );
    let data = await response.json();
    /*ya que tenemos las canciones, imprimimos todas las canciones*/
    console.log(data)
    printAllCards(data);
  };

  const printAllCards = (cards) => {
    console.log(cards);
    let cardslist = document.getElementById("cards-list");
    cardslist.innerHTML = "";
  
    /*Aquí convertimos las canciones de la base de datos en un array*/
    let cardsArray = Object.keys(cards).map((key) => ({ ...cards[key], key }));
    console.log(cardsArray);
  
    /*iteramos en el array para crear un li por cada canción*/
    cardsArray.forEach((card) => {
        let cardItem = createCardItem(card);
        cardslist.append(cardItem);
      });
  };

  const createCardItem=(cardData)=>{
    let { title, img, date, key,id} = cardData;
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
    /*botton enviar a otra pagina */
    let verMas=document.createElement("button")
    verMas.classList.add("btn", "btn-success", "detail-btn")
    verMas.setAttribute("id", key);
    verMas.dataset.charId = id;
    verMas.addEventListener("click", (event) => {
      console.log(key);
      /*este listener va a abrir la vista "char-detail"*/
      let charId = event.target.dataset.charId;
      window.open(`../views/char-detail.html?charId=${charId}`);
    })
    
    
    cardli.append(picturespan,titleSpan, fecha, verMas);
    return cardli;
  }

  let detailBtns = document.querySelectorAll(".detail-btn");

  /* a cada botón, le agregamos un listener*/
  

  
  getAllCards();