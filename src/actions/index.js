import constants from './../constants';
const { firebaseConfig, c } = constants;
import Firebase from 'firebase';
import Moment from 'Moment';

Firebase.initializeApp(firebaseConfig);
const items = Firebase.database().ref('items');

export function addItem(_name, _color, _type, _image){
  return () => items.push({
    name: _name,
    color: _color,
    type: _type,
    image: _image,
  });
}

function receiveItem(itemFromFirebase) {
  return {
    type: c.RECEIVE_ITEM,
    item: itemFromFirebase
  };
}

export function watchFirebaseItemRef(){
  return function(dispatch) {
    items.on('child_added', data => {
      const newItem = Object.assign({}, data.val(), {
        id: data.getKey()
      });
      dispatch(receiveItem(newItem));
    });
  };
}
