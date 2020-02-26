import React, { Component } from 'react'
// 注意只有Route组件渲染的组件才有props的属性 
// 若想要继续访问Route组件的api如history等   可以使用withRouter来解决
// withRouter 是一个高阶组件
import { withRouter } from 'react-router-dom'
 class BackHome extends Component {
     goHome = () => {
        // 方法一：
        // this.props.history.push('/home')
        // 方法二：
        this.props.history.push({
            pathname: '/home',
            state: {
                id: this.props.match.params.id
            }
        })
    }
    render() {
        console.log(this.props)
        return (
          <button onClick={this.goHome}>返回首页2</button>
        )
    }
}
export default withRouter(BackHome)