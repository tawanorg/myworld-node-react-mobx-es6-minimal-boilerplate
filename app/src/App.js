import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';

@observer
export default class App extends Component {

  constructor(props) {
    super(props)
    this._props = props.data
    this._props.onClickDisabled = false
    this._props.onClickLabel = "Load data"
  }

  handleLoadData(e) {
    e.preventDefault()
    this._props.loadData();
  }

  renderLoading() {
    return (
      <div>
        Loading..
      </div>
    );
  }

  renderCountryList(entries) {
    return entries.map((entry, index) => {
      return(
        <div key={index}>
          <li>{entry.company}</li>
        </div>
      )
    })
  }

  handleButtonLabel(isLoading) {
    if(isLoading === true) {
      this._props.onClickDisabled = true
      this._props.onClickLabel = "Loading.."
    } else {
      this._props.onClickDisabled = false
      this._props.onClickLabel = "Load data"
    }
  }


  render() {

    let isLoading = this._props.isLoading
    let isPost = this._props.posts
    let renderData

    this.handleButtonLabel(isLoading)
    if(isLoading === true) {
      renderData = this.renderLoading()
    } else {
      renderData = this.renderCountryList(isPost)
    }

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>MyWorld Node/Express/React/Mobx</h2>
        </div>
        <p className="App-intro">
          <small> This stack has been modified by <i><a href="mailto:mrtawans@gmail.com">@timtawan</a></i></small>
        </p>
        <button type="button" disabled={ this._props.onClickDisabled } onClick={ this.handleLoadData.bind(this) }>
        { this._props.onClickLabel }
        </button>
        { renderData }
        <DevTools />
      </div>
    );
  }
}
