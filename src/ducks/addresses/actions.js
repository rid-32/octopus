import types from './const'

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
