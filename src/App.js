import React, { Component } from 'react';
import './App.css';
import LoadingWrapper from './LoadingWrapper'
import axios from 'axios'

class App extends Component {
  constructor() {
    super()

    this.state = {
      myData: [{}]
    }
  }

  componentDidMount() {
    axios.get('/api/data').then(res => {
      this.setState({ myData: res.data })
      setTimeout(this.props.loadingToggle.toggleLoad, 2000)
      console.log(this.state.myData)
    })
  }

  render() {
    console.log(this.props)
    return (
      <div className="App">
        {
          this.props.loadingToggle.value
            ?
            <div>I am loading</div>
            :
            <div>Loadedddd</div>
        }
      </div>
    );
  }
}

export default LoadingWrapper(App);
