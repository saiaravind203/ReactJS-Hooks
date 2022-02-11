import React, { Component } from 'react';
import { useEffect, useState  } from "react";


const Newblog = () =>{


    return(
        <div>
            <h2>New Blog</h2>
            <form >
                <label>Title</label><br />
                <input type='text' id='title' ></input> <br />
                <label>Author</label><br />
                <input type='text' id='author' ></input> <br />
                <label>Body</label><br />
                <input type='text' id ='blog' ></input> <br /> <br />
                <input type='submit' value='Add Blog'></input>
            </form>
        </div>
    )
}

export default Newblog; 
