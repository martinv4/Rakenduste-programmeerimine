import { useContext, useState, useRef, useEffect } from "react";
import { Context } from "../store";
import { addPost, removePost, updatePosts } from "../store/actions";
import { Table } from 'antd';

function Posts() {
  const [title, setTitle] = useState("");
  const [textbody, setTextbody] = useState("");
  const [deletableID, setDeletableID] = useState("");
  const [state, dispatch] = useContext(Context);
  const inputRef = useRef(null);

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
      dataIndex: 'textbody',
      key: 'textbody',
    },
    {
      title: 'Loomiskuupäev',
      dataIndex: 'createdAt',
      key: 'createdAt',
    },
  ];

  // Ilma dependency massivita ehk ilma [] kutsub välja igal renderdusel
  // tühja massiivi dependencyna esimest korda
  // saab ka kutsuda teatud state muutustel välja

  // useEffect(() => {
  //   dispatch(updatePosts([
  //     {
  //       id: 1,
  //       title: "Test-prefetched-array-1"
  //     },
  //     {
  //       id: 2,
  //       title: "Test-prefetched-array-2"
  //     },
  //     {
  //       id: 3,
  //       title: "Test-prefetched-array-3"
  //     },
  //     {
  //       id: 4,
  //       title: "Test-prefetched-array-4"
  //     },
  //   ]))
  // }, [])

  useEffect(() => {
    fetch('http://localhost:8081/api/post').then(res => {
      return res.json();
    }).then(async (data) => {
      await dispatch(updatePosts(data))
    })
  }, [])

  // Või võite panna eraldi nupu, et "Get latest from database" (Sync)

  const handleNewPostSubmit = (e) => {
    e.preventDefault();

    setTitle("");
    setTextbody("");

    addNewPost()

    if (inputRef.current) inputRef.current.focus();
  };

  const handleDeletePostSubmit = (e) => {
    e.preventDefault();

    deletePost();

    if (inputRef.current) inputRef.current.focus();
  };

  const deletePost = () => {
    document.querySelectorAll("[data-row-key='']")

    fetch("http://localhost:8081/api/post/delete/" + deletableID, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    }).then(() => {
      //alert("Postitus kustutatud");
    }).catch((error) => {
      alert(error);
    });

    window.location.reload();

    //dispatch(removePost(deletableID));
  }

  const addNewPost = () => {
    const newPost = {
      id: Date.now(),
      title: title,
      textbody: textbody,
      createdAt: new Date().toLocaleString()
    };

    //Salvestame andmebaasi ja kui on edukas, 
    //siis teeme dispatchi ja uuendame state lokaalselt

    fetch("http://localhost:8081/api/post/create", {
      method: "POST",
      body: JSON.stringify(newPost),
      headers: { "Content-Type": "application/json" },
    }).then(() => {
      //alert("Postitus salvestatud");
    }).catch((error) => {
      alert(error);
    });

    window.location.reload();

    //dispatch(addPost(newPost));
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Postitused</h1>
      <hr/><br/>
      <form onSubmit={handleNewPostSubmit}>
        <label>Postituse pealkiri </label>
        <input
          ref = {inputRef}
          type = "text"
          value = {title}
          label = "Pealkiri"
          onChange = {(e) => setTitle(e.target.value)}
          // autoFocus
        />
        <br/>
        <label>Postituse sisu </label>
        <input
          ref = {inputRef}
          type = "text"
          value = {textbody}
          onChange = {(e) => setTextbody(e.target.value)}
        />
        <br/><br/>
        <button type="submit">Lisa uus postitus</button>
      </form>
      <br/><hr/><br/>
      <form onSubmit={handleDeletePostSubmit}>
        <label>Postituse ID </label>
        <input
          ref = {inputRef}
          type = "text"
          value = {deletableID}
          onChange = {(e) => setDeletableID(e.target.value)}
        />
        <br/><br/>
      <button type="submit">Kustuta postitus</button>
      </form>
      <br/><hr/><br/>

      {/* {state.posts.data.map((e) => (
        <li key={e.id}>
          {e.id} {e.title}
          <span
            style={{ cursor: "pointer" }}
            onClick={() => dispatch(removePost(e.id))}
          >
            &#128540;
          </span>
        </li>
      ))} */}

    <Table columns={columns} dataSource={state.posts.data} rowKey='_id' />
    </div>
  );
}

export default Posts;