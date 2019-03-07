import constants from './../constants';
const { c } = constants;

export default (state = {}, action) => {
  switch (action.type) {
    case c.SELECT_ITEM:
      return action.itemId;
    default:
      return state;
  }
};
