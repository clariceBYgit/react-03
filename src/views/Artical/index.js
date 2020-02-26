import React, { Component } from 'react'

import { 
    Link,
    // Route
 } from 'react-router-dom'

//  import ArticalDetail from './ArticalDetail'

export default class Artical extends Component {
    render() {
        // console.log(this.props)
        return (
            <div>
                {/* query传参 */}
                <Link to="/artical/1?from=artical">文章一</Link>
                {/* params传参   */}
                {/* <Link to="/artical/1">文章一</Link> */}
                {/* 路由隐式传参 */}
                <Link to={{
                    pathname: '/artical/2',
                    state: {
                        from:'artical'
                    }
                }}>文章二</Link>
                {/* 动态路由 类型一   文章详情*/}
                {/* <Route component={ArticalDetail} path='/artical/:id' /> */}
            </div>
        )
    }
}
