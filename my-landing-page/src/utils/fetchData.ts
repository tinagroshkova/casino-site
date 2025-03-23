export const fetchData = async <T>(url: string): Promise<T | null> => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error ${response.status}: Failed to fetch ${url}`);
    }

    return await response.json();
  } catch (err) {
    console.error("Fetch error:", err);
    return null;
  }
};
