import React, { Component } from 'react'
import { StatusBar, KeyboardAvoidingView } from 'react-native'

import { Container } from '../components/container'
import { Logo } from '../components/Logo'
import { InputWithButton } from '../components/TextInput'
import { ClearButton } from '../components/Buttons'
import { LastConverted } from '../components/Text'
import { Header } from '../components/Header'

const TEMP_BASE_CURRENCY = 'USD'
const TEMP_QUOTE_CURRENCY = 'GBP'
const TEMP_BASE_PRICE = '100'
const TEMP_QUOTE_PRICE = '79.74'
const TEMP_CONVERSION_RATE = 0.7974
const TEMP_CONVERSION_DATE = new Date()

class Home extends Component {

  handlePressQuoteCurrency () {
    console.log('press base')
  }

  handlePressBaseCurrency () {
    console.log('press base')
  }

  handleTextChange () {

  }

  handleSwapCurrency () {

  }
  handleOptionPress () {

  }

  render () {
    return (
      <Container>
        <StatusBar transluent={false} barStyle='light-content' />
        <Header onPress={this.handleOptionPress.bind(this)} />
        <KeyboardAvoidingView behavior='padding'>
          <Logo />
          <InputWithButton
            buttonText={TEMP_BASE_CURRENCY}
            onPress={this.handlePressBaseCurrency.bind(this)}
            defaultValue={TEMP_BASE_PRICE}
            keyboardType='numeric'
            onChangeText={this.handleTextChange.bind(this)}
          />
          <InputWithButton
            buttonText={TEMP_QUOTE_CURRENCY}
            onPress={this.handlePressQuoteCurrency.bind(this)}
            editable={false}
            value={TEMP_QUOTE_PRICE}
          />
          <LastConverted
            date={TEMP_CONVERSION_DATE}
            base={TEMP_BASE_CURRENCY}
            quote={TEMP_QUOTE_CURRENCY}
            conversionRate={TEMP_CONVERSION_RATE}
          />
          <ClearButton
            text='Reverse Currencies'
            onPress={this.handleSwapCurrency}
          />
        </KeyboardAvoidingView>
      </Container>
    )
  }
}

export default Home
