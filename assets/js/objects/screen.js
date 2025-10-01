const screen = {
  UserProfile: document.querySelector(".card"),
  renderUser(user) {
    this.UserProfile.innerHTML = ` <div id="user">
                <img src="${user.imageUrl ?? "No profile icon 😿"}">
                <h2>${user.name ?? "No profile name 😿"}</h2>
                <p class="user-location">${
                  user.location ?? "No profile location 😿"
                }</p>
                <p class="user-bio">${user.bio ?? "No profile bio 😿"}</p>
            </div>
            `;
  },
  renderRepositories(user) {
    let repositories = "";
    user.repositories.forEach((repo) => {
      repositories += `<li><a href="${repo.html_url}" target="_blank">${repo.name}</a></li>`;
    });
    this.UserProfile.innerHTML += `<div id="user-repositories">
                                    <h3>REPOSITORIES</h3>
                                    <ul class="repositores">
                                        ${repositories}
                                    </ul>
                                </div>`;
  },
};

export { screen };

//
