const user = {
    name: '',
    userName: '',
    imageUrl: '',
    location: '',
    bio: '',
    setUser(githubUser) {
        this.name = githubUser.name;
        this.userName = githubUser.login;
        this.imageUrl = githubUser.avatar_url;
        this.location = githubUser.location;
        this.bio = githubUser.bio;
    }
}

export { user }


/* 
name
login
avatar_url
location
bio
*/