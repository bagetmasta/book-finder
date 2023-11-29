const API_BASE_URL = "https://www.googleapis.com/books/v1";

export const fetchBookById = async (bookId) => {
  const response = await fetch(`${API_BASE_URL}/volumes/${bookId}`);
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  return response.json();
};
