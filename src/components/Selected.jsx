import React from 'react';
import PropTypes from 'prop-types';



function Selected(props){

  return (
    <div>
      <div>
         <h1>{props.selectedItem.name}</h1>
         <img className="img-special" src={props.selectedItem.image}/>
     </div>
    </div>
  );
}
Selected.propTypes = {
  selectedItem: PropTypes.object
}
export default Selected;
