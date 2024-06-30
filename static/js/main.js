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
/**
 * 
// Show or hide children of a list
document.getElementById("categories").addEventListener("click", (event) => {
  const parent = event.currentTarget.parentElement;

  if (parent.classList.contains("expanded")) {
    parent.classList.remove("expanded");
  } else {
    parent.classList.add("expanded");
  }
});
*/
