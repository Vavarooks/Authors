import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import {Navigate, useNavigate, useParams, Link} from 'react-router-dom';
const EditOne = (props) => {

    const {id} = useParams();
    const navigate = useNavigate();

    const [author, setAuthor] = useState({
        _id: "",
        name: "",
    })
    const [name, setName] = useState("");

    const editHandler = () => {
        const updatedAuthor = {
            name: name,
        }
        editOneAuthorApi(updatedAuthor);
        // console.log(updatedAuthor);
    }

    const editOneAuthorApi = (author) => {
        axios.put(`http://localhost:9001/api/author/update/${id}`, author)
            .then(res =>{
                console.log(res)
                navigate('/')
            })
            .catch(err =>{
                console.log(err)
            })
    }

    useEffect(() => {
        axios.get(`http://localhost:9001/api/author/${id}`)
            .then(res =>{
                console.log(res)
                setAuthor(res.data.oneAuthorById);
                setName(res.data.name)
            })
            .catch(err =>{
                console.log(err)
            })
    },[])

    return (
        <>
            <div className='container card d-block mx-auto w-85 my-3 p-3'>
            <label className="form-label">Author Name</label>
                <input className="form-control" type='text' value={name} onChange={e => setName(e.target.value)} />
                <br />
                <button className='btn btn-secondary' onClick={editHandler}> Edit </button>
                <Link className='btn btn-primary' to={'/author'}>Cancel</Link>
            </div>
            <p>{id}</p>
            <p>{name}</p>
        </>
    )
}

export default EditOne