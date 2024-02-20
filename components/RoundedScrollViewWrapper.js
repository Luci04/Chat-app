import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Color } from '../GlobalStyles';

const RoundedScrollViewWrapper = ({ children }) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        {children}
      </View>
    </View>
  )
}

export default RoundedScrollViewWrapper;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Color.colorBlack,
  },
  container: {
    flex: 1,
    backgroundColor: Color.colorWhite,
    paddingHorizontal: 24,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    overflow: 'hidden'
  }
})