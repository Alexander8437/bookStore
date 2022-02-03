import { useState, useEffect } from "react";
import Axios from "axios";

const Religious = () => {
    const [listOfBooks, setListOfBooks] = useState([]);
    

    useEffect(() => {
        Axios.get("http://localhost:3001/getBooks").then((response) => {
            setListOfBooks(response.data);
        })
    }, []);

    return (
        <div className="col-md-8 my-5">
            <div className="bookDisplay">
                {listOfBooks.map((books) => {
                    if (books.bookType === 'Religion' || books.bookType === "Spirituality") {
                    return <div>
                        <h3>Book Name: {books.name}</h3>
                        <h6>Author: {books.author} </h6>
                        <h6>Publisher: {books.publisher} </h6>
                        <h6>Price: {books.price} </h6>
                        <h6>Book Category: {books.bookType}</h6>
                        <h6>Release: {books.release} </h6>
                        <h6>Award: {books.award} </h6>
                        <p>About the book: {books.about} </p>
                        <hr></hr>
                    </div> }
                    
                })
                }
            </div>
        </div>
    );
}

export default Religious;
