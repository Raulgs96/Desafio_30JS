
import { getPosts } from './modulos/api.js';
import { orderData } from './modulos/orders.js';
import { renderAside } from './modulos/Aside.js';
import { tokenValidation } from './modulos/auth.js';
import { createPost, createSimplePost } from './modulos/elements.js';

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
console.log(loggedButtonsValidation);
const data = await processData();


renderAside(data, 'aside__main');
//Aside
const renderPostAside = (data) => {
  const random = Math.floor(Math.random() * data.length);
  const asidemain = document.getElementById('aside__main');
  const post = createSimplePost(data[random]);

  asidemain.prepend(post);
};

renderPostAside(data, 'aside__main');

console.log(renderPostAside);
