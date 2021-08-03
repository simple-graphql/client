import {graphql} from "@apollo/client/react/hoc";
import {getAuthorsQuery} from "../queries/queries";

const AddBook = props => {

  const displayAuthors = () => {
    if (props.data.loading) {
      return (<option disabled>Loading Authors...</option>)
    }
    return props.data.authors.map(author => {
      return (<option key={author.id} value={author.id}>{author.name}</option>)
    })
  }

  return (

    <form id="add-book">
      <div className="field">
        <label htmlFor="">Book name:</label>
        <input type="text"/>
      </div>
      <div className="field">
        <label htmlFor="">Genre:</label>
        <input type="text"/>
      </div>
      <div className="field">
        <label htmlFor="">Author:</label>
        <select>
          <option disabled>Select Author</option>
          {displayAuthors()}
        </select>
      </div>
      <button>+</button>
    </form>

  );
}

export default graphql(getAuthorsQuery)(AddBook);