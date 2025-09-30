const screen = {
  UserProfile: document.querySelector(".card"),
  renderUser(user) {
    this.UserProfile.innerHTML = ` <div id="user">
                <img src="${user.imageUrl ?? "No profile icon 😿"}">
                <h2>${user.name ?? "No profile name 😿"}</h2>
                <p class="user-location">${user.location ?? "No profile location 😿"}</p>
                <p class="user-bio">${user.bio ?? "No profile bio 😿"}</p>
            </div>
            `;
  },
  renderRepositories(user) {
    const repositories = '';
    user.repositories.forEach(repo => {
      repositories += `<li><a href="${user.repositories.html_url}">${user.repositories.name}</a></li>`
    });
    console.log(repositories)
  }
};


export { screen };


/*
name
html_url
*/