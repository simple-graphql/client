import {graphql} from "@apollo/client/react/hoc";
import {getBooksQuery} from "../queries/queries";

const BookList = (props) => {
  const displayBooks = () => {
    if (props.data.loading) {
      return (
        <div>Loading Books...</div>
      )
    }
    return props.data.books.map(book => {
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

export default graphql(getBooksQuery)(BookList);
