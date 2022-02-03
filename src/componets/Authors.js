import React from 'react';
import { useState, useEffect } from 'react';
import Axios from 'axios';

const Authors = () => {
    const [listOfAuthors, setListOfAuthors] = useState([]);


    useEffect(() => {
        Axios.get("http://localhost:3001/getAuthors").then((response) => {
            setListOfAuthors(response.data);
        }).catch(() => {
            console.log("Author is not found")
        })
    }, []);
    return <div className="col-md-9 my-5">
        <div className="bookDisplay">
            {listOfAuthors.map((authors) => {
                return <div className='d-flex card p-4'>
                    
                   <u><h3>{authors.name}</h3></u>
                    <p> {authors.details} </p>
                </div>

            })
            }
        </div>
    </div>;
};

export default Authors;
