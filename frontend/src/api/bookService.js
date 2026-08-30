import API from "./axiosInstance"; 
 
export const getBooks = () => API.get("/books"); 
export const getBook = (id) => API.get(`/books/${id}`); 
export const createBook = (book) => API.post("/books", book); 
export const updateBook = (id, book) => API.patch(`/books/${id}`, book); 
export const deleteBook = (id) => API.delete(`/books/${id}`);