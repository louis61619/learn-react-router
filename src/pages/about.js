import React, { PureComponent } from 'react'
import { renderRoutes, matchRoutes } from 'react-router-config'

import routes from '../router'

import { NavLink, Switch, Route } from 'react-router-dom'

export function AboutHistory () {
  return <h2>企業歷史</h2>
}

export function AboutCulture () {
  return <h2>企業文化</h2>
}

export function AboutContact () {
  return <h2>聯繫我們</h2>
}

export function AboutJoin () {
  return <h2>加入我們GO GO GO</h2>
}

export default class About extends PureComponent {

  render() {
    console.log(this.props.route) //只有透過 renderRoutes 渲染時才會傳遞的參數

    const branch = matchRoutes(this.props.route.routes, '/about') //匹配路徑的輔助函數
    console.log(branch)

    return (
      <div>
        <h2>about</h2>
        <NavLink exact to="/about" activeClassName="about-active">企業歷史</NavLink>
        <NavLink to="/about/culture" activeClassName="about-active">企業文化</NavLink>
        <NavLink to="/about/contact" activeClassName="about-active">聯繫我們</NavLink>
        <button onClick={e => this.jumpToJoin()}>加入我們</button>

        {/* <Switch>
          <Route exact path="/about" component={AboutHistory}></Route>
          <Route path="/about/culture" component={AboutCulture}></Route>
          <Route path="/about/contact" component={AboutContact}></Route>
          <Route path="/about/join" component={AboutJoin} />
        </Switch> */}
        {renderRoutes(this.props.route.routes)}
      </div>
    )
  }
  jumpToJoin() {
    console.log(this.props)
    this.props.history.push("/about/join")
  }
}
