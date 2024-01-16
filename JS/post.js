document.querySelectorAll("#post-form input").forEach((input) => {
    input.addEventListener("focus", () => {
      document.getElementById("form-alert").classList.add("d-none");
    });
  });
  let saveButton = document.getElementById("save-post")
  let titleField = document.getElementById("title");
  let descriptionField = document.getElementById("description");
  let nameField = document.getElementById("name")
  let imgField = document.getElementById("img")
  let dateField = document.getElementById("date")
  let returnButton = document.getElementById("return-post")


  const createPostObject = () => {

    let postObject = { title, description, name ,img ,imgprofile,date};
    titleField.value=""
    descriptionField.value=""
    nameField.value=""
    imgField.value=""
    dateField.value=""
    if (titleField.value && descriptionField.value && nameField.value && imgField.value && dateField.value) {
      return postObject;
    } else {
      document.getElementById("form-alert").classList.remove("d-none");
    }
  };

  const createPostInDb = async (postObject) => {
   
    let response = await fetch(
      "https://desafio30js-default-rtdb.firebaseio.com/posts/.json",
      {
        method: "POST",
        body: JSON.stringify(postObject),
      }
    );
    let data = await response.json();
    return data;
  };
  
  saveButton.addEventListener("click", async (event) => {
    event.preventDefault();
    let title = titleField.value
    let description = descriptionField.value
    let name = nameField.value
    let img = imgField.value
    let date = dateField.value

    let postObject = {title, description, name, img, date}
  
    console.log(postObject);
    let result = await createPostInDb(postObject);
    //console.log(result);
    alert("post publicado!")
    clearForm();
  });

  const clearForm=()=>{
    titleField.value=("")
    descriptionField.value=("")
    nameField.value=("")
    imgField.value=("")
    dateField.value=("")
  }
  let post_public = "https://desafio30js-default-rtdb.firebaseio.com/posts/.json";
  let usersWrapper = document.getElementById("users-wrapper");

  returnButton.addEventListener("click", ()=>{
    window.open("/index.html","_self")
  })
  
  
  
  
  
  
  
  