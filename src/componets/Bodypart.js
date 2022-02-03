import React from 'react';
import Religious from '../Religious';
import ListItems from '../componets/ListItems';
import Mainportion from '../componets/Mainportion';
import Middleportion from '../componets/Middleportion';
import Lastportion from '../componets/Lastportion';
import About from '../componets/About';
import { useState, useEffect } from "react";
import Axios from "axios";
import {
  
  Switch,
  Route,

}
  from 'react-router-dom'
import Authors from '../componets/Authors';
import Architecture from '../bookType/Architecture';
import AwarWinners from './headers/AwarWinners';

const Bodypart = () => {
  const [listOfBooks, setListOfBooks] = useState([]);


  useEffect(() => {
    Axios.get("http://localhost:3001/getBooks").then((response) => {
      setListOfBooks(response.data);
    })
  }, []);

  return <div className="container my-5 py-4">
    <div className='row'>
      <div className="col-md-3">
        <ListItems />
      </div>
      <Switch>
        <Route exact path="/" render={() => {
          return (<>
            <div className='col-md-9 my-5'>
              <Mainportion /><br></br>
              <hr />
              <Middleportion /><br></br>
              <hr />
              <Lastportion />
            </div> </>)
        }} >
        </Route>
        <Route exact path="/religion&spirituality">
          <Religious />
        </Route>
        <Route exact path="/architecture" >
          <Architecture />
        </Route>
        <Route exact path="/Science&Mathematics">

          <div className="col-md-8 my-5">
            <div className="bookDisplay">
              {listOfBooks.map((books) => {
                if (books.bookType === "Science" || books.bookType === "Mathematics") {
                  return <div>
                    <h3> {books.name}</h3>
                    <h6>Author: {books.author} </h6>
                    <h6>Publisher: {books.publisher} </h6>
                    <h6>Price: {books.price} </h6>
                    <h6>Book Category: {books.bookType}</h6>
                    <h6>Release: {books.release} </h6>
                    <h6>Award: {books.award} </h6>
                    <p>About the book: {books.about} </p>
                    <hr></hr>
                  </div>
                }
                return })
              }
            </div>
          </div>
        </Route>
        <Route exact path="/Biographies&Memoirs" >
          <div className="col-md-8 my-5">
            <div className="bookDisplay">
              {listOfBooks.map((books) => {
                if (books.bookType === "Biographies" || books.bookType === "Memoirs") {
                  return <div>
                    <h3> {books.name}</h3>
                    <h6>Author: {books.author} </h6>
                    <h6>Publisher: {books.publisher} </h6>
                    <h6>Price: {books.price} </h6>
                    <h6>Book Category: {books.bookType}</h6>
                    <h6>Release: {books.release} </h6>
                    <h6>Award: {books.award} </h6>
                    <p>About the book: {books.about} </p>
                    <hr></hr>
                  </div>
                }
                return})
              }
            </div>
          </div>
        </Route>
        
        <Route exact path="/getAuthors">
          <Authors />
        </Route>

      </Switch>
    </div>
  </div>;
};

export default Bodypart; 