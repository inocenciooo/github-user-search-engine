const user = {
  name: "",
  userName: "",
  imageUrl: "",
  location: "",
  bio: "",
  followers: "",
  following: "",
  repositories: [],
  activity: [],
  setUser(githubUser) {
    this.name = githubUser.name;
    this.userName = githubUser.login;
    this.imageUrl = githubUser.avatar_url;
    this.location = githubUser.location;
    this.bio = githubUser.bio;
    this.followers = githubUser.followers;
    this.following = githubUser.following;
  },
  setRepositories(repositories) {
    this.repositories = repositories;
  },
  setActivity(activity) {
    this.activity = activity;
  },
};

export { user };

/* 

*/
