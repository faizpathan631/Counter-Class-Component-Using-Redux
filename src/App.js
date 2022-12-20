import React, { Component } from 'react'
import Counter from './components/Counter'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Counter App with Redux !</h1>
        </header>
        <Counter />
      </div>
    )
  }
}

export default App
