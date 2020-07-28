import React, { Component } from 'react'

// 演示使用上下文 Context
const { Provider,Consumer } = React.createContext()
// 创建一个数据源，提供数据
let store = {
    name:'易烊千玺',
    age:'20岁'
}
class InFo extends Component {
    render(){    
        return (
            // 数据读取
            <Consumer>
                { 
                store => {
                    return(
                        <div>
                            <h2> 姓名：{store.name}</h2>
                            <h2>年龄：{store.age}</h2>
                        </div>
                    )
                    }
                }
            </Consumer>
        )
    }
}
function ToolBar() {
    return (
        <div>
            <InFo></InFo>
        </div>
        )
    }
    export default class index extends Component {
        render() {
            return (
                <div>
                    {/* 数据提供，将store中的数据传递下去 */}
                    <Provider value={store}>
                        <ToolBar></ToolBar>
                    </Provider>
                </div>
        )
    }
}
