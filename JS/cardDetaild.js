/*construye un objeto del tipo searchParams, que contiene todos los parámetros que pasamos en la url*/
const urlParams = new URLSearchParams(window.location.search);

console.log(urlParams);

/*extraemos un parámetro específico y lo guardamos en una variable*/
const charId = urlParams.get("charId");

console.log(charId);

const getCharById = async (charId) => {
  let response = await fetch(
    `https://desafio30js-default-rtdb.firebaseio.com/.json?${charId}`
    
  );
  let data = await response.json();
  let { name } = data;
  document.getElementById("name").innerText = name;
  console.log(data);
};
getCharById(charId);
