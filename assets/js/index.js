import { getUser } from "./services/user.js";
import { getRepositories } from "./services/repositories.js";
import { user } from "./objects/user.js";
import { screen } from "./objects/screen.js";

document.getElementById("button").addEventListener("click", () => {
  const inputValue = document.getElementById("search-input").value;
  getUserInfo(inputValue);
});

document.getElementById("search-input").addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    const inputValue = document.getElementById("search-input").value;
    getUserInfo(inputValue);
  }
});

async function getUserInfo(inputValue) {
  const userInfo = await getUser(inputValue);
  const userRepositores = await getRepositories(inputValue);
  
  user.setUser(userInfo);
  user.setRepositories(userRepositores)
  
  screen.renderUser(user);
  screen.renderRepositories(user)
}



