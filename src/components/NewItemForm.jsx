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

  function handleNewItemFormSubmission(event){
    const { dispatch } = props;
    event.preventDefault();
    dispatch(addItem(_name.value, _color.value, _type.value))
    _name.value = '';
  }

  return(
    <div className='addItemForm'>
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
            <option value="navy">Navy</option>
            <option value="khaki">Khaki</option>
          </select>
        </label>
        <br/>
        <button type='submit'>Add Item</button>
      </form>
    </div>
  );
}

export default connect()(NewItemForm);
