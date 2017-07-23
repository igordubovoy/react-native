import React, { PropTypes } from 'react'
import { Image, View, TouchableOpacity } from 'react-native'

import styles from './styles'

const Header = ({ onPress }) => (
  <View style={styles.container}>
    <TouchableOpacity
      onPress={onPress}
      style={styles.button}>
      <Image
        resizeMode='contain'
        style={styles.icon}
        source={require('./images/gear.png')} />
    </TouchableOpacity>
  </View>
)

Header.propTypes = {
  onPress: PropTypes.func
}

export default Header
