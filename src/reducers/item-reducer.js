import constants from './../constants';
const { c } = constants;

export default(state={}, action) =>{
  let newState;
  const {name, color, type, image, id } = action;

  switch(action.type){
    case c.ADD_ITEM:
      newState = Object.assign({}, state, {
        [id]: {
          name: name,
          color: color,
          type: type,
          image: image,
          id: id
        }
      });
      return newState;
    case c.RECEIVE_ITEM:
      newState = Object.assign({}, state);
      newState[action.item.id] = action.item;
      return newState;
    default:
      return state;
  }
};
