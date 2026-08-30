import { useEffect, useState } from "react";
import { getBooks, createBook, updateBook, deleteBook, getBook } from
    "../api/bookService";
import BookCard from "../components/BookCard";
import BookForm from "../components/BookForm";

function LibraryPage() {
    const [books, setBooks] = useState([]);
    const [editingBook, setEditingBook] = useState(null);

    const loadBooks = async () => {
        const { data } = await getBooks();
        setBooks(data);
    };

    useEffect(() => { loadBooks(); }, []);

    const handleSaveBook = async (bookData) => {
        if (editingBook) {
            await updateBook(editingBook.id, bookData);
            setEditingBook(null);
        } else {
            await createBook(bookData);
        }
        loadBooks();
    };

    const handleEdit = async (id) => {
        const { data } = await getBook(id);
        setEditingBook(data);
    };

    const handleDelete = async (id) => {
        await deleteBook(id);
        loadBooks();
    };

    return (
        <div>
            <h2>My Library</h2>
            <BookForm editingBook={editingBook} onSave={handleSaveBook}
                onCancel={() => setEditingBook(null)} />
            <div className="row mt-4">
                {books.map(book => (
                    <BookCard key={book.id} book={book} onEdit={handleEdit}
                        onDelete={handleDelete} />
                ))}
            </div>
        </div>
    );
}
export default LibraryPage;