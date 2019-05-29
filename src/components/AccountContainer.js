import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
// import {transactions} from '../transactionsData'

class AccountContainer extends Component {

state = {
    transactions: [],
    search: ''
  }



  componentDidMount() {
    this.fetchTransactions()
  }

  fetchTransactions = () => {
    fetch('https://boiling-brook-94902.herokuapp.com/transactions')
      .then(resp => resp.json())
      .then(transactions => this.setState({ transactions }))
  }


  // handleChange(event) {
  //   // your code here
  // }

  render() {

    return (
      <div>
        <Search />
        <TransactionsList transactions={this.fetchTransactions()}/>
      </div>
    )
  }
}

export default AccountContainer
