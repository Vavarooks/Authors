import React, { useState, useEffect } from 'react';
// import ('../src/App.css');
import axios from 'axios';
import {Link} from 'react-router-dom';

const ShowAll = (props) => {

    const [authors, setAuthors] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const {removeAuthor} = props;
    
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
                setAuthors(res.data);
                setLoaded(true);
            })
            .catch(err => console.log(err))

    }, [])

    return (
        <>
            {/* <p>{products.title}</p> */}
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
                                        <button className='btn btn-danger' onClick={(e)=>{deleteAuthor(author._id)}}>Delete</button>
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

export default ShowAll