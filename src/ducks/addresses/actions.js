import types from './const'
import Api from '../../api'

export const setAddresses = addresses => ({
  type: types.SET_ADDRESSES,
  payload: addresses,
})

export const setLoading = () => ({
  type: types.SET_LOADING
})

export const unsetLoading = () => ({
  type: types.UNSET_LOADING
})

export const setPostcode = postcode => ({
  type: types.SET_POSTCODE,
  payload: postcode,
})

export const getAddresses = postcode =>
  dispatch => {
    dispatch(setLoading())
    return Api.getAddresses(postcode)
      .then(addresses => {
        dispatch(setAddresses(addresses))
        dispatch(unsetLoading())
        return addresses
      })
  }
