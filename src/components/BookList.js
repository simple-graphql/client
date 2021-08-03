import {gql} from "@apollo/client";
import {graphql} from "@apollo/client/react/hoc";

const getBooksQuery = gql`
  {
    books {
      name
      id
    }
  }
`

const displayBooks = (data) => {
  if (data.loading) {
    return (
      <div>Loading Books...</div>
    )
  }
  return data.books.map(book => {
    return (
      <li key={book.id}>{book.name}</li>
    )
  })
}

const BookList = (props) => {
  return (
    <div>
      <ul id="book-list">
        {displayBooks(props.data)}
      </ul>
    </div>
  );
}

export default graphql(getBooksQuery)(BookList);
