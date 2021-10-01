import './AddItemForm.css';
import {useRef} from 'react';

function AddItemForm(props){
    const nameInputRef=useRef();
    const priceInputRef=useRef();
    const categoryInputRef=useRef();

    function formSubmitHandler(e){
        e.preventDefault();
        console.log("õnnestus")
        console.log(nameInputRef.current.value);
        console.log(priceInputRef.current.value);
        console.log(categoryInputRef.current.value);
        const nameValue = nameInputRef.current.value
        const priceValue = priceInputRef.current.value
        const categoryValue = categoryInputRef.current.value

        const item = {
            name: nameValue,
            price:priceValue,
            category:categoryValue
        }
        console.log(item);
        props.onAddItem(item);
    }
    return(<form onSubmit={formSubmitHandler}>
        <label>Eseme nimi</label>
        <br></br>
        <input type="text" required ref={nameInputRef}></input>
        <br></br>
        <label>Eseme hind</label>
        <br></br>
        <input type="text" required ref={priceInputRef}></input>
        <br></br>
        <label>Eseme kategooria</label>
        <br></br>
        <input type="text" required ref={categoryInputRef}></input>
        <br></br>
        <button>Sisesta uus ese</button>
    </form>);
}

export default AddItemForm;