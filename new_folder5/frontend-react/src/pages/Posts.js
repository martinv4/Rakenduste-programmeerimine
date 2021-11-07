import { useEffect, useContext, useState, useRef } from "react";
import { Context } from "../store";
import { addPost, removePost, updatePosts } from "../store/actions";

import {Table} from 'antd';

function Posts() {
  const [state, dispatch] = useContext(Context);
  const inputRef = useRef(null);

 const [title, setTitle] = useState("");
 const [body, setBody] = useState("");
 const [autor, setAutor] = useState("");

 const [IdDelete, setIdDelete] = useState("");

 const columns = [
    {
      title: 'ID',
      dataIndex: '_id',
      key: '_id',
    },
    {
      title: 'Pealkiri',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Sisu',
      dataIndex: 'body',
      key: 'body',
    },
	 /*{
	   title: 'Autor',
	   dataIndex: 'autor',
	   key: 'autor',
	   }*/
	   {
	   title: 'Date posted',
	   dataIndex: 'createdAt',
	   key: 'createdAt',
	   }
 ];

useEffect(() => {
    fetch('http://localhost:8081/api/post')
	.then(response => {return response.json();})
	.then(async (data) => {await dispatch(updatePosts(data))})
  }, 
 [])

  const handleSubmit = (e) => {
    e.preventDefault();

    setTitle("");
	  setBody("");
	//setAutor("");

    addNewPost()

    if (inputRef.current) inputRef.current.focus();
  };

  const addNewPost = () => {
    const newPost = {
      id: Date.now(),
      title: title,
	    textbody: body,
	  date: new Date()
    };

	//  1025

    fetch("http://localhost:8081/api/post/create", {
      method: "POST",
      body: JSON.stringify(newPost),
      headers: {"Content-Type": "application/json"},

    }).then(() => {
      alert("õnnestus");
    }).catch((error) => {
      alert(error);
    });
	
  };

  const handleDeleteSubmit = (e) => {
    e.preventDefault();

    deletePost();

    if (inputRef.current) inputRef.current.focus();
  };

  	//1025
  const deletePost = () => {
    document.querySelectorAll("[data-row-key='']")
		fetch("http://localhost:8081/api/post/delete/" + IdDelete, {
      method: "DELETE",
      headers: {"Content-Type": "application/json"},

    }).then(() => {
      alert("õnnestus");
    }).catch((error) => {
      alert(error);
    });
  }

  //console.log({ inputRef });

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Posts</h1>
      <form onSubmit={handleSubmit}>
	  <label>Title:</label><input
          ref={inputRef}
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
		<label>Body:</label><input 
		  ref={inputRef}
		  type="text"
		  value={body}
		  onChange={(e) => setBody(e.target.value)}
		/>
		
		
        <button type="submit">Submit</button>
      </form>
	  <br></br>
	  <form onSubmit={handleDeleteSubmit}>
	  <label>Post ID to delete:</label><input 
		   ref={inputRef}
		   type="text"
		   value={IdDelete}
		   onChange={(e) => setIdDelete(e.target.value)}
		  />
		  <button type="submit">Delete</button>
		  </form>
		  <Table
		  	columns={columns} 
			dataSource={state.posts.data} 
			rowKey='_id' 
		  />
    </div>
  );
}

export default Posts;
