import React from 'react';
import {connect} from "react-redux"
import { addFeatureActionCreator } from './actions';

const AdditionalFeature = props => {

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={() => props.addFeature(props.feature)} >Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

// const mapStateToProps = state => {
//   let car = state.car
//     return {
//       feature: state.car.feature
//     }
// }

// export default connect(mapStateToProps, {})(AdditionalFeature);
   



export default connect(null, {
  addFeature: addFeatureActionCreator
})(AdditionalFeature)