const screen = {
  userProfile: document.querySelector(".card"),
  userActivity: document.querySelector(".activity"),
  renderUser(user) {
    this.userProfile.innerHTML = ` <div id="user">
                <img src="${user.imageUrl ?? "No profile icon 😿"}">
                <h2>${user.name ?? "No profile name 😿"}</h2>
                <h4>${user.userName}</h4>
                <p class="user-location">${user.location ?? "No profile location 😿"
      }</p>
                <p class="user-bio">${user.bio ?? "No profile bio 😿"}</p>
                <div class= "user-social">
                  <p>👥 Followers: <span>${user.followers}</span></p>
                  <p>👀 Following: <span>${user.following}</span></p>
                </div>
            </div>
            `;
  },
  renderRepositories(user) {
    let repositories = "";
    user.repositories.forEach((repo) => {
      repositories += `<li><a href="${repo.html_url}" target="_blank">${repo.name}</a></li>`;
    });
    this.userProfile.innerHTML += `<div id="user-repositories">
                                    <h3>REPOSITORIES</h3>
                                    <ul class="repositores">
                                        ${repositories}
                                    </ul>
                                </div>`;
  },
  renderActivity(user) {
    let activity = "";
    user.activity.forEach((act) => {
      if (act.type === "PushEvent") {
        activity += `<li>
                        <p class="repo-name">${act.repo.name}<p/>
                        <p>${act.payload.commits[0].message}</p>
                      </li>`;
      } else if (act.type === "CreateEvent") {
        activity += `<li>
                  <p class="repo-name">${act.repo.name}</p>
                  <p>No commit message.</p>
                </li>`;
      }
    });
    this.userActivity.innerHTML = `         
                    <div>
                      <h4>Activity</h4>
                    <ul>
                      ${activity}
                    </ul>
                  </div>    
             `;
  },
};

export { screen };

// type PushEvent CreateEvent

//repo.name

//payload.commits[0].message
