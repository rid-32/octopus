import React, { Component } from 'react'

// API
import Api from '../../../api'

// styles
import styles from './styles.module.less'

class Input extends Component {

  state = {
    value: '',
  }

  onChange = ({ target }) =>
    this.setState({
      ...this.state,
      value: target.value,
    })

  onSubmit = e => {
    e.preventDefault()
    const { value } = this.state
    const { history, actions } = this.props

    actions.setLoading()
    actions.setPostcode(value)

    Api.getAddresses(value)
      .then(addresses => {
        actions.setAddresses(addresses)
        actions.unsetLoading()
        history.push('/select')
      })
      .catch(error => {
        actions.unsetLoading()
        history.push('/error')
      })
  }

  render() {
    const { className, placeholder, isLoading } = this.props
    const { value } = this.state

    return (
      <div>
        <form
          className={`${styles.form} ${className}`}
          onSubmit={this.onSubmit}
        >
          <input
            className={styles.input}
            type="text"
            value={value}
            onChange={this.onChange}
            placeholder={placeholder}
          />
          <i className={`fas fa-search ${styles.formIcon}`}></i>
        </form>
        {isLoading && (
          <div className={styles.load}>
            <h3>Loading...</h3>
          </div>
        )}
      </div>
    )
  }
}

export default Input
