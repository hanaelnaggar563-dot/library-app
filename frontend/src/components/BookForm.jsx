import { useState, useEffect } from "react"; 
 
function BookForm({ editingBook, onSave, onCancel }) { 
  const [title, setTitle] = useState(""); 
  const [author, setAuthor] = useState(""); 
  const [publishedYear, setPublishedYear] = useState(""); 
  const [description, setDescription] = useState("");
  const [pages, setPages] = useState("");
  
 
  useEffect(() => { 
    if (editingBook) { 
      setTitle(editingBook.title); 
      setAuthor(editingBook.author); 
      setPublishedYear(editingBook.publishedYear); 
    } else { 
      setTitle(""); setAuthor(""); setPublishedYear(""); setDescription(""); setPages("");
    } 
  }, [editingBook]); 
 
  const handleSubmit = (e) => { 
    e.preventDefault(); 
    onSave({ title, author, description, publishedYear: Number(publishedYear), pages: Number(pages) }); 
  }; 
 
  return ( 
    <form onSubmit={handleSubmit} className="card p-3 mb-4 shadow-sm"> 
      <h5>{editingBook ? "Edit Book" : "Add Book"}</h5> 
      <input className="form-control mb-2" placeholder="Title" 
value={title} onChange={(e) => setTitle(e.target.value)} required /> 
      <input className="form-control mb-2" placeholder="Author" 
value={author} onChange={(e) => setAuthor(e.target.value)} required /> 
      <input type="number" className="form-control mb-2" placeholder="Year" 
value={publishedYear} onChange={(e) => setPublishedYear(e.target.value)} 
required /> 
      <input type="textarea" className="form-control mb-2" placeholder="description" 
value={description} onChange={(e) => setDescription(e.target.value)} 
required /> 
      <input tye="number" className="form-control mb-2" placeholder="pages" 
value={pages} onChange={(e) => setPages(e.target.value)} 
required />  

      <div> 
        <button type="submit" className="btn btn-success 
me-2">Save</button> 
        {editingBook && <button type="button" className="btn btn-secondary" 
onClick={onCancel}>Cancel</button>} 
      </div> 
    </form> 
); 
} 
export default BookForm;