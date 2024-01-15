/*construye un objeto del tipo searchParams, que contiene todos los parámetros que pasamos en la url*/
const urlParams = new URLSearchParams(window.location.search);

console.log(urlParams);

/*extraemos un parámetro específico y lo guardamos en una variable*/
const charId = urlParams.get("charId");

console.log(charId);

const getCharById = async (charId) => {
  let response = await fetch(
    `https://desafio30js-default-rtdb.firebaseio.com/posts/${charId}/.json`
  );
  let data = await response.json();
  let {title , img , name, description, date} = data;
  /*insertar datos en el contenido de la pagina */
  let imagentop=document.getElementById("imagentop")
  imagentop.src=img;
  document.getElementById("titulo").innerText = title;
  document.getElementById("autor").innerText = name;
  document.getElementById("descripcion").innerText = description;
  document.getElementById("fecha").innerText = date;
  
  console.log(data);
};
getCharById(charId);
