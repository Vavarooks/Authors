import React, { useState, useEffect } from 'react';
// import ('../src/App.css');
import axios from 'axios';
import {Link} from 'react-router-dom';

const ShowAll = () => {
    const [authors, setAuthor] = useState([]);
    const [loaded, setLoaded] = useState(false);

    const deleteAuthor = (id) => {
        axios.delete(`http://localhost:9001/api/author/${id}`)
            .then(res => {
                console.log(res);

                setAuthor(authors.filter((author) => author._id !== id))
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
            <div className='container d-block mx-auto w-50 my-3 p-3' >
                <Link className="btn btn-secondary" to={'/author/add'}>Add Author</Link>
                <div className="row row-cols-2">
                    <div className="col-sm-8">
                        {loaded && authors.map((author, key) =>
                            <div key={key}>
                                <div className="card">
                                    <div className="card-body">
                                        <h3 className="card-title">Author Name: <Link to={`/author/${author._id}`}>{author.name}</Link></h3>
                                        <Link className='btn btn-warning' to={`/author/update/${author._id}`}>Edit</Link>
                                        <button className='btn btn-danger' onClick={() => deleteAuthor(author._id)}>Delete</button>
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

export default ShowAll;
