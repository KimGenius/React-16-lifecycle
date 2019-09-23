import React from 'react'
class ChildComponent extends React.Component {
  componentWillUnmount() {
    console.log('goodbye child...')
  }

  componentDidMount() {
    console.log('Hello Child!')
  }
  render() {
    const { hello } = this.props
    // hello()
    return (
      <div>
        <button onClick={() => {
          try {
            hello()
          } catch (err) {
            console.log(err)
          }
        }}>
          에러!
        </button>
        Hi Child
      </div>
    )
  }
}

export default ChildComponent
