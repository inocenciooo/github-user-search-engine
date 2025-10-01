import  { baseUrl, activityQuantity } from "../variables.js"

async function getUserEvents(inputValue) {
  const response = await fetch(
    `${baseUrl}/${inputValue}/events?per_page=${activityQuantity}`);
  return response.json();
}

export { getUserEvents };
