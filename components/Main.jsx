import axios from 'axios';
import React, { useState } from 'react'

export default function Main() {
    const [posts,setposts]=useState()
    //get all posts 
    const  All=()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(res=>setposts(res.data))
        .catch(err=>console.log(err))
    }
    //get posts that id is true
    const ById=()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts/1")
        .then(res=>console.log(res.data))
        .catch(err=>console.log(err))
    }
    const CreatePost =()=>{
        axios.post("https://jsonplaceholder.typicode.com/posts",{
            title:"TITLE",
            body :"BODY",
            userId:999
        }).then(res=>console.log(res.data))
        .catch(err=>console.log(err))
    }
    const UpdatePost=()=>{
        axios.put("https://jsonplaceholder.typicode.com/posts/1",{
        title:"TITLE",
        body :"BODY",
        userId:999
    }).then(res=>console.log(res.data)).catch(err=>console.log(err))
    }
    const DeletePost=()=>{
        axios.delete("https://jsonplaceholder.typicode.com/posts/1").then(res=>console.log(res)).catch(err=>console.log(err))
    }
  return (
    <>
    <h1>open console to see results</h1>
      <div className="buttons">
        <button onClick={All}>Show All</button>
        <button onClick={ById}>Show Byid</button>
        <button onClick={CreatePost}>Create</button>
        <button onClick={UpdatePost}>Update</button>
        <button onClick={DeletePost}>Delete</button>
      </div>
      <div className="results">
        {
           posts && posts.map((item)=>{
                return (
                    <>
                    <span key={item.id}>{item.title}</span><br />
                    </>
                )
            })
        }
      </div>
    </>
  );
}
