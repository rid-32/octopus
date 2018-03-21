export const getAddresses = state =>
  state.addresses

export const getAddressesCollection = state =>
  getAddresses(state).collection

export const getPostcode = state =>
  getAddresses(state).postcode
