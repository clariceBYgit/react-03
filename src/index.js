import React from 'react'
import { render } from 'react-dom'
// import { BrowserRouter as  Router } from 'react-router-dom'

// 使用了Route组件进行渲染的组件，会自动注入history等
import { HashRouter as  Router, Route } from 'react-router-dom'
import App from './App'

render (
    
    <Router>
        <Route component={App} />
    </Router>
    ,
    document.querySelector('#root')
)