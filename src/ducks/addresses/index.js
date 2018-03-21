import types from './const'

const initial = {
  collection: [],
  isLoading: false,
  postcode: ''
}

export default function (state = initial, action = {}) {
  switch (action.type) {
    case types.SET_ADDRESSES:
      const collection =  [...action.payload]
      return {
        ...state,
        collection,
      }
    case types.SET_LOADING:
      return {
        ...state,
        isLoading: true,
      }
    case types.UNSET_LOADING:
      return {
        ...state,
        isLoading: false,
      }
    case types.SET_POSTCODE:
      return {
        ...state,
        postcode: action.payload,
      }
    default:
      return state
  }
}
