export const ADD_FEATURE = "ADD_FEATURE"
export const REMOVE_FEATURE = "REMOVE_FEATURE"

export const addFeatureActionCreator = feature => {
    console.log("adding feature below")
    console.log(feature)
    console.log("--------------------")
    return {
        type: ADD_FEATURE,
        payload: feature
    }
}

export const removeFeatureActionCreator = feature => {
    console.log("removing feature below")
    console.log(feature)
    return {
        type: REMOVE_FEATURE,
        payload: feature
    }
}