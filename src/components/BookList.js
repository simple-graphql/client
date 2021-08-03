import {getBooksQuery} from "../queries/queries";
import {useQuery} from "@apollo/client";

const BookList = () => {
  const {loading, error, data} = useQuery(getBooksQuery);
  const displayBooks = () => {
    if (loading) return (<div>Loading Books...</div>)
    if (error) return (<div>Error loading books...</div>)

    return data.books.map(book => {
      return (
        <li key={book.id}>{book.name}</li>
      )
    })
  }

  return (
    <div>
      <ul id="book-list">
        {displayBooks()}
      </ul>
    </div>
  );
}

export default BookList;
