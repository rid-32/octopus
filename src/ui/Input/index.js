import React, { Component } from 'react'

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
    const { history, actions, closeMessage } = this.props

    if (value) {
      actions.setPostcode(value)
      actions.getAddresses(value)
        .then(addresses => {
          closeMessage()
          history.push('/select')
        })
        .catch(error => {
          actions.unsetLoading()
          history.push('/error')
        })
    }
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
          <i className={`fas fa-search ${styles.formIcon}`} onClick={this.onSubmit}></i>
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
