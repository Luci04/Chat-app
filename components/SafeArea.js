import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SafeArea = ({ style, children }) => {

    return (
        <SafeAreaView style={[styles.conatinerStyle, style]}>
            <StatusBar backgroundColor={'#000'} barStyle={'light-content'} translucent={false} />
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