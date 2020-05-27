import React from 'react'
import { render } from 'react-dom'
// import { BrowserRouter as  Router } from 'react-router-dom'

// 使用了Route组件进行渲染的组件，会自动注入history等
// import { HashRouter as  Router, Route } from 'react-router-dom'
// import App from './App'
//高阶组件
import HOC from './HOC/HOC.js'
// 联系上下文Context
import ContextTest from './Context'
// PureComponent的使用
import Purememo from './Purememo'


// 组件的生命周期

class SonCom extends React.Component {
    constructor(props){
        super(props)
        console.log('1. 构造函数')
    }
    componentWillMount(){
        // 组件将要挂载，可以进行api的调用，不可进行Dom操作
        console.log('2. 组件将要挂载')

    }
    componentDidMount(){
        // 组件已经挂载们可以进行dom操作，也可以进行状态的更新操作
        console.log('4. 组件已经挂载')
    }
    componentWillReceiveProps(){
        // 父组件传递的属性有变化，在次做响应操作
        console.log('5. 父组件传递的属性更新了')
    }
    shouldComponentUpdate(){
        // 组件是否需要更新，需要发挥布尔值，true是更新
        console.log('6. 组件是否需要更新')
        return true 
    }
    componentWillUpdate(){
        // 组件将要更新
        console.log('7. 组件将要更新')
    }
    componentDidUpdate(){
        // 组件已经更新
        console.log("8. 组件已经更新")
    }
    componentWillUnmount(){
        // 组件已销毁
        console.log("9. 组件已销毁")
    }
    render() {
        console.log('3. 组件渲染')
        return (
            <div>
                我是子组件
                <h3>
                {this.props.title}

                </h3>
                
            </div>
        )
    }
}

class FaCom extends  React.Component {
    constructor(props){
        super(props)
        this.state={
            son:'我是生命周期',
            show:true //用于展示组件销毁的操作
        }

        setTimeout(()=>{
            this.setState({
                son:'更新'
            })
        },2000)

        setTimeout(()=>{
            this.setState({
                show:false //四秒后销毁组件
            })
        },4000)
    }
    render() {
        return (
            <div>
                <h2>组件的生命周期的演示</h2>
                {this.state.show ? <SonCom title={this.state.son}></SonCom> : <div>子组件已经销毁</div> }
               
            </div>
        )
    }
}


render (
    // 演示context
    <ContextTest></ContextTest>
    // 演示高阶组件
    // <HOC title='高阶组件传递的值'></HOC>
    // 演示PureComponent的demo
    // <Purememo></Purememo>
    // <FaCom></FaCom>
    // <Router>
    //     <Route component={App} />
    // </Router>
    ,
    document.querySelector('#root')
)
