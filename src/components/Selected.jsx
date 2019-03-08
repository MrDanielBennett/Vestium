import React from 'react';
import PropTypes from 'prop-types';



function Selected(props){

  return (
    <div>
        <div>
       <hr/>
       <h1>{props.selectedItem.name}</h1>
       <h2> Type: {props.selectedItem.type} |  Color: {props.selectedItem.color}</h2>
       <hr/>
     </div>
    </div>
  );
}
Selected.propTypes = {
  selectedItem: PropTypes.object
}
export default Selected;
