class APIService {
  async fetchPosts(
    url: string,
    method: string,
    headers?: HeadersInit,
    body?: any,
  ) {
    return await request(url, method, headers, body);
  }
}

async function request(
  url: string,
  method: string,
  headers?: HeadersInit,
  body?: any,
) {
  try {
    const response = await fetch(url, {
      method,
      headers,
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error("Request failed");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Request error:", error);
    throw error;
  }
}

async function requestAuth(url: string, method: string, body?: any) {
  const token = localStorage.getItem("authToken"); // Replace with your token retrieval logic
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };

  return request(url, method, headers, body);
}

export default new APIService();
