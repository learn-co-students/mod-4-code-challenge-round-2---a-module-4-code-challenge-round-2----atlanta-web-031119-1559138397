import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'
import Transaction from './Transaction'

class AccountContainer extends Component {

  constructor(props) {
    super(props)

    this.state = {
      transactions: [],
      query: ''
    }
    // get a default state working with the data imported from TransactionsData
    // use this to get the functionality working
    // then replace the default transactions with a call to the API

  }

  componentDidMount(){
    fetch('https://boiling-brook-94902.herokuapp.com/transactions')
    .then(res => res.json())
    .then(data => this.setState({transactions: data}))
  }

  handleChange = (e) => {
    console.log(filteredTransactions)
    let filteredTransactions = this.state.transactions.filter(transaction => transaction.category.includes(this.state.query))
    this.setState({
      query: e.target.value,
      transactions: filteredTransactions
    })
  }

  render() {
    return (
      <div>
        <Search onChange={this.handleChange}/>
        <TransactionsList transactions={this.state.transactions}/>
      </div>
    )
  }
}

export default AccountContainer
