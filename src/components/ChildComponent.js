import React from 'react'

class ChildComponent extends React.Component {
  componentWillUnmount() {
    console.log('goodbye child...')
  }

  componentDidMount() {
    console.log('Hello Child!')
  }

  render() {
    return (
      <div>
        Hi Child
      </div>
    )
  }
}

export default ChildComponent
