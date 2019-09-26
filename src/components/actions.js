export const ADD_FEATURE = "ADD_FEATURE"
export const REMOVE_FEATURE = "REMOVE_FEATURE"

export const addFeatureActionCreator = feature => {
    console.log("adding feature below")
    console.log(feature)
   
    return {
        type: ADD_FEATURE,
        payload: feature
    }
}