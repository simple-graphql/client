import {getAuthorsQuery, addBookMutation, getBooksQuery} from "../queries/queries";
import {useState} from "react";
import {useMutation, useQuery} from "@apollo/client";

const AddBook = () => {
  const authorsData = useQuery(getAuthorsQuery);
  const [addBook, { addBookData }] = useMutation(addBookMutation);
  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");
  const [authorID, setAuthorID] = useState("");

  const displayAuthors = () => {
    if (authorsData.loading) return (<option disabled>Loading Authors...</option>)
    if (authorsData.error) return (<option disabled>Error fetching data...</option>)

    return authorsData.data.authors.map(author => {
      return (<option key={author.id} value={author.id}>{author.name}</option>)
    })
  }

  const submitForm = () => {
    addBook({
      variables: {
        name,
        genre,
        authorId: authorID
      },
      refetchQueries: [getBooksQuery]
    }).then(() => {
      setName("")
      setGenre("")
      setAuthorID("-1")
    })
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
          <option disabled value={-1}>Select Author</option>
          {displayAuthors()}
        </select>
      </div>
      <button onClick={submitForm}>+</button>
    </div>
  );
}

export default AddBook;