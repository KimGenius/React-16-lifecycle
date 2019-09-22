import React from 'react'
import ChildComponent from './components/ChildComponent'

class App extends React.Component {
  constructor(props) {
    super(props)
    console.log('constructor')
    this.state = {
      a: 1,
      isChild: true
    }
  }

  render() {
    console.log('render')
    const { a, isChild } = this.state
    return (
      <div>
        React-16-lifecycle
        <p>
          a: {a}
        </p>
        <button onClick={() => {
          this.setState({
            a: a + 1
          })
        }}>
          Update Button
        </button>
        {isChild &&
        <ChildComponent
          hello={() => {
            console.log('heelo')
          }}
        />
        }
        <button onClick={() => {
          this.setState({
            isChild: !isChild
          })
        }}>
          Toggle Child
        </button>
      </div>
    )
  }

  componentDidMount() {
    console.log('componentDidMount')
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log('shouldComponentUpdate')
    console.log(nextProps, nextState, nextContext)
    return true
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate')
    console.log(prevProps, prevState)
    return "Hello i'm getSnapshotBeforeUpdate!"
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate')
    console.log(prevProps, prevState, snapshot)
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
  }

  componentDidCatch(error, errorInfo) {
    console.log('componentDidCatch')
    console.log('error in ChildComponent')
    console.log(error, errorInfo)
  }
}

export default App
