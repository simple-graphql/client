import {getBooksQuery} from "../queries/queries";
import {useQuery} from "@apollo/client";
import BookDetails from "./BookDetails";
import {useState} from "react";

const BookList = () => {
  const {loading, error, data} = useQuery(getBooksQuery);
  const [selectedBook, setSelectedBook] = useState();
  const displayBooks = () => {
    if (loading) return (<div>Loading Books...</div>)
    if (error) return (<div>Error loading books...</div>)

    return data.books.map(book => {
      return (
        <li key={book.id} onClick={() => {setSelectedBook(book.id)}}>{book.name}</li>
      )
    })
  }

  return (
    <div>
      <ul id="book-list">
        {displayBooks()}
      </ul>
      <BookDetails bookID={selectedBook}/>
    </div>
  );
}

export default BookList;
