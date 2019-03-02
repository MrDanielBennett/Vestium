import React from 'react'

function NewItemForm(){
  let _name = null;
  let _type = null;
  let _color = null;

  function handleNewItemFormSubmission(event){
    event.preventDefault();
    console.log(_name.value);
    console.log(_type.value);
    console.log(_color.value);
    _name.value = '';
    _type.value = '';
    _color.value = '';
  }

  return(
    <div>
      <form onSubmit={handleNewItemFormSubmission}>
        <input
          type='text'
          id='name'
          placeholder='Name of Clothing Item'
          ref={(input) => {_name = input;}} />
        <br/>
        <label>
          What type of Clothing is the item?
        <select ref={(input) => {_type = input}}>
            <option value="shirt">Shirt</option>
            <option value="pants">Pants</option>
          </select>
        </label>
        <br/>
        <label>
          What Color is the item?
        <select ref={(input) => {_color = input}}>
            <option value="red">Red</option>
            <option value="yellow">Yellow</option>
            <option value="white">White</option>
            <option value="black">Black</option>
            <option value="pink">Pink</option>
            <option value="blue">Blue</option>
            <option value="purple">Purple</option>
            <option value="orange">Orange</option>
            <option value="green">Green</option>
            <option value="grey">Grey</option>
            <option value="brown">Brown</option>
          </select>
        </label>
        <br/>
        <button type='submit'>Add Item</button>
      </form>
    </div>
  );
}

export default NewItemForm;
