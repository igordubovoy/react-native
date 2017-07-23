import React, { Component } from 'react'
import { View, Text, Keyboard, Animated, Platform } from 'react-native'

import styles from './styles'

const ANIMATION_DURATION = 250

class Logo extends Component {
  constructor (props) {
    super(props)

    this.containerImageWidth = new Animated.Value(styles.$largeContainerSize)
    this.imageWidth = new Animated.Value(styles.$largeImageSize)
  }
  componentDidMount () {
    let showListener = Platform.OS === 'android' ? 'keyboardDidShow' : 'keyboardWillShow'
    let hideListener = Platform.OS === 'android' ? 'keyboardDidHide' : 'keyboardWillHide'

    this.keyboardShowListener = Keyboard.addListener(showListener, this.keyboardShow.bind(this))
    this.keyboardHideListener = Keyboard.addListener(hideListener, this.keyboardHide.bind(this))
  }

  componentWillUnmount () {
    this.keyboardShowListener.remove()
    this.keyboardHideListener.remove()
  }

  keyboardShow () {
    Animated.parallel([
      Animated.timing(this.containerImageWidth, {
        toValue: styles.$smallContainerSize,
        duration: ANIMATION_DURATION
      }).start(),
      Animated.timing(this.imageWidth, {
        toValue: styles.$smallImageSize,
        duration: ANIMATION_DURATION
      }).start()
    ]).start()
  }

  keyboardHide () {
    Animated.parallel([
      Animated.timing(this.containerImageWidth, {
        toValue: styles.$largeContainerSize,
        duration: ANIMATION_DURATION
      }).start(),
      Animated.timing(this.imageWidth, {
        toValue: styles.$largeImageSize,
        duration: ANIMATION_DURATION
      }).start()
    ]).start()
  }
  render () {
    const containerImageStyle = [
      styles.containerImage,
      { width: this.containerImageWidth, height: this.containerImageWidth }
    ]
    const imageStyles = [styles.logo, { width: this.imageWidth }]

    return (
      <View style={styles.container}>
        <Animated.Image
          resizeMode='contain'
          source={require('./images/background.png')}
          style={containerImageStyle}>
          <Animated.Image
            resizeMode='contain'
            source={require('./images/logo.png')}
            style={imageStyles} />
        </Animated.Image>
        <Text style={styles.text}>Currency Converter</Text>
      </View>
    )
  }
}

export default Logo
