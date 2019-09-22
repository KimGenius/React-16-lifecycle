import React from 'react'
class ChildComponent extends React.Component {
  constructor(props) {
    super(props)
    this.hello = this.hello.bind(this)
  }
  componentWillUnmount() {
    console.log('goodbye child...')
  }

  componentDidMount() {
    console.log('Hello Child!')
  }
  hello () {
    console.log(this.props.a.a)
  }
  render() {
    // const { list: { item } } = this.props
    const { hello } = this.props
    return (
      <div>
        <button onClick={this.hello}>
          에러!
        </button>
        Hi Child
      </div>
    )
  }
}

export default ChildComponent
