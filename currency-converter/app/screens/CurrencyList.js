import React, { Component } from 'react'
import { FlatList, View, StatusBar } from 'react-native'

import { ListItem, Separator } from '../components/List'

import currencies from '../data/currencies'

const TEMP_CURRENT_CURRENCY = 'CAD'

class CurrencyList extends Component {
  handlePress () {

  }
  render () {
    return (
      <View style={{flex: 1}}>
        <StatusBar barStyle='default' transcluent={false} />
        <FlatList
          data={currencies}
          renderItem={({ item }) => (
            <ListItem
              text={item}
              selected={item === TEMP_CURRENT_CURRENCY}
              onPress={this.handlePress}
            />
          )}
          keyExtractor={item => item}
          ItemSeparatorComponent={Separator}
        />
      </View>
    )
  }
}

export default CurrencyList
