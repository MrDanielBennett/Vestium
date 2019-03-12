import React from 'react'
import {connect} from 'react-redux';
import {v4} from 'uuid';
import { addItem } from './../actions';
import constants from './../constants';
const { c } = constants;

function NewItemForm(props){
  let _name = null;
  let _type = null;
  let _color = null;

  function previewFile() {
    var preview = document.querySelector('img');
    let image = document.querySelector('input[type=file]').files[0];
    var reader  = new FileReader();

    reader.addEventListener("load", function () {
      preview.src = reader.result;
    }, false);

    if (file) {
      reader.readAsDataURL(file);
  }
  return
}


  function handleNewItemFormSubmission(event){
    let _image = document.querySelector('img');
    let file = document.querySelector('input[type=file]').files[0];
    let reader  = new FileReader();
    let test = ''

    reader.addEventListener("load", function () {
      _image.src = reader.result;
      const { dispatch } = props;
      event.preventDefault();
      dispatch(addItem(_name.value, _color.value, _type.value, _image.src))
      _name.value = '';

    }, false);

    if (file) {
      reader.readAsDataURL(file);
  }

  }

  return(
    <div className='addItemForm'>
      <form onSubmit={handleNewItemFormSubmission}>
        <input className="text-input"
          type='text'
          id='name'
          placeholder='Name of Clothing Item'
          ref={(input) => {_name = input;}} />
        <br/>
        <label>
          <h4>What type of Clothing is the item?</h4>
        <select ref={(input) => {_type = input}}>
            <option value="shirt">Shirt</option>
            <option value="pants">Pants</option>
          </select>
        </label>
        <br/>
        <label>
          <h4>What Color is the item?</h4>
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
            <option value="navy">Navy</option>
            <option value="khaki">Khaki</option>
          </select>
        </label>
        <br/>
        <input
          type='file'
          id='image'/>
        <br/>
        <button type='submit'>Add Item</button>
      </form>

      <img src="" height="200" alt=""/>

    </div>
  );
}

export default connect()(NewItemForm);
