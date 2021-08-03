import {gql} from "@apollo/client";
import {graphql} from "@apollo/client/react/hoc";

const getAuthorsQuery = gql`
  {
    authors {
      name
      id
    }
  }
`

const displayAuthors = (data) => {
  if (data.loading) {
    return (<option disabled>Loading Authors...</option>)
  }
  return data.authors.map(author => {
    return (<option key={author.id} value={author.id}>{author.name}</option>)
  })
}


const AddBook = (props) => {
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
          {displayAuthors(props.data)}
        </select>
      </div>
      <button>+</button>
    </form>

  );
}

export default graphql(getAuthorsQuery)(AddBook);