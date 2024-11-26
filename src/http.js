export async function fetchFoodItems() {
  const response = await fetch("http://localhost:3000/meals");
  const resData = await response.json();

  return resData;
}

export async function fetchOrderRequest(data) {
  const response = await fetch("http://localhost:3000/orders", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ order: data }),
  });
  const resData = await response.json();

  return resData;
}
