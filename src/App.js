import React, { PureComponent } from 'react'
import { renderRoutes } from 'react-router-config'

import routes from './router'

import {
  // BrowserRouter,
  // Link,
  NavLink,
  Route,
  Switch,
  withRouter
} from 'react-router-dom'

import About from './pages/about'
import Home from './pages/home'
import Login from './pages/login'
import NoMatch from './pages/noMatch'
import Profile from './pages/profile'
import User from './pages/user'
import Product from './pages/product'
import Detail from './pages/detail'
import Detail2 from './pages/detail2'
import Detail3 from './pages/detail3'

class App extends PureComponent {

  render() {
    const id = 'abc'
    const info = { name: 'Renny', age: 18 }
    return (
      <div>

        {/* <Link to="/">首頁</Link>
          <Link to="/about">關於</Link>
          <Link to="/profile">我的</Link> */}

        {/* NavLink的使用 */}
        {/* <NavLink exact to="/" activeStyle={{color: 'red'}}>首頁</NavLink>
          <NavLink exact to="/about" activeStyle={{color: 'red'}}>關於</NavLink>
          <NavLink exact to="/profile" activeStyle={{color: 'red'}}>我的</NavLink> */}

        <NavLink exact to="/" activeClassName='link-active'>首頁</NavLink>
        <NavLink to="/about" activeClassName='link-active'>關於</NavLink>
        <NavLink exact to="/profile" activeClassName='link-active'>我的</NavLink>
        <NavLink to="/abc" activeClassName='link-active'>abc</NavLink>
        <NavLink to="/user" activeClassName='link-active'>用戶</NavLink>
        <NavLink to={`/detail/${id}`} activeClassName='link-active'>詳情</NavLink>
        <NavLink to={`/detail2?name=Renny&age=25`} activeClassName='link-active'>詳情2</NavLink>
        <NavLink to={{
          pathname: "/detail3",
          search: "?sort=name",
          // hash: "#the-hash",
          state: info
        }} activeClassName='link-active'>詳情3</NavLink>
        <button onClick={e => this.jumpToProduct()}>商品</button>

        {/*// switch組件可以進行排他操作 
        <h2>哈哈哈</h2>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/profile" component={Profile} />
          <Route path="/:id" component={User} /> 
          <Route exact path="/user" component={User} />
          <Route path="/user/login" component={Login} />
          <Route path="/product" component={Product} />
          <Route path="/detail/:id" component={Detail} />
          <Route path="/detail2" component={Detail2} />
          <Route path="/detail3" component={Detail3} />
          <Route component={NoMatch} />
        </Switch> */}
        {renderRoutes(routes)}
        <h2>呵呵呵</h2>
      </div>
    )
  }
  jumpToProduct() {
    // 只有通過路由渲染才有history
    this.props.history.push('/product')
  }
}

export default withRouter(App)

