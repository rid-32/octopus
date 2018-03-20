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

  onFocus = _ => {
    const { history } = this.props
    history.push('/select')
  }

  onSubmit = e => {
    e.preventDefault()
  }

  render() {
    const { className, placeholder } = this.props
    const { value } = this.state

    return (
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
          onFocus={this.onFocus}
        />
      </form>
    )
  }
}

export default Input
