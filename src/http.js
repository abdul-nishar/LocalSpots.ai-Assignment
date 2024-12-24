export async function fetchClothingItems() {
  const response = await fetch(
    "https://localspots-ai-assignment.onrender.com/clothes"
  );
  const resData = await response.json();

  return resData;
}

export async function fetchOrderRequest(data) {
  const response = await fetch(
    "https://localspots-ai-assignment.onrender.com/orders",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ order: data }),
    }
  );
  const resData = await response.json();

  return resData;
}
