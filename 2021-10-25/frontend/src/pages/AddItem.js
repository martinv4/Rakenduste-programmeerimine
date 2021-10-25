import AddItemForm from '../components/AddItemForm'

function AddItem() {
  function itemSubmitHandler(item) {
    // backendi päring - API ots, method millega teen 
    // (GET päringule pole vaja)
    // body annan kaasa
    // headersis ütlen mis tüüpi see body on
    fetch('http://localhost:8080/items',{
      method: 'POST',
      body: JSON.stringify(item),
      headers: {
        'Content-Type':'application/json'
      }
    });
  }

  // onAddItem kutsutakse välja AddItemForm sees props.onAddItem()
  // paremal pool võrdusmärgi panen käima ülemise funktsiooni
  return (
    <div>
      <h1>Lisa uus ese</h1>
      <AddItemForm onAddItem={itemSubmitHandler}/>
    </div>
    );
}

export default AddItem;