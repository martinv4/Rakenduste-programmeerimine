import './AddItemForm.css';
import { useRef } from 'react';
// võtan kasutusele useRef hooki

function AddItemForm(props) {
  // saan ligipääsu vormi inputile
  // selle nimetus peab olema sama, mis 
  // input sees oleval ref={SIIN}
  const nameInputRef = useRef();
  const priceInputRef = useRef();
  const categoryInputRef = useRef();
  function formSubmitHandler(e) {
    e.preventDefault();
    const nameValue = nameInputRef.current.value;
    const priceValue = priceInputRef.current.value;
    const categoryValue = categoryInputRef.current.value;
    const item = {
      name: nameValue,
      price: priceValue,
      category: categoryValue
    }
    props.onAddItem(item);
  }

  // kui toimub nupuvajutus, siis läheb käima onSubmit
  // paremal pool võrdusmärki pannakse käima ülemine funktsioon
  // annan kaasa evendi, millelt kutsun preventDefault()
  
  return (
    <form onSubmit={formSubmitHandler}>
      <label>Eseme nimi</label><br />
      <input className="inputClass" type="text" placeholder="Nimi" required ref={nameInputRef} /><br />
      <label>Eseme hind</label><br />
      <input className="inputClass" type="number" required ref={priceInputRef} /><br />
      <label>Eseme kategooria</label><br />
      <input className="inputClass" type="text" required ref={categoryInputRef} /><br />
      <button className="submitButton">Sisesta uus ese</button>
    </form>
  );
}

export default AddItemForm;