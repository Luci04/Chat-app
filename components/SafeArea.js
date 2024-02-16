import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SafeArea = ({ style, children }) => {
    return (
        <SafeAreaView style={[styles.conatinerStyle, style]}>
            {children}
        </SafeAreaView>
    )
}

export default SafeArea

const styles = StyleSheet.create({
    conatinerStyle: {
        flex: 1,
        backgroundColor: '#fff'
    }
})