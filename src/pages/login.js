import React, { PureComponent } from 'react'

export default class Login extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      isLogin: false
    }
  }
  render() {
    return (
      <div>
        login
      </div>
    )
  }
}
