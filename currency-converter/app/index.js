import React from 'react'
import EStyleSheet from 'react-native-extended-stylesheet'

import Home from './screens/home'
import CurrencyList from './screens/CurrencyList'

EStyleSheet.build({
  $primaryBlue: '#4F6D7A',
  $white: '#fff',
  $border: '#E2E2E2',
  $inputText: '#797979',
  $disableContainerColor: '#F0F0F0',
  $darkText: '#343434'

  //outline: 1
})

export default () => <CurrencyList />
