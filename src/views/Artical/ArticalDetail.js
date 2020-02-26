import React, { Component } from 'react'
import { BackHome } from '../../components'
export default class ArticalDetail extends Component {
    // goHome = () => {
    //     // 方法一：
    //     // this.props.history.push('/home')
    //     // 方法二：
    //     this.props.history.push({
    //         pathname: '/home',
    //         state: {
    //             id: this.props.match.params.id
    //         }
    //     })
    // }
    render() {
        console.log(this.props)
        return (
            <div>
                文章详情{this.props.match.params.id}
                <BackHome />
                {/* 返回首页 编程式导航 采用history.push */}
                {/* <button onClick={this.goHome}>返回首页</button> */}
            </div>
        )
    }
}
