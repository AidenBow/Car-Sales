import React from 'react';
import {connect} from "react-redux"

const Total = props => {

  //console.log(props.additionalPrice)
  return (
    <div className="content">
      <h4>Total Amount: ${props.price + props.additionalPrice}</h4>
    </div>
  );
};

const mapStateToProps = state => {
  let car = state.car
    return {
      price: car.price,
      additionalPrice: state.additionalPrice
    }
}

export default connect(mapStateToProps, {})(Total);
