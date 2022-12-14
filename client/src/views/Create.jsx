import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {Link} from 'react-router-dom';

const Create = (props) => {
    // const {id} = useParams();
    const [authors, setAuthor] = useState([]);
    const [name, setName] = useState("");

    const formHandler = () => {
        const newAuthor = {
            name
        }
        newAuthorApi(newAuthor)
        setName("")
    }

    const newAuthorApi = (author) => {
        axios.post("http://localhost:9001/api/author/create", author)
            .then(res => {
                console.log(res)
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

    return (
        <>
            <div className="card d-block mx-auto w-50 my-3 border p-3">
                <label className="form-label">Author Name </label>
                <input className="form-control" type='text' value={name} onChange={e => setName(e.target.value)} />
                <br />
                <button className='btn btn-secondary' onClick={formHandler}> Submit </button>
                <Link className='btn btn-primary' to={'/author'}>Cancel</Link>
            </div>
        </>
    )
}

export default Create