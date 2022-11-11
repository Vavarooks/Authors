import axios from 'axios';
import { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';

const ShowOne = (props) => {
    const {id} = useParams();
    const [author, setAuthor] =({
        _id: "",
        name: ""
    })
    const [name, setName] = useState("");

    return(
        <>
        </>
    )
}

export default ShowOne