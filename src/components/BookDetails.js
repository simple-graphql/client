import {useLazyQuery} from "@apollo/client";
import {getBookQuery} from "../queries/queries";

const BookDetails = () => {
  const [getBook, {loading, error, data}] = useLazyQuery(getBookQuery);
  return (
    <div id="book-details">
      <p>Output book details here</p>
    </div>
  );
};

export default BookDetails;