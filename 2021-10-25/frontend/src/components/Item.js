import { Link } from "react-router-dom";
import '../components/AddItemForm.css';

function Item(props) {
  function handleDelete(itemId) {
    props.deleteItem(itemId);
  }

  return (
    <div>
      { props.isSingleItemView ? 
      <div>
        <div className="itemName">{props.name}</div>
        <div className="itemPrice">{props.price}</div>
        <div className="itemCategory">{props.category}</div>
      </div> : 
      <Link to={`item/${props.id}`}>
        <div className="itemName">{props.name}</div>
        <div className="itemPrice">{props.price}</div>
        <div className="itemCategory">{props.category}</div>
      </Link> }
      { props.isAddToCartButton ? <button>Lisa ostukorvi</button> : 
            <div>
              <button className="deleteButton" onClick={()=>handleDelete(props.id)}>X</button>

             <Link to={`edit-item/${props.id}`}>
               <button className="changeButton">MUUDA</button>
             </Link>
            </div> }
    </div>
  )
}

export default Item;

// Home/AdminHome "true" => ItemList => Item   (props. kaudu võtsin vastu)
// Itemis toimub kustutamine => ItemList => AdminHome (tehakse API päring) (props. kaudu saadan)