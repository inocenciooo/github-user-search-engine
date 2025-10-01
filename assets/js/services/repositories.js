import { baseUrl, repositoryQuantity } from "../variables.js";

async function getRepositories(inputValue) {
  const response = await fetch(
    `${baseUrl}/${inputValue}/repos?per_page=${repositoryQuantity}`
  );
  return response.json();
}

export { getRepositories };
