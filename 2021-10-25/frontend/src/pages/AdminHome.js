import ItemList from '../components/ItemList';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../components/AddItemForm.css';

function AdminHome() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedItems, setLoadedItems] = useState([]);
  
  useEffect(()=>{
    fetch('http://localhost:8080/items').then(res => {
      return res.json();
    }).then(data =>{
      console.log(data);
      setIsLoading(false);
      setLoadedItems(data);
    });
  },[])

  function makeDeleteRequest(itemId) {
    fetch('http://localhost:8080/delete-item/' + itemId,
      { method: 'DELETE' }
    ).then(res => {
      return res.json();
    }).then(data =>{
      setLoadedItems(data);
    });
  }

  if (isLoading) {
    return (<div>Laeb...</div>); 
  }

  return (
    <div className="lisaEse">
      <Link to="add-item">
        <button className="submitButton">Lisa uus ese</button>
      </Link>
      <ItemList onDeleteItem={makeDeleteRequest} isAddToCart={false} items={loadedItems} />
    </div>
  )
}

export default AdminHome;