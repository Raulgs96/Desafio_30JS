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


  const createPostObject = () => {

    let postObject = { title, description, name ,img ,imgprofile,date};
    if (title && description && description) {
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

  });
  let post_public = "https://desafio30js-default-rtdb.firebaseio.com/posts/.json";
  let usersWrapper = document.getElementById("users-wrapper");
  
  
  
  
  
  
  
  