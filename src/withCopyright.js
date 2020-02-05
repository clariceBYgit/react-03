import React, { Component } from 'react'

const withCopyright = (YourComponent) => {
  return class WithCopyright extends Component {
    render () {
      console.log(this.props)
      return (
        <>
          <YourComponent {...this.props} />
          <div>&copy; 2020 &emsp; 千&nbsp;玺</div>
        </>
      )
    }
  }
}

export default withCopyright