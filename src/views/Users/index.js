import React, { Component } from 'react'

import querystring from 'querystring'
export default class Users extends Component {
    constructor(props){
        super(props)
    }
    render() {
        // http://localhost:3000/#/users?name=iewn   获取地址栏？后的参数，
        // 方法一： 使用URLSearchParams()
        const params = new URLSearchParams(this.props.location.search)
        console.log(params.get('name'))  // get()方法获取参数    iewn

        // 方法二： querystring.parse() 需要引入

        const values = querystring.parse(this.props.location.search)
        console.log(values)  //  {?name: "iewn"}
        return (
            <div>
                users
            </div>
        )
    }
}
