// --- Search ---
const searchBar = document.getElementById("search");
const searchBtn = document.getElementById("search-button");
const searchBarCloseBtn = document.getElementById("close-searchbar");

const search = () => {
  if (searchBar.value.length == 0) {
    alert("Please enter something to search!");
  } else {
    alert(`You searched for "${searchBar.value}"`);
  }
};

const openSearchBar = () => {
  // Alter the classes
  if (!searchBar.classList.contains("has-expanded")) {
    searchBar.classList.add("has-expanded");
    searchBtn.classList.add("has-expanded");
    searchBarCloseBtn.classList.add("has-expanded");
  }

  // Change search button behaviour after the animation has completed
  setTimeout(() => {
    searchBtn.onclick = search;
  }, 700);
};

const closeSearchBar = () => {
  // Alter the classes
  if (searchBar.classList.contains("has-expanded")) {
    searchBar.classList.remove("has-expanded");
    searchBtn.classList.remove("has-expanded");
    searchBarCloseBtn.classList.remove("has-expanded");

    // Clear any previous inputs
    searchBar.value = "";
  }

  // Change search button behaviour
  searchBtn.onclick = openSearchBar;
};

// ---- Add To Favourites button ---
(() => {
  const buttons = document.getElementsByClassName("add-to-favourites");

  for (const btn of buttons) {
    btn.addEventListener("click", () => {
      !btn.classList.contains("favourited")
        ? btn.classList.add("favourited")
        : btn.classList.remove("favourited");
    });
  }
})();

// ---- Color selection buttons ---
(() => {
  const buttons = document.getElementsByClassName("color");

  for (const btn of buttons) {
    btn.addEventListener("click", (e) => {
      // Mark current color as the active color by replacing the previous one
      const colors = e.target.parentElement.children;

      // Mark the previously active color as inactive
      for (const color of colors) {
        color.classList.contains("active") && color.classList.remove("active");
      }

      // Set the new active color
      e.target.classList.add("active");
    });
  }
})();
