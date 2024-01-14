import { getPosts } from '../Modulos/aapi.js';
import { createPost, createSimplePost } from '../Modulos/elements';
import { renderAside } from '../Modulos/aside';
import { tokenValidation } from '../Modulos/auth.js';


// Contenido para cada card
const contentCard1 = ["Elemento 1", "Elemento 2", "Elemento 3", "Elemento 4", "Elemento 5", "Elemento 6"];
const contentCard2 = ["Elemento A", "Elemento B", "Elemento C", "Elemento D", "Elemento E", "Elemento F"];
const contentCard3 = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6"];

// Función para agregar elementos de la lista a una card
const populateCard = (cardId, listId, content) => {
  const card = document.getElementById(cardId);
  const list = document.getElementById(listId);

  content.forEach(item => {
    const listItem = document.createElement('li');
    listItem.textContent = item;
    list.appendChild(listItem);
  });

  card.appendChild(list);
};

// Llamar a la función para cada card
populateCard('card1', 'list1', contentCard1);
populateCard('card2', 'list2', contentCard2);
populateCard('card3', 'list3', contentCard3);

let loggedButtonsValidation = document.getElementById(
  'authentication-top-nav-actions'
);
loggedButtonsValidation.innerHTML = '';
loggedButtonsValidation.append(tokenValidation());

const processData = async () => {
  const dataposts = await getPosts();

  const keys = Object.keys(dataposts);

  const array = keys.reduce((accum, key) => {
    const currobj = dataposts[key];

    currobj['id'] = key;

    return [...accum, currobj];
  }, []);
  return array;
};

const data = await processData();

const main = document.getElementById('cards-main');

const renderData = (array) => {
  let count = 0;

  array.forEach((post) => {
    let isfirst = false;
    count === 0 && (isfirst = true);
    count++;

    const cardpost = createPost(post, isfirst);

    main.appendChild(cardpost);
  });

  document.getElementById('no-data').classList.add('d-none');
};

renderData(orderData(data, 'relevant'));

const cleanMain = () => {
  main.innerHTML = '';
};

const order = document.querySelectorAll('.data-item');
let orderactive = document.querySelector('.main__title__selected');
let curentdata;

order.forEach((item) => {
  item.addEventListener('click', ({ target }) => {
    if (orderactive !== item) {
      orderactive.classList.remove('main__title__selected');
      item.classList.add('main__title__selected');
      curentdata = orderData(data, target.id);

      cleanMain();
      renderData(curentdata);

      orderactive = item;
    }
  });
});

// Registrar lo que se escribe en el input
document.getElementById('search-input').addEventListener('keyup', (event) => {
  let value = event.target.value;
  let filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(value.toLowerCase())
  );
  cleanMain();
  // renderData(orderData(filteredData, 'relevant'));
  renderData(filteredData);

  const nodata = document.getElementById('no-data');

  if (value.length === 0) {
    orderactive.classList.add('main__title__selected');
  } else {
    orderactive.classList.remove('main__title__selected');
  }

  if (filteredData.length === 0) {
    nodata.classList.remove('d-none');
  } else {
    nodata.classList.add('d-none');
  }
});

renderAside(data, 'aside__main');
//Aside
const renderPostAside = (data) => {
  const random = Math.floor(Math.random() * data.length);
  const asidemain = document.getElementById('aside__main');
  const post = createSimplePost(data[random]);

  asidemain.prepend(post);
};

renderPostAside(data, 'aside__main');
