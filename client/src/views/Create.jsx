import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {Link} from 'react-router-dom';

const Create = (props) => {
    // const {id} = useParams();
    const [authors, setAuthor] = ([]);
    const [name, setName] = useState("");
    const [loaded, setLoaded] = useState(false);
    const { removeAuthor } = props;

    const formHandler = () => {
        const newAuthor = {
            name: name
        }
        newAuthorApi(newAuthor)
        setName("")
    }

    const newAuthorApi = (author) => {
        axios.post("http://localhost:9001/api/author/create", author)
            .then(res => {
                addAuthorToAuthor(res.newAuthor)
            })
            .catch(err => console.log(err))
    }

    const addAuthorToAuthor = (author) => {
        setAuthor([...authors, author]);
    }

    useEffect(() => {
        axios.get("http://localhost:9001/api/author")
            .then(res => {
                console.log(res.data);
                setAuthor(res.data);
            })
            .catch(err => console.log(err))

    }, [])

    const deleteAuthor = (id) => {
        axios.delete(`http://localhost:9001/api/author/${id}`)
            .then(res => {
                removeAuthor(id)
                console.log(res);
            })
            .catch(err => console.error(err));
    }

    useEffect(() => {
        axios.get("http://localhost:9001/api/author")
            .then(res => {
                console.log(res.data);
                setAuthor(res.data);
                setLoaded(true);
            })
            .catch(err => console.log(err))

    }, [])

    return (
        <>
            <div className="card d-block mx-auto w-50 my-3 border p-3">
                <label className="form-label">Author Name </label>
                <input className="form-control" type='text' value={name} onChange={e => setName(e.target.value)} />
                <br />
                <button className='btn btn-secondary' onClick={formHandler}> Submit </button>
            </div>
            <div className='container d-block mx-auto w-50 my-3 p-3'>
                <div className="row row-cols-2">
                    <div className="col-sm-8">
                        {loaded && authors.map((author, key) =>
                            <div key={key}>
                                <div className="card">
                                    <div className="card-body">
                                        <h3 className="card-title">Product Name: <Link to={`/author/${author._id}`}>{author.title}</Link></h3>
                                        <h5 className="card-subtitle mb-2 text-muted">$ {author.price}</h5>
                                        <p className="card-text">Description: {author.description}</p>
                                        <Link className='btn btn-warning' to={`/author/update/${author._id}`}>Edit</Link>
                                        <button className='btn btn-danger' onClick={(e) => { deleteAuthor(author._id) }}>Delete</button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Create