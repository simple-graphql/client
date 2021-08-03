import {graphql} from "@apollo/client/react/hoc";
import {getAuthorsQuery} from "../queries/queries";
import {useState} from "react";

const AddBook = props => {
  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");
  const [authorID, setAuthorID] = useState("");

  const displayAuthors = () => {
    if (props.data.loading) {
      return (<option disabled>Loading Authors...</option>)
    }
    return props.data.authors.map(author => {
      return (<option key={author.id} value={author.id}>{author.name}</option>)
    })
  }

  const submitForm = () => {
    console.log(name);
    console.log(genre);
    console.log(authorID);
  }

  return (

    <div>
      <div className="field">
        <label htmlFor="">Book name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
      </div>
      <div className="field">
        <label htmlFor="">Genre:</label>
        <input type="text" value={genre} onChange={(e) => setGenre(e.target.value)}/>
      </div>
      <div className="field">
        <label htmlFor="">Author:</label>
        <select value={authorID} onChange={(e) => setAuthorID(e.target.value)}>
          <option disabled>Select Author</option>
          {displayAuthors()}
        </select>
      </div>
      <button onClick={submitForm}>+</button>
    </div>
  );
}

export default graphql(getAuthorsQuery)(AddBook);