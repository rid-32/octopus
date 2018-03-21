import axios from 'axios'

const apiKey = 'Ph_6VA2LwEOLlf-jjF5iNA12761'

export default {
  getAddresses: code => {
    const path = `https://api.getAddress.io/find/${code}?api-key=${apiKey}`

    return axios.get(path).then(result => result.data.addresses)
  },
}
