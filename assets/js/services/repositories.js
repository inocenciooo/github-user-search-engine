async function getRepositories(inputValue) {
  const response = await fetch(
    `https://api.github.com/users/${inputValue}/repos?per_page=10`
  );
  return response.json();
}

export { getRepositories };
