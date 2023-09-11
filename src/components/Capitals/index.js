import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {
    isActiveCapital: countryAndCapitalsList[0].id,
  }

  onChangeCapital = event => {
    this.setState({isActiveCapital: event.target.value})
  }

  getCountry = () => {
    const {isActiveCapital} = this.state
    const findCountry = countryAndCapitalsList.find(
      eachCapital => eachCapital.id === isActiveCapital,
    )
    return findCountry.country
  }

  render() {
    const {isActiveCapital} = this.state

    return (
      <div className="app-container">
        <div className="cart-container">
          <h1 className="heading">Countries And Capitals</h1>
          <div className="selection-container">
            <select
              onChange={this.onChangeCapital}
              className="select-capital"
              value={isActiveCapital}
            >
              {countryAndCapitalsList.map(eachCapital => (
                <option
                  key={eachCapital.id}
                  value={eachCapital.id}
                  className="option"
                >
                  {eachCapital.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="question">is capital of which country?</p>
          </div>
          <p className="country">{this.getCountry(isActiveCapital)}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
