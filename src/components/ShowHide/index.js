// Write your code here
import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {showFirstname: false, showLastname: false}

  onShowFirstName = () => {
    this.setState(prevState => ({showFirstname: !prevState.showFirstname}))
  }

  onShowLastName = () => {
    this.setState(prevState => ({showLastname: !prevState.showLastname}))
  }

  render() {
    const {showFirstname, showLastname} = this.state
    return (
      <div className="app-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="show-hide-container">
          <div className="name-container">
            <button
              type="button"
              className="show-hide-button"
              onClick={this.onShowFirstName}
            >
              Show/Hide Firstname
            </button>
            {showFirstname && <p className="name">Joe</p>}
          </div>
          <div className="name-container">
            <button
              type="button"
              className="show-hide-button"
              onClick={this.onShowLastName}
            >
              Show/Hide Lastname
            </button>
            {showLastname && <p className="name">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
