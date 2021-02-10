document.addEventListener('DOMContentLoaded', (event) => {
  if (event) {
    console.info('DOM loaded');
  }

// UPDATE
const devouredBtn = document.querySelectorAll(".change-devoured");

// Set up the event listener for the create button
if (devouredBtn) {
  devouredBtn.forEach((button) => {
    button.addEventListener("click", (e) => {
      // Grabs the id of the element that goes by the name, "id"
      const id = e.target.getAttribute("data-id");

      fetch(`/api/burgers/${id}`, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },

        body: JSON.stringify(),
      }).then((response) => {
        if (response.ok) {
          location.reload("/");
        } else {
          alert("something went wrong!");
        }
      });
    });
  });
}

// CREATE
const addBurgerBtn = document.getElementById("addBurger");


  addBurgerBtn.addEventListener("click", () => {
    console.log('clicked');

    const newBurger = {
      burger_name: document.getElementById("ca").value.trim(),
    };
    console.log(newBurger);
    // Send POST request to create a new quote
    fetch("/api/burgers", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },

      // make sure to serialize the JSON body
      body: JSON.stringify(newBurger),
    }).then(() => {
      // Empty the form
      document.getElementById("ca").value = "";

      // Reload the page so the user can see the new quote
      console.log("Burger added!");
      location.reload('/');
    });
  });


// DELETE
const deleteBurgerBtns = document.querySelectorAll(".devour-burger");

// Set up the event listeners for each delete button
deleteBurgerBtns.forEach((button) => {
  button.addEventListener("click", (e) => {
    const id = e.target.getAttribute("data-id");

    // Send the delete request
    fetch(`/api/burgers/${id}`, {
      method: "DELETE",
    }).then((res) => {
      console.log(res);

      // Reload the page
      location.reload();
    });
  });
});
});