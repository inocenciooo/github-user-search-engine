async function getUser(inputValue) {
    const response = await fetch(`https://api.github.com/users/${inputValue}`);
    return response.json()
}

export { getUser }
