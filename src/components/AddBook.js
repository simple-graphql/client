import {getAuthorsQuery} from "../queries/queries";
import {useState} from "react";
import {useQuery} from "@apollo/client";

const AddBook = () => {
  const {loading, error, data} = useQuery(getAuthorsQuery);
  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");
  const [authorID, setAuthorID] = useState("");

  const displayAuthors = () => {
    if (loading) return (<option disabled>Loading Authors...</option>)
    if (error) return (<option disabled>Error fetching data...</option>)

    return data.authors.map(author => {
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

export default AddBook;