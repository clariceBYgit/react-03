import React, { Component } from 'react'

// import withCopyright from './withCopyright'
import Another from './Another'
import { Route, Link, NavLink, Redirect, Switch } from 'react-router-dom'
import {
    Artical,
    Home ,
    Users,
    ArticalDetail,
    NotFound
} from './views' 

class App extends Component {
  // Route  结合render渲染组件
  state={
    isLogin:true
  }
  render() {
    // console.log(this.props)
    return (
      <div>
        <ul>
          <li><Link to='/home'>首页</Link></li>
          {/* NavLink 会自动添加一个class='active' aria-current="page"  */}
          <li><NavLink to='/home'>首页--我是NavLink</NavLink></li>
          <li><Link to='/artical'>文章</Link></li>
          <li><Link to='/users'>用户</Link></li>
        </ul>

        {/* Switch采取不完全匹配 只匹配一个 当遇到有包含路径关系的路由时，将exact加在短的那个上面*/}
        <Switch>
          {/* 渲染路由组件的两个方法   component(优先起作用) 和render  当组件需要传递参数等时，需要使用render方法 */}
          {/* <Route component={Home} path='/home' /> */}
          <Route render={ ()=><Home /> } path='/home' />


          <Route component={Artical} path='/artical' exact />
            {/* 动态路由 类型二   文章详情 */}
          <Route component={ArticalDetail} path='/artical/:id'/>

          {/* <Route component={Users} path='/users'/> */}
          <Route render={ 
            (routeProps) => {return this.state.isLogin? <Users {...routeProps} /> : <div>请登录</div> }
            } path='/users'/>

          {/* 404 */}
          <Route component={NotFound} path='/404'/>
          <Redirect to='/home' from='/' exact />
          <Redirect to='/404' />
        </Switch>
        <hr />
        <Another name='第一个组件' />
      </div>
    )
  }
}
export default App