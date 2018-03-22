import axios from 'axios'

const apiKey = 'LNo3T9HgFkSiqXLuOirNFQ12774'

export default {
  getAddresses: code => {
    const path = `https://api.getAddress.io/find/${code}?api-key=${apiKey}`

    return axios.get(path).then(result => result.data.addresses)
  },
}
