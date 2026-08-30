function BookCard({ book, onEdit, onDelete }) {
    return (
        <div className="col-md-4 mb-4">
            <div className="card shadow-sm">
                <div className="card-body">
                    <h5>{book.title}</h5>
                    <h6 className="text-muted">{book.author}</h6>
                    <p>{book.description}</p>
                    <button className="btn btn-sm btn-outline-primary me-2"
                        onClick={() => onEdit(book.id)}>Edit</button>
                    <button className="btn btn-sm btn-outline-danger" onClick={() =>
                        onDelete(book.id)}>Delete</button>
                </div>
            </div>
        </div>
    );
}
export default BookCard;