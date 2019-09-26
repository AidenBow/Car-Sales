import {ADD_FEATURE, REMOVE_FEATURE } from "./actions"

const initialState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    store: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
  };

  export const reducer = (state = initialState, action) => {
    let car = state.car
    switch(action.type) {
      case ADD_FEATURE:
        state.additionalPrice += action.payload.price
        return {
          ...state,
          car: {
            ...car,
            features: [...car.features, action.payload]
          }
        }
      case REMOVE_FEATURE:
        state.additionalPrice -= action.payload.price
        return {
          ...state,
          car: {
            ...car,
            features: car.features.filter(feature => feature.id !== action.payload.id)
          }
        }
      default:
      return state
    }
  }