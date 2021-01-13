import React, { PureComponent } from 'react'
import { Redirect } from 'react-router-dom'

export default class User extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      isLogin: false
    }
  }
  render() {
    return this.state.isLogin ? (
      <div>
        User
      </div>
    ) : <Redirect to="/user/login"/>
  }
}
