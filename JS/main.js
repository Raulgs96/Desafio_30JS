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



let filterField = document.getElementById("filter-by-name");
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
});
