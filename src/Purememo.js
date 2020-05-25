import React, { Component, PureComponent } from 'react'
 // PureComponent的使用
 //改：可以使用PureComponent去代替我们的生命周期
// class Title extends Component {
    /*
     shouldComponentUpdate(nextProps){
        // console.log(nextProps)   //{title: "吃饭"}
        return nextProps.title !== this.props.title
    }
     */
class Title extends PureComponent {
    render() {
        console.log('title组件')
        return (
            <div>
                标题：{this.props.title}
            </div>
        )
    }
}

class Count extends Component {
    render() {
        console.log('条数组件')
        return (
            <div>
                条数：{this.props.count}
            </div>
        )
    }
}


export default class Purememo extends Component {
    constructor(props){
        super(props)
        this.state={
            title: '吃饭',
            count: 0
        }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                count:this.state.count+1
            })
        },1000)
    }
    render() {
        return (
            <div>
                <Title title={this.state.title}></Title>
                 <Count count={this.state.count}></Count>
                
            </div>
        )
    }
}
