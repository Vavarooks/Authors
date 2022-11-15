import axios from 'axios';
import { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
const ShowOne = (props) => {

    const {id} = useParams();

    const [author, setAuthor] = useState({
        _id: "",
        name: ""
    })
    const [name, setName] = useState("");

    const { removeAuthor } = props;

    const deleteAuthor = (id) => {
        axios.delete(`http://localhost:9001/api/author/${id}`)
            .then(res => {
                removeAuthor(id)
                console.log(res);
            })
            .catch(err => console.error(err));
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
    })

    return (
        <>
            <div className='container card d-block mx-auto w-85 my-3 p-3'>
                <p>Author id: {id}</p>
                <h1>Author Name: {name}</h1>
                <button className='btn btn-danger' onClick={(e) => { deleteAuthor(id) }}>Delete</button>
            </div>
        </>
    )
}

export default ShowOne