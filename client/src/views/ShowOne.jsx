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

    useEffect(() => {
        axios.get(`http://localhost:9001/api/Author/${id}`)
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
            </div>
        </>
    )
}

export default ShowOne