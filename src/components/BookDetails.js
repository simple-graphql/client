import {useQuery} from "@apollo/client";
import {getBookQuery} from "../queries/queries";

const BookDetails = (props) => {

  const {loading, error, data} = useQuery(getBookQuery, {
    variables: {
      id: props.bookID
    },
    skip: !props.bookID
  });

  const displayBookDetails = () => {
    if (!loading && props.bookID) {
      const book = data.book
      return (
        <div>
          <h2>{book.name}</h2>
          <p>{book.genre}</p>
          <p>{book.author.name}</p>
          <p>All books by this author</p>
          <ul className="other-books">
            {book.author.books.map(book => {
              return <li key={book.id}>{book.name}</li>
            })}
          </ul>
        </div>
      );
    }
    return (<div>No book selected</div>)
  }
  return (
    <div id="book-details">
      {displayBookDetails()}
    </div>
  );
};

export default BookDetails;