// API services base

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

interface ApiOptions extends RequestInit {
  headers?: Record<string, string>;
}

async function apiClient<T = any>(
  apiEndpoint: string,
  options: ApiOptions = {},
) {
  const url = `${BASE_URL}${apiEndpoint}`;

  const headers = {
    "Content-Type": "application/json",
    ...options.headers,
  };

  const config = { ...options, headers };
  try {
    const response = await fetch(url, config);

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      const errorMessage =
        errorData.message || `HTTP error! Status: ${response.status}`;
      throw new Error(errorMessage);
    }

    return response.json() as Promise<T>;
  } catch (err) {
    console.error("ERROR: Some internal error occurred", err);
    throw err;
  }
}

export default apiClient;
