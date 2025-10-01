import { baseUrl } from "../variables.js";

async function getUser(inputValue) {
  const response = await fetch(`${baseUrl}/${inputValue}`);
  return response.json();
}

export { getUser };
